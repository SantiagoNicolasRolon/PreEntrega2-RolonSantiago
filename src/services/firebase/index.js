import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRfxKB23ddfNfrXJ1tkH2ovMaEvsB2r2s",
  authDomain: "domanski-e-comerce.firebaseapp.com",
  projectId: "domanski-e-comerce",
  storageBucket: "domanski-e-comerce.firebasestorage.app",
  messagingSenderId: "160950957509",
  appId: "1:160950957509:web:afb5968a9ccf10ad7a07ac"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)