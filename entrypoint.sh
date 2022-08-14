#! /bin/bash

cd composeexample

gunicorn --bind 0.0.0.0:8080 composeexample.wsgi