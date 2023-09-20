import { db } from "./firebase.js";
import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";

export const acciones = [];

export const addProduct = async (product) => {
  await addDoc(collection(db, "products"), product);
};

export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  return querySnapshot;
};

export const getProduct = async (docID) => {
  const docRef = doc(db, "products", docID);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};
