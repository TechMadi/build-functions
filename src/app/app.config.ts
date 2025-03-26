import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"fir-kenya","appId":"1:928926879574:web:2e27cef8120c5350edd0f7","storageBucket":"fir-kenya.firebasestorage.app","apiKey":"AIzaSyCFLxZ-J2fFMtIJQfCkh9Uy4mFpScu7L7c","authDomain":"fir-kenya.firebaseapp.com","messagingSenderId":"928926879574","measurementId":"G-E43VKTY11Z"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideFunctions(() => getFunctions())]
};
