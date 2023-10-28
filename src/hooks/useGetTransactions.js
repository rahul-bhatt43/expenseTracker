import {
  query,
  collection,
  where,
  orderBy,
  onSnapshot
} from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useEffect, useState } from "react";

import { usegetuserInfo } from "./usegetuserInfo";

export const useGetTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  const transactionCollectionRef = collection(db, "transactions");

  const { userId } = usegetuserInfo();

  const [balance, setBalance] = useState(0);
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [income, setIncome] = useState(0);

  const getTransactions = async () => {
    let unsubscribe;
    try {
      const querryTransactions = query(
        transactionCollectionRef,
        where("userId", "==", userId),
        orderBy("createdAt")
      );

      unsubscribe = onSnapshot(querryTransactions, (snapshot) => {
        let docs = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;

          docs.push({ ...data, id });
        });
        setTransactions(docs);
        // console.log(docs);

        // cck

        const totalIncomeAmount = docs.reduce((total, item) => {
          if (item.transactionType === "income") {
            return total + parseFloat(item.transactionAmount);
          } else {
            return total;
          }
        }, 0);
        const totalExpenseAmount = docs.reduce((total, item) => {
          if (item.transactionType === "expense") {
            return total + parseFloat(item.transactionAmount);
          } else {
            return total;
          }
        }, 0);
        setExpenseAmount(totalExpenseAmount);
        setIncome(totalIncomeAmount);
        setBalance(totalIncomeAmount - totalExpenseAmount);
      });
    } catch (error) {
      console.error(error);
    }

    return () => unsubscribe();
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return { transactions, income, expenseAmount, balance };
};
