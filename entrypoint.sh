#! /bin/bash

cd composeexample

gunicorn --bind 0.0.0.0:8000 composeexample.wsgi