#! /bin/bash

cd composeexample

# gunicorn --bind 0.0.0.0:8080 composeexample.wsgi

python manage.py runserver --insecure 0.0.0.0:8080