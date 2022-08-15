#! /bin/bash

cd composeexample

gunicorn -w 5 -t 2 --bind 0.0.0.0:8080 composeexample.wsgi
