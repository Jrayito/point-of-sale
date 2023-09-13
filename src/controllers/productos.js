import { db } from "./firebase.js";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const addProduct = async (product) => {
  await addDoc(collection(db, "products"), product);
};

export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  return querySnapshot;
};
