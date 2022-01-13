from django import forms

from web_app.models.models import City

class CityForm(forms.ModelForm):
    class Meta:
        model = City
        fields = [
            'Name'
        ]