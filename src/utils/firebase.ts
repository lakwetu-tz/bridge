// src/firebase.ts

import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "bsm-dashboard",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "389006533037",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
