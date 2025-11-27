# SweetDream Portfolio (2025)
A complete remote-monitoring ecosystem built across **Android**, **Desktop (Electron + Node.js)**, and a **Node.js backend** — designed to securely capture device events, execute remote commands, and synchronize data in real-time.

This repository **does not contain source code** for production services.  
Instead, it showcases the **architecture**, **technical design**, **engineering approach**, and **system documentation** of the SweetDream ecosystem (2025).

---

## 🚀 Project Overview
SweetDream is a tri-platform system:

### 📱 Android Application  
Designed to run as a foreground service and respond to remote commands:  
- Camera control (front / back)  
- Audio monitoring  
- Storage scanning  
- Call & SMS sync  
- Notification listening  
- Background event uploading  
- Command polling every 10 seconds  
- Firebase Cloud Messaging (FCM)

### 💻 Desktop Application (Electron + Node.js)  
Acts as a **control center** for monitoring and issuing commands to remote devices:  
- Device listing  
- Remote commands (camera, audio, storage, calls, SMS, notifications)  
- Real-time logs  
- UI built on Electron + Node.js  
- Communication with backend via REST + WebSockets

### 🌐 Backend Server (Node.js + SQLite + Express)  
Handles:  
- Command queue  
- Event ingestion  
- Device registration  
- File uploads  
- Command delivery + ACK  
- Dashboard API  
- Hosted previously on **Render.com**

---

## 🏗 Tech Stack Summary

### **Android**
- Kotlin (Jetpack + Services)
- Foreground services  
- Notification listener  
- Accessibility service  
- OkHttp client  
- FCM (Firebase Cloud Messaging)  
- Min SDK: **24**

### **Backend**
- Node.js  
- Express.js  
- SQLite database  
- Upload endpoints  
- Hosted on Render

### **Desktop**
- Electron.js  
- Node.js  
- HTML/JS dashboard  

---

## 🔥 Major Features


### ✔ Unified Architecture  
All three platforms stay connected via standardized endpoints.

### ✔ Production Safety Features  
- StartForegroundService support for Android 12+  
- Background task recovery  
- Robust JSON parsing  
- Error-tolerant command handler  
- Retry-safe networking

---

## 📂 Documentation Index  
All detailed technical documentation is located in `/docs`.

| File | Description |
|------|-------------|
| `docs/architecture.md` | High-level diagrams & system flow |
| `docs/backend.md` | Backend endpoints, database schema |
| `docs/android.md` | Android services, EventQueue, FCM pipeline |
| `docs/desktop.md` | Desktop app architecture |
| `docs/command-system.md` | Command queue lifecycle |
| `docs/event-system.md` | Event uploading pipeline |
| `docs/security.md` | Security guidelines |

---

## 📸 Architecture Diagram (Compact)



### ✔ Real-time Remote Control  
The backend queues commands → Android polls every 10s → executes → sends ACK.

### ✔ Asynchronous Event Upload System  
Android sends all events via:

     ┌───────────────────────────┐
     │         Desktop App       │
     │     (Electron + Node)     │
     └──────────────┬────────────┘
                    REST
                     │
            ┌────────▼─────────┐
            │     Backend      │
            │ Node.js + SQLite │
            └──────┬───────────┘
 /events  /commands│
                   │
 ┌─────────────────▼──────────────────┐
 │            Android App             │
 │  Foreground Services + FCM + I/O   │
 │  Camera • Audio • Storage • Calls  │
 └────────────────────────────────────┘

---

## 📄 License  
Private project — all rights reserved.  

---

## 👤 Author  
**Rupesh (2025)**  

