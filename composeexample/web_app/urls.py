from django.urls import path
from . import views
urlpatterns = [
path('/states',views.states,name='states'),
path('',views.home,name='home'),
path('/get_weather',views.get_weather,name='get_weather'),
path('/cityList',views.get_city_list,name='cityList')
]