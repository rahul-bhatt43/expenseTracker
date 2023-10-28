import { useState, useContext } from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import { useGetTransactions } from "../../hooks/useGetTransactions";
// import { usegetuserInfo } from "../../hooks/usegetuserInfo";

import "./expense.css";

import { themecontext } from "../../context/ThemeContext";

export const ExpenseTracker = () => {
  const { addTransaction } = useAddTransaction();

  const [description, setdescription] = useState("");

  const [transactionAmount, settransactionAmount] = useState(0);

  const [transactionType, settransactionType] = useState("expense");

  const { transactions, expenseAmount, income, balance } = useGetTransactions();

  const { toggle } = useContext(themecontext);

  const submitHandler = async (e) => {
    e.preventDefault();
    addTransaction({
      description,
      transactionAmount,
      transactionType
    });
  };

  return localStorage.getItem("auth") ? (
    <div
      className="content"
      style={
        toggle
          ? {
              backgroundImage:
                "radial-gradient(circle, #313131, #262626, #1c1c1c, #111111, #000000)",
              color: "white"
            }
          : {
              backgroundImage:
                "radial-gradient(circle, #dba2b5, #e194ad, #e784a5, #ec749c, #f06292)",
              color: "black"
            }
      }
    >
      <div className="expense-tracker">
        <div className="containerl">
          <h1>Your Track Record:</h1>
          <div className="balance">
            <h3>Available Balance</h3>
            <h2
              style={{
                backgroundColor: "red",
                borderRadius: "30px",
                paddingLeft: "12px",
                minWidth: "50%",
                textAlign: "left"
              }}
            >
              $ {balance}
            </h2>
          </div>
          <div className="summary" style={{ textAlign: "left" }}>
            <div className="income">
              <h4>Income</h4>
              <p
                style={{
                  fontWeight: "700",
                  color: "green",
                  borderBottomRightRadius: "30px",
                  borderTopRightRadius: "30px",
                  backgroundColor: "white",
                  paddingLeft: "10px",
                  minWidth: "50%",
                  paddingRight: "10px"
                }}
              >
                $ {income}
              </p>
            </div>
            <div className="expenses">
              <h4>Expenses</h4>
              <p
                style={{
                  fontWeight: "700",
                  color: "red",
                  borderBottomRightRadius: "30px",
                  borderTopRightRadius: "30px",
                  backgroundColor: "white",
                  paddingLeft: "10px",
                  minWidth: "50%",
                  paddingRight: "10px"
                }}
              >
                $ {expenseAmount}
              </p>
            </div>
          </div>
        </div>
        <div className="containerr">
          <h1>Want to Add?</h1>
          <h3 style={{ marginBottom: "20px" }}>
            Fill the details below and add it!
          </h3>
          <form onSubmit={submitHandler} className="add-transaction">
            <div className="inputset">
              <label>Description about the Job?</label>
              <input
                type="text"
                placeholder="Description"
                required
                value={description}
                onChange={(e) => setdescription(e.target.value)}
              />
            </div>
            <div className="inputset">
              <label>Amount Earned/Spent?</label>
              <input
                type="number"
                placeholder="Amount"
                required
                value={transactionAmount}
                onChange={(e) => settransactionAmount(e.target.value)}
              />
            </div>
            <div className="inputset">
              <label>Transaction Type?</label>
              <div className="transactiontype">
                <div className="radio">
                  <input
                    type="radio"
                    id="expense"
                    value="expense"
                    checked={transactionType === "expense"}
                    onChange={(e) => settransactionType(e.target.value)}
                  />
                  <label htmlFor="expense">Expense</label>
                </div>
                <div className="radio">
                  <input
                    type="radio"
                    id="income"
                    value="income"
                    checked={transactionType === "income"}
                    onChange={(e) => settransactionType(e.target.value)}
                  />
                  <label htmlFor="income">Income</label>
                </div>
              </div>
            </div>

            <button type="submit">Add</button>
          </form>
        </div>
      </div>
      <div
        className="transactions"
        style={
          toggle
            ? {
                backgroundImage:
                  "radial-gradient(circle, #313131, #262626, #1c1c1c, #111111, #000000)",
                color: "white",
                minHeight: "50vh"
              }
            : {
                backgroundImage:
                  "radial-gradient(circle, #dba2b5, #e194ad, #e784a5, #ec749c, #f06292)",
                color: "black",
                minHeight: "50vh"
              }
        }
      >
        <h2>Transactions</h2>

        <table>
          <thead>
            <tr
              className="headtabl"
              style={{ backgroundColor: toggle ? "#313131" : "#7fffd4" }}
            >
              <th>Description</th>
              <th>Amount</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, i) => {
              const {
                description,
                transactionAmount,
                transactionType
              } = transaction;

              return (
                <tr key={i}>
                  <td>{description}</td>
                  <td>${transactionAmount}</td>
                  <td
                    style={
                      transactionType === "expense"
                        ? {
                            color: "red",
                            textTransform: "uppercase",
                            fontWeight: "700"
                          }
                        : {
                            color: "green",
                            textTransform: "uppercase",
                            fontWeight: "500"
                          }
                    }
                  >
                    {transactionType}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    navigate("/")
  );
};
