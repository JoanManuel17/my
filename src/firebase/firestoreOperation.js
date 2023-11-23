import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./config";

export const updateUser = async (id, updatedUser) => {
  const userRef = doc(db, "users", id);
  await updateDoc(userRef, updatedUser);
};

export const deleteUser = async (id) => {
  const userRef = doc(db, "users", id);
  await deleteDoc(userRef);
};
