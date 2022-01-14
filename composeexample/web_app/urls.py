from django.urls import path
from . import views
urlpatterns = [
path('/states',views.states,name='states'),
path('',views.home,name='home'),
path('/get_weather',views.get_weather,name='get_weather'),
path('/cityList',views.get_city_list,name='cityList'),
path('/add_city',views.create_city,name='add_city'),
path('/update_city',views.update_city,name='update_city'),
path('/city_form',views.city_form,name='city_form'),
path('/remove_city',views.remove_city,name='remove_city'),
path('/get_weather/by_city_name',views.by_city_name,name='by_city_name')
]