import React from 'react'
import Layout from '../layouts/Layout'

const login = () => {
  return (
    <Layout>
        <form>
          <h1 className="h3 mb-3 fw-normal">Log in</h1>
          <div className="form-floating">
            <input type="email" className="form-control" placeholder="name@example.com" required/>
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" placeholder="Password" required/>
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
        </form>
    </Layout>
  )
}

export default login
