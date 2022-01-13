from django import forms

from web_app.models.model import City

class CityForm(forms.ModelForm):
    class Meta:
        model = City
        fields = [
            'City'
        ]