import { useContext, useState } from "react";
import { context } from "../../context/data/Context";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {auth, fireDB} from "../../firebase/FirebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import {Loader} from "../../components/index"
const Signup = () => {
  const { theme, loading, setLoading } = useContext(context);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async() => {
    if(email === "" || password === "" || name === ""){
      return toast.error("All fields are mandatory")
    }
    setLoading(true);
    try {
      
      const users = await createUserWithEmailAndPassword(auth, email, password);

      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now()
      }

      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);

      toast.success("User created Successfully");
      setName("");
      setEmail("");
      setPassword("");
      setLoading(false);

    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  }

  return (
    <div data-theme={theme} className=" border w-full h-[100vh]">
      <div className="border border-[#e5e5e5] shadow-lg text-sm md:text-md w-[50%] lg:w-[35%] xl:w-[25%] m-auto mt-50 px-5 py-8 rounded-xl">
        <h1 className="font-bold text-center text-2xl"> Signup </h1>
        <div className=" w-[90%] m-auto flex flex-col items-center align-middle my-8 gap-5">
          <label className="input validator w-full border-[#e5e5e5]">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </g>
            </svg>
            <input
              type="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Name"
              pattern="[A-Za-z][A-Za-z0-9\-]*"
              minLength="3"
              maxLength="30"
              title="Only letters, numbers or dash"
            />
          </label>
          <label className="input validator w-full border-[#e5e5e5]">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
            />
          </label>
          <label className="input validator w-full border-[#e5e5e5]">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
          </label>
          <button onClick={handleSignup} className="btn w-full text-xs lg:text-md bg-white  text-black border-[#e5e5e5]">
            <svg
              aria-label="Email icon"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="black"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            Signup with Email
          </button>
        </div>
        {loading && (
          <div className="w-full flex justify-center align-middle mb-4">
            <Loader />
          </div>
        )}
        <p className="w-[90%] m-auto ">
          Already have an account?{" "}
          <Link className="text-pink-500" to="/login">
            {" "}
            Login{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
