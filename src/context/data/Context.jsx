import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { fireDB } from "../../firebase/FirebaseConfig";
import {
  collection,
  Timestamp,
  addDoc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  doc,
  deleteDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";

export const context = createContext();

export const ContextProvider = ({ children }) => {

  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState([]);
  const [user, setUser] = useState([]);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    title: "",
    price: "",
    imageUrl: "",
    category: "",
    description: "",
    time: Timestamp.now().toDate().toISOString(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const getUserData = async() => {
    setLoading(true);
    try {
      const result = await getDocs(collection(fireDB, "users"));
      const userArray = []
      result.forEach((doc) => {
        userArray.push(doc.data());
      })
      setUser(userArray);
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false);
      toast.error("Error getting user data");
    }
  }

  const getOrderData = async() => {
    setLoading(true);
    try {
      const result = await getDocs(collection(fireDB, "orders"));
      const ordersArray = [];

      result.forEach((doc)=>{
        ordersArray.push(doc.data());
      })
      setOrder(ordersArray);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Error getting Order")
    }
  }

  const addProduct = async () => {
    const { title, price, imageUrl, category, description } = product;
    const isEmpty =
      title === "" ||
      price === "" ||
      imageUrl === "" ||
      category === "" ||
      description === "";

    if (isEmpty) {
      return toast.error("All fields are mandatory");
    }
    setLoading(true);
    try {
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, product);
      toast.success("Product added successfully");
      setLoading(false);
      setProduct({
        ...product,
        title: "",
        price: "",
        imageUrl: "",
        category: "",
        description: "",
      });
      setTimeout(()=>{
        navigate("/dashboard")
      },800)
    } catch (error) {
      toast.error("Error Adding Product");
      console.log(error.message);
      setLoading(false);
    }
  };
  
  const getProductData = () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));

      const data = onSnapshot(q, (querySnapshot) => {
        let productArray = [];
        querySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setProducts(productArray);
        setLoading(false);
      });

      return () => data;
    } catch (error) {
      toast.error("Error getting product");
      setLoading(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    const unsub = getProductData();
    getOrderData();
    getUserData();
    return () => unsub();
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "abyss" : "light"));
  };

  const handleEdit = (item) => {
    setProduct(item);
  }

  const updateProduct = async() => {
    setLoading(true);
    try {
      await setDoc(doc(fireDB, "products", product.id), product);
      toast.success("Product Updated Successfully");
      setLoading(false);
      setTimeout(()=>{
        navigate("/dashboard");
      }, 800)
    } catch (error) {
      toast.error("Error Updating Product")
      console.log(error)
      setLoading(false);
    }
  }

  const deleteProduct = async(item) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success("Product Deleted Successfully");
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Error Deleting Data");
      setLoading(false);
    }
  }

  return (
    <context.Provider
      value={{
        theme,
        toggleTheme,
        loading,
        setLoading,
        product,
        setProduct,
        products,
        addProduct,
        handleEdit,
        updateProduct,
        deleteProduct,
        order,
        user
      }}
    >
      {children}
    </context.Provider>
  );
};
