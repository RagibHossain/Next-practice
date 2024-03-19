import Link from "next/link";
import React from "react";
import styles from "./user.module.css";

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await response.json();

  const userSection = (user: User) => {
    return (
      <div className='p-'>
        <div>{new Date().toLocaleTimeString()}</div>
        <div>Name: {user.name}</div>
        <div>Email: {user.email}</div>
      </div>
    );
  };
  return (
    <div>
      <h1 className='text-center font-bold text-3xl bg-red-100 hover:bg-blue-700'>Users Page</h1>
      <Link href="users/new">Go to subpage</Link> <br />
      <Link href="/">Back</Link>
      <br /> <br />
      <ol>
        {users.map((user) => (
          <li key={user.id}> {userSection(user)} </li>
        ))}
      </ol>
    </div>
  );
};

export default UsersPage;
