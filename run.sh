#!/bin/bash

trap cleanup EXIT

cleanup() {
	docker-compose down
}

docker-compose build
(sleep 5 && open http://localhost:3000) & docker-compose up
