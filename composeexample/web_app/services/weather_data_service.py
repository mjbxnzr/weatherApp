from web_app.models.weather_app_model import WeatherAppModel
from web_app.provider.openweathermap_provider import OpenWeatherMap


class WeatherDataResultService:
    def __init__(self, location_info : dict):
        self.location_info = location_info
        self.request_info = {}
        pass

    def _request_weather_data(self):

        weather_ondemand_data = OpenWeatherMap().get_ondemand_data(self.request_info)
        return self._process_weather_data(weather_ondemand_data)

    def _process_weather_data(self, weather_ondemand_data : dict):
        try:

            location = weather_ondemand_data.get("name")
            temp_kelv = weather_ondemand_data.get("main")["temp"]
            icon = weather_ondemand_data.get("weather")[0]["icon"]
            weather_type = weather_ondemand_data.get("weather")[0]["main"]
            country = weather_ondemand_data.get("sys")["country"]
            temp_cel = f"{round((float(temp_kelv)-273.15))}"
            weather_result = WeatherAppModel(location,
                                             temp_cel,
                                             icon,
                                             weather_type,
                                             country).toJson()


        except Exception as e:
            print(e)
            weather_result = None
            pass

        return weather_result

    def process_location_info(self):
        if self.location_info.get("city") is None:
            self.request_info['lat'] = self.location_info.get('latitude')
            self.request_info['lon'] = self.location_info.get('longitude')
        else:
            self.request_info['city'] = self.location_info.get("city")

        return self._request_weather_data()


