
## Description

Nest.js app for food ordering
Based on the <a href="https://www.udemy.com/course/microservices-clean-architecture-ddd-saga-outbox-kafka-kubernetes/"> Microservices: Clean Architecture, DDD, SAGA, Outbox & Kafka </a>
course by Ali Gelenler

## Architecture

The project is designed in a microservices architecture 
This architecture reflect the bounded contexts identified through context mapping techniques (Event Storming, Domain Storytelling)
currently, the order-service is the one implemented

## Tech Stack
_Kafka_ as a message broker
_Jest_ for unit testing
_Avro_ specifications

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Stay in touch

- Author - [Elfried da Silva](https://linkedin.com/in/elfried-da-silva)
- Website - (elfried.works)

