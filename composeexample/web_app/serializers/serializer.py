from rest_framework import serializers

from web_app.models.models import City

class CitySerializer(serializers.ModelSerializer):
   class Meta:
       model = City
       fields = ('id','Name')
