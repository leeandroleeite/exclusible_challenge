import Head from 'next/head'
import React from 'react'

const Layout = ({children} : any) => {
  return (
    <>
      <Head>
        <title>Exclusible</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous"></link>
      </Head>

      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Home</a>
                <div>
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                    <a className="nav-link active" href="#">Login</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="#">Register</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

        <main className="form-signin w-100 m-auto">
            {children}
        </main>
    </>
  )
}

export default Layout