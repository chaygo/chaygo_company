import React from "react";
import { useAPI } from "./apiContext";

export default function Users() {
  const { users } = useAPI();
  console.log(users);
  return (
    <ul>
      {users.map(u => (
        <li key={u.id}>{u.username}</li>
      ))}
    </ul>
  );
}
