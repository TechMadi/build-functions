![bg right](https://images.unsplash.com/photo-1730524204887-6ef76cc83b5f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NTU5NjN8MHwxfHNlYXJjaHwxN3x8RmlyYmFzZSUyMEZ1bmN0aW9ucyUyMGluQW5ndWxhcnxlbnwwfDF8fHwxNzQzMDAzMTA2fDA&ixlib=rb-4.0.3&q=85)

# Serveless Api with Firebase Functions

Mandela Winnie

---

# Bio About Firebase

- Began as a chat solution , 'Evolve'
- Accquired later by  Google
- Other features such as Auth, Firestore,Analytics,Helpers and Utilities


---

# Introduction to Firebase Functions

- Run on the server side of code  (Serverless)
- Triggered mainly by  firebase features or http requests
- Function  as a service 
- Supports multiple programming languages(Typescript)

---

# Versions of Firebase Functions

- Two versions of   firebase functions
  - V1
  - V2 

---

# V1

- Container Registry  or Artifact Registry 
- Request time out to up  to 9 minutes 
- Up to 8GB  ram  with 2 vcPU
- 1 concurrent request per function instance


---

# V2
- Artifact Registry  only

- Up to 60 minutes  for HTTP triggered functions
-  Request time out to up  to 9 minutes for  event-triggered functions 
- Up to 16GB  ram  with 4 vcPU

- Upto  1000 concurrent requests per function instance



---

# Setting Up Firebase Functions

```bash
# set up an angular project 
ng new projectName

# install angular Fire 
ng add @angular/fire

```
---

# Setting Up Firebase Functions

```bash

# Install Firebase CLI
npm install -g firebase-tools

# Initialize Firebase project
firebase init functions
```
---

# Writing Firebase Functions

Demo

---

# Deploying Firebase Functions

- Use Firebase CLI for deployment
- Deploy individual functions
- Deploy all functions at once
- Monitor deployment status
- Rollback to previous versions
- View deployment logs

```bash
# Deploy all functions
firebase deploy --only functions
```

---

# Integrating with Angular

```typescript
// Import Firebase module
import { AngularFireFunctions } from '@angular/fire/functions';

// Call a Firebase Function
this.functions.httpsCallable('helloWorld')().subscribe(result => {
  console.log(result.data);
});
```

<!-- Integrating Firebase Functions with Angular involves importing the Firebase module and initializing it in your Angular application. The AngularFire library simplifies calling Firebase Functions and handling responses. You can update the UI based on the responses received from the functions. -->


---

# Q&A


