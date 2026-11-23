import { addDoc, collection, deleteDoc, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const productsRef = collection(db, "products");


export const getProducts = async () => {
  try {
    const snapshot = await getDocs(productsRef);

    const productsFormat = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    return productsFormat;
  } catch (error) {
    console.log("Error al traer productos", error);
    throw error;
  }
};


export const getProductsById = async (id) => {
  try {
    const productRef = doc(productsRef, id);

    const snapshot = await getDoc(productRef);
    
    if (snapshot.exists()) {
      const product = { id: snapshot.id, ...snapshot.data() };
      console.log("Doc:", product);
      return product;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error al traer producto por ID:", error);
    throw error;
  }
};


export const createProduct = async (productData) => {
  try {
    
    const docRef = await addDoc(productsRef, productData);

    return docRef.id; 
  } catch (error) {
    console.error("Error al crear producto:", error);
    throw error;
  }
};


export const deleteProduct = async (id) => {
  try {

    const productRef = doc(productsRef, id);

    await deleteDoc(productRef);
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    throw error;
  }
};