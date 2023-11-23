import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useCollection } from "./firebase/firestore";
import { updateUser, deleteUser } from "./firebase/firestoreOperation";

export const Crud = () => {
  const [user, setUser] = useState({ name: "" });
  const { add, getAll, isPending, results } = useCollection("users");

  const getAllDocs = async () => {
    await getAll([]);
  };

  const save = async () => {
    await add(user);
    await getAllDocs();
  };

  const handleSetUser = (event) => {
    setUser({ name: event.target.value });
  };

  const handleUpdate = async (id, user) => {
    await updateUser(id, user);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
  };

  useEffect(() => {
    getAllDocs();
  }, []);

  return (
    <>
      <input type="text" onChange={handleSetUser} value={user.name} />
      <button type="button" onClick={save}>
        Guardar
      </button>
      {isPending ? <span> Saving... </span> : ""}
      <ul>
        {results.map((item) => {
          return (
            <li key={item.id}>
              {JSON.stringify(item)}
              <button onClick={() => handleUpdate(item.id, user)}>
                Update
              </button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
