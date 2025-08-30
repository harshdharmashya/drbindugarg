#!/bin/bash

source ~/htdocs/www.drbindugarg.com/.env.local

LOG_FILE="$HOME/htdocs/cron.log"
API_ENDPOINT="/api/v1/schedule-blog"
API_URL="${DOMAIN_URL}${API_ENDPOINT}"

export TZ="Asia/Kolkata"

RESPONSE=$(curl -s -X POST \
     -H "Content-Type: application/json" \
     -H "x-api-key: $CRON_API_KEY" \
     "$API_URL")

TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

{
    echo "----------------------------------------"
    echo "Cron job executed at $TIMESTAMP (IST)"
    echo "Domain URL: $DOMAIN_URL"
    echo "API URL: $API_URL"
    echo "Response: $RESPONSE"
    echo "----------------------------------------"
} >> "$LOG_FILE"

if echo "$RESPONSE" | grep -q '"success":true'; then
    echo "Blog scheduling update successful"
else
    echo "Error: Blog scheduling update failed"
    echo "Response: $RESPONSE"
fi
