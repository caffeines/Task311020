# Application

## Installation

### Prerequisites:

+ NodeJS
+ NPM
+ MongoDB

### Installation steps:

#### Option 01: docker-compose
> If you have installed docker and docker-compose

+ cp .env.example .env
+ fill the .env file in with proper credentials for docker environment
+ chmod +x setup.sh
+ ./setup.sh

#### Option 02: Regular installation
+ npm install
+ cp .env.example .env
+ fill the .env file in with proper credentials
+ npm run dev