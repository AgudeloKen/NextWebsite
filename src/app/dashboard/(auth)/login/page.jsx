"use client"
import React, { useState } from 'react'
import styles from "./page.module.css"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Login = () => {
  const [error, setError] = useState(false);

	const router = useRouter();
	const session = useSession();

	if(session.status === 'loading') {
		return <div>Loading...</div>
	}

	if(session.status === 'authenticated') {
		return router.push('/dashboard')
	}

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {email, password})
  }
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Login</h1>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
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
        <button className={styles.button}>Login</button>
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
      <button onClick={() => signIn("google")}>Login with google</button>
    </div>
  )
}

export default Login