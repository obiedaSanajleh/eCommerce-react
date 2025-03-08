import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, updateDoc, arrayUnion, arrayRemove, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYBvR4ocL9ACwl9VrGgoTkhlpPYrss1Wc",
  authDomain: "login-and-signup-98a9c.firebaseapp.com",
  projectId: "login-and-signup-98a9c",
  storageBucket: "login-and-signup-98a9c.firebasestorage.app",
  messagingSenderId: "879299242248",
  appId: "1:879299242248:web:7328eb76d5b5924c6464bd",
  measurementId: "G-TEB7DZBXP5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User created:", userCredential.user);
  } catch (error) {
    console.error("Sign-up error:", error);
  }
};

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in:", userCredential.user);
  } catch (error) {
    console.error("Sign-in error:", error);
  }
};

export const addToCart = async (userId, productId, quantity = 1) => {
  const cartRef = doc(db, "carts", userId);

  try {
    await setDoc(cartRef, {
      items: arrayUnion({ product_id: productId, quantity })
    }, { merge: true });
    console.log("Product added to cart");
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};

export const updateCartItem = async (userId, productId, newQuantity) => {
  const cartRef = doc(db, "carts", userId);

  try {
    await updateDoc(cartRef, {
      items: arrayUnion({ product_id: productId, quantity: newQuantity })
    });
    console.log("Cart item updated");
  } catch (error) {
    console.error("Error updating cart item:", error);
  }
};

export const removeCartItem = async (userId, productId) => {
  const cartRef = doc(db, "carts", userId);

  try {
    await updateDoc(cartRef, {
      items: arrayRemove({ product_id: productId })
    });
    console.log("Product removed from cart");
  } catch (error) {
    console.error("Error removing from cart:", error);
  }
};

export const getCartItems = async (userId) => {
  const cartRef = doc(db, "carts", userId);
  const cartDoc = await getDoc(cartRef);

  if (cartDoc.exists()) {
    return cartDoc.data().items;
  } else {
    return [];
  }
};

export { auth, db };