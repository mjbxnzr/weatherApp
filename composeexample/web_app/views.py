from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from rest_framework import status
from rest_framework.decorators import (api_view,
                                       permission_classes)
from rest_framework.response import Response

from web_app.services.weather_data_service import WeatherDataResultService
from web_app.models.models import City
from web_app.serializers.serializer import CitySerializer

from web_app.forms import CityForm

def states(request):
    return render(request,'web_app/data_table.html')

def home(request):
    return render(request,'web_app/home_dashboard.html')

@api_view(['POST'])
def get_weather(request):
    print(request.data)
    location_info = request.data

    try:
        weather_result = WeatherDataResultService(location_info).process_location_info()
    except Exception as e:
        print(e)

    return Response(weather_result, content_type="application/json", status=status.HTTP_200_OK)

@api_view(['GET'])
def get_city_list(request):
    orders = City.objects.all()
    serializer = CitySerializer(orders, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_city(request):
    form = CityForm(request.POST or None)
    error = None
    create_city_form = request.data
    try:
        check_duplicate = City.objects.filter(Name=create_city_form["Name"]).exists()
        if check_duplicate is False:
            new_form = City(Name=create_city_form["Name"],
                            AuthorEmail=create_city_form["AuthorEmail"])
            new_form.save()
        else:
            error = {
                'error':'City name already exist'
            }
            return Response(error, content_type="application/json", status=status.HTTP_200_OK)

    except Exception as e:
        return Response(e, content_type="application/json", status=status.HTTP_500_INTERNAL_SERVER_ERROR)


    return Response({'r':'done'}, content_type="application/json", status=status.HTTP_200_OK)


def city_form(request):
    return render(request, "web_app/page_2_dashboard.html")
