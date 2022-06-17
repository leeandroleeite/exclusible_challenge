import { useRouter } from 'next/router';
import React, { SyntheticEvent, useState } from 'react'
import Layout from '../layouts/Layout'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const submit = async (e: SyntheticEvent) => {
      e.preventDefault();
      await fetch('http://localhost:8000/api/login', {
          method: "POST",
          credentials: 'include',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({
              email,
              password
          })
      })
      await router.push('/')
  }

  return (
    <Layout>
        <form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal">Log in</h1>
          <div className="form-floating">
            <input type="email" className="form-control" placeholder="name@example.com" required onChange={e => setEmail(e.target.value)}/>
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" placeholder="Password" required onChange={e => setPassword(e.target.value)}/>
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
        </form>
    </Layout>
  )
}

export default Login
