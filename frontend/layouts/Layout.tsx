import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Layout = (props: any) => {

    const router = useRouter();

    const logout = async () => {
        await fetch('http://localhost:8000/api/logout', {
            method: "POST",
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
        })

        await router.push('/login')
    }

    let menu;

    if (!props.auth) {
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    <Link href={'/login'}>
                        <a className="nav-link active">Login</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href={'/register'}>
                        <a className="nav-link active">Register</a>
                    </Link>
                </li>
            </ul>
        )
    } else {
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    <a href='#' className="nav-link active" onClick={logout}>Logout</a>
                </li>
            </ul>
        )
    }

    return (
        <>
            <Head>
                <title>Exclusible</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous"></link>
            </Head>

            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <div className="container-fluid">
                    <Link href={'/'}>
                        <a className="navbar-brand">Home</a>
                    </Link>
                    <div>
                        {menu}
                    </div>
                </div>
            </nav>

            <main className="form-signin w-100 m-auto">
                {props.children}
            </main>
        </>
    )
}

export default Layout