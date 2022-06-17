import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Layout from '../layouts/Layout'

const Home: NextPage = () => {

  const [message, setMessage] = useState('You are not logged in')
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    (
     async () => {
      try {
        const response = await fetch('http://localhost:8000/api/user', {
          credentials: 'include',
        });
  
        const result = await response.json();

        if (result.email != undefined) {
          setMessage(`Hello, ${result.email}!`)
          setAuth(true)
        }
        
      } catch (e) {
        setMessage('You are not logged in!')
        setAuth(false)
      }
     }
    )();
    
  });
  
  return (
      <Layout auth= {auth}>
        {message}
      </Layout>
  )
}

export default Home
