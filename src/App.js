import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { Auth } from "./pages/auth";
import { ExpenseTracker } from "./pages/expence-tracker";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route
            path="/expense-tracker"
            element={
              <>
                <Header />
                <ExpenseTracker />
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}
