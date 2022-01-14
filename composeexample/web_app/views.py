from django.shortcuts import render

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


def create_city(request):
    form = CityForm(request.POST or None)

    if form.is_valid():
        temp_form = form.cleaned_data
        new_form = City(Name=temp_form["Name"],
                        AuthorEmail=temp_form["AuthoEmail"])
        new_form.save()

    
    context = {
        'form':form
    }

    return render(request, "web_app/create_city_form.html", context)
