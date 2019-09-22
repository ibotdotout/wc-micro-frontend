#!/bin/bash

docker-compose build $1
docker-compose up -d --force-recreate $1
