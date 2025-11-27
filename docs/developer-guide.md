# Developer Guide

## Requirements
- Android Studio Ladybug+
- Node.js 18+
- Firebase account
- GitHub repositories

## Folder Structure
backend/
desktop/
android/
docs/

## Android Folder Layout
/java/com/example/sweetdream/
    services/
    EventQueue.kt
    ApiConfig.kt
    CommandHandler.kt
    CommandPollingService.kt

## Tips
- Always log via EventQueue
- Never hardcode URLs
- Keep backend publicly reachable
