import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyBCcTW94idb3D5an-RXpq7WXcrdrddnY78",
   authDomain: "point-of-sale-a0eed.firebaseapp.com",
   projectId: "point-of-sale-a0eed",
   storageBucket: "point-of-sale-a0eed.appspot.com",
   messagingSenderId: "105531714527",
   appId: "1:105531714527:web:66f6cfe101f3ef1244726a",
   measurementId: "G-QDVRY2S5P4"
 };
 
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 const auth = getAuth(app);
 export {db, auth};
 