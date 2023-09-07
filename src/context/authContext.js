import { onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../controllers/firebase.js";

const authContext = createContext();

export const useAuth = () => {
   const context = useContext(authContext);
   if (!context) throw new Error("No hay un Auth provider");
   return context;
}

export const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const login = async (user, password) => {
      return await signInWithEmailAndPassword(auth, user, password);
   }

   const logout = () => signOut(auth);  

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         setUser(user);
         setLoading(false);
      });
      return () => unsubscribe();
   }, []);

   return (
      <authContext.Provider value={{ user, loading, logout, login }}>
         {children}
      </authContext.Provider>
   )
}

