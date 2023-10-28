import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "../../config/firebase-config";
import { useNavigate } from "react-router-dom";

import { signInWithPopup } from "firebase/auth";

import "./authindex.css";

export const Auth = () => {
  const navigate = useNavigate();

  const signinWithGoogle = async () => {
    const { user } = await signInWithPopup(auth, provider);
    const authInfo = {
      userId: user.uid,
      name: user.displayName,
      photoURL: user.photoURL,
      isAuth: true
    };
    // console.log(authInfo);
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/expense-tracker");
  };
  return (
    <div className="login-page">
      <p>Sign-In with Google to Continue</p>
      <button onClick={signinWithGoogle}>
        <FcGoogle />
        &nbsp; Sign-In with Google
      </button>
    </div>
  );
};
