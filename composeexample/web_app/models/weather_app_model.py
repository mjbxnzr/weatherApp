class WeatherAppModel:
    def __init__(self,
                 location : str,
                 temp_cel : str,
                 icon :str,
                 weather_type : str,
                 country : str):
        self.location = location
        self.temp = temp_cel
        self.icon = icon
        self.weather_type = weather_type
        self.country = country

    def toJson(self):
        return {
            "temp": self.temp,
            "location": self.location,
            "icon": self.icon,
            "weather_type": self.weather_type,
            "country" : self.country
        }
