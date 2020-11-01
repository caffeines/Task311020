#!/bin/bash
echo "Starting setup server..."
echo ""

docker-compose up -d

echo "Health check"
sleep 3
echo ""
curl -s localhost:4782 | json_pp
echo ""
echo ""

echo "Creating guest user"

curl -s -d '{ "name": "guest", "email": "guest@gmail.com", "password": "guest" }'\
 -H "Content-Type: application/json" -X POST http://localhost:4782/api/auth/register | json_pp

echo ""
echo ""

echo "Server: http://localhost:4782"
echo "Client: http://localhost:3000"

echo ""
echo ""