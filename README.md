@"
# 📱 SweetDream Remote Monitoring Suite
*A complete multi-platform monitoring & command system — Android + Desktop + Cloud Backend.*

## 🌐 Overview
SweetDream is a fully integrated system that connects:

### **1️⃣ Android Monitoring App**
Captures and reports:
- Camera events  
- Microphone levels  
- Notifications  
- Calls & SMS  
- Storage changes  
- Accessibility events  
- Remote commands  
- Background services  

### **2️⃣ Cloud Backend (Node.js + Express + SQLite)**
Handles:
- Commands Queue  
- Events ingestion  
- File uploads  
- Device registration  
- Desktop ↔ Android coordination  

Hosted on **Render.com**

### **3️⃣ Desktop Controller App (Electron.js)**
Used to:
- Send remote commands  
- View device logs  
- Fetch media uploads  
- Monitor device status  

## 🧩 Architecture Diagram
Desktop App  →  Backend Server  →  Android App  
      ↑                ↓                ↑  
      └── Event Logs ← API → Commands ──┘  

## 🛠 Tech Stack

### **Android**
- Kotlin  
- Jetpack Compose  
- Foreground Services  
- Notification Listener  
- Accessibility  
- OkHttp  
- Firebase FCM  
- Min SDK: **24**

### **Backend**
- Node.js  
- Express  
- SQLite  
- Multer  
- Render hosting  

### **Desktop**
- Electron  
- HTML/CSS/JS  

## 📂 Repository Structure
/docs  
├── android-overview.md  
├── backend-architecture.md  
├── firebase-config.md  
├── command-system.md  
├── event-system.md  
├── api-endpoints.md  
├── deployment-guide.md  
└── developer-guide.md  

## 🔗 Related Private Repositories
| Component | Repo Name |
|----------|-----------|
| Android App | sweetdream-android |
| Backend Server | sweetdream-backend |

## 👤 Developer — Rupesh (2025)
Passionate Android + Backend developer working on:
- Remote monitoring frameworks  
- Multi-platform control systems  
- Firebase + Cloud integrations  
- Cloud API development  

## 📨 Contact
Access to private repos available on request.
"@ | Set-Content -Path "README.md"; git add README.md; git commit -m "Updated README.md portfolio overview"; git push origin main
