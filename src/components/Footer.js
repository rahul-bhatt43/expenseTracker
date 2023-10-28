import { useContext } from "react";
import { themecontext } from "../context/ThemeContext";
export default function Footer() {
  const { toggle } = useContext(themecontext);
  return (
    <div
      className="footer"
      style={{
        padding: "8px 12px",
        backgroundColor: toggle ? "black" : "",
        color: toggle ? "white" : ""
      }}
    >
      <p>
        &copy; All rights reserved toTrackURDollars | Created by Rahul~Bhatt
      </p>
    </div>
  );
}
