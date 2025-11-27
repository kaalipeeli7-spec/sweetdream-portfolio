# Command System (Remote Control)

## Overview
Flow:
Desktop ? Backend ? Android ? ACK

## Command Flow
1. Desktop issues POST /commands
2. Android polls GET /commands/pending
3. Executes via CommandHandler
4. Replies via POST /commands/:id/ack

## Supported Commands
- camera:front
- camera:back
- audio:start
- audio:stop
- storage:scan
- calls:sync
- sms:sync
- apps:report
