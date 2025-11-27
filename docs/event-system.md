# Event Upload System

All Android events go to:
POST /events

Format:
{
  "type": "camera:start",
  "data": {...},
  "timestamp": 123456789
}

Handled by:
EventQueue.kt
