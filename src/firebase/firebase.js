import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAlO3w4L_09uqmZ_FvC7umr8hSMt7Qp-zs",
  authDomain: "victory-ag-church.firebaseapp.com",
  databaseURL: "https://victory-ag-church-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "victory-ag-church",
  storageBucket: "victory-ag-church.firebasestorage.app",
  messagingSenderId: "1046396435878",
  appId: "1:1046396435878:web:8329dc02865b20bfa1e367",
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);