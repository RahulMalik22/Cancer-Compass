.PHONY: install build up down

install:
	cd backend && npm install
	cd frontend && npm install
	cd ai && pip install -r requirements.txt

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down
