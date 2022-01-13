import json

from django.conf import settings
import urllib3
import certifi
import ssl

from web_app.helper.helper import Helper


class OpenWeatherMap:
    def __init__(self):

        # TODO: Initialize credentials for camelia api
        # Once ready
        self.OpenWeather_URL = 'api.openweathermap.org/data/2.5/weather?'
        self.appKey = '7b7c358d7992a34626ab280129a3927f'


        # TODO: Configure it inside environment variable
        self.http = urllib3.PoolManager(ca_certs=certifi.where(), retries=10, cert_reqs=ssl.CERT_NONE)
        urllib3.disable_warnings()

    def get_ondemand_data(self,request_info : dict):
        url = self.OpenWeather_URL +"lat=" + str(request_info.get("lat"))+"&"\
              +"lon=" + str(request_info.get("lon")) +"&"\
              +"appid=" + self.appKey
        print('######################## calling Open Weather API ######################')

        data_response = self.http.request(method='POST',
                                        url=url,
                                        headers={
                                            "Content-Type": "application/json"
                                                   })

        return Helper.getInstance().jsonStringtoPythonObj(data_response.data)