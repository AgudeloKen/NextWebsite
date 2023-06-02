"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Register = () => {
  const [error, setError] = useState(false);


  const router = useRouter();
	const session = useSession();

	if(session.status === 'loading') {
		return <div>Loading...</div>
	}

	if(session.status === 'authenticated') {
		return router.push('/dashboard')
	}

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      res.status === 201 && router.push("/dashboard/login?success=Account created successfully");

      res.status != 201 && setError(true);
      
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Register</h1>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className={styles.input}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          required
        />
        <button className={styles.button}>Register</button>
      </form>
      {error && (
        <p
          style={{
            color: "red",
            marginTop: "10px",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "15px",
          }}
        >
          Something went wrong!
        </p>
      )}
      <Link href={"/dashboard/login"}>Login with an existing account.</Link>
    </div>
  );
};

export default Register;
