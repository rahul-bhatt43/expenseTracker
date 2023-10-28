import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { usegetuserInfo } from "./usegetuserInfo";

export const useAddTransaction = () => {
  const transactionCollectionRef = collection(db, "transactions");
  const { userId } = usegetuserInfo();

  const addTransaction = async ({
    description,
    transactionAmount,
    transactionType
  }) => {
    await addDoc(transactionCollectionRef, {
      userId,
      description,
      transactionAmount,
      transactionType,
      createdAt: serverTimestamp()
    });
  };

  return { addTransaction };
};
