import json


class Helper:
    __instance = None

    @staticmethod
    def getInstance():
        if Helper.__instance == None:
            Helper.__instance = Helper()
        return Helper.__instance


    @staticmethod
    def get_pretty_json(json_data: str):
        json_object = json.loads(json_data)
        return json.dumps(json_object, indent=2)

    def jsonStringtoPythonObj(self, jsonValue):
        return json.loads(jsonValue)

