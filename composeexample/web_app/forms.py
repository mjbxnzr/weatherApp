from django import forms

from web_app.models.models import City

class CityForm(forms.Form):
    Name = forms.CharField(max_length=100,
                                widget=forms.TextInput
                                (attrs={'placeholder': 'City Name'}))
    AuthorEmail = forms.CharField(max_length=100,
                            widget=forms.EmailInput
                            (attrs={'placeholder': 'Enter your email'}))