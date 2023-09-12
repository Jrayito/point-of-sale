import { db } from "./firebase.js";
import { collection, addDoc } from "firebase/firestore";

export const addProduct = async (product) => {
  await addDoc(collection(db, "product"), product);
};
