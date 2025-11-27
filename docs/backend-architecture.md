# Backend Architecture

## Stack
- Node.js
- Express.js
- SQLite3 DB
- Render.com hosting

## Responsibilities
- Command Queue System
- Event Logging
- File Upload
- Device Registration
- Health Status

## Commands API
POST /commands
GET /commands/pending
POST /commands/:id/ack

## Events API
POST /events

## Upload API
POST /upload
