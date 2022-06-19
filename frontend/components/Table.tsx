import React, { useEffect, useState } from 'react'

const Table = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
    }, [0])
    
    const getUsers = async () => {
        const response = await fetch('http://localhost:8000/api/users/')
        const data = await response.json()
        setUsers(data)
        console.log(users)
    }

    const handleDeleteUser = async (email: any): Promise<void> => {
        const response = await fetch('http://localhost:8000/api/delete/' + email, { method: 'DELETE' })
        console.log(response)
        getUsers()
    }

  return (
    <div>
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Delete User</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user: any, index: number) => {
                            return (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>
                                        <button  
                                        onClick={() => handleDeleteUser(user.email)} 
                                        >
                                        Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Table
