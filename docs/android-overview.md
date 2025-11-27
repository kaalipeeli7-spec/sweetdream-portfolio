# Android Application Overview

## Architecture
The SweetDream Android application is built using:
- Kotlin
- Foreground Services
- NotificationListenerService
- AccessibilityService
- Jetpack Compose
- WorkManager (optional)

## Core Features
### ? Camera Monitoring
- Start/stop camera remotely
- Front/back camera
- Event logs

### ? Microphone Monitoring
- Audio amplitude tracking
- Alerts on spikes

### ? Storage Monitoring
- Scan internal/external storage
- Detect new/modified files

### ? Call & SMS Monitoring
- Call start/end logging
- SMS read & sync

### ? Accessibility Monitoring
- Detect UI changes voluntarily

### ? Notification Listener
- Captures posted & removed notifications

### ? CommandPollingService
Polls backend every 10s:
GET /commands/pending

Executes command ? ACK back to server.

## Event System
All services log through:
EventQueue.enqueueEvent(context, "event:type", JSONObject)
