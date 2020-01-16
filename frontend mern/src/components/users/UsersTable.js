import React from 'react'
import { Table, Button } from "react-bootstrap"
function usersTable({ users, cbDelete, cbSetUpdate }) {
    console.log(users)
    return (
        <Table striped bordered hover >
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Gender</th>
                    <th>qte</th>
                    <th>dob</th>
                    <th>news</th>
                    <th>email</th>
                    <th>dob</th>
                    <th>photo</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, i) => (<tr key={i}>
                    <td>{user.username}</td>
                    <td>{user.gender}</td>
                    <td>{user.dob}</td>
                    <td>{user.news}</td>
                    <td>{user.email}</td>
                    <td>{user.photo}</td>

                    <td style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
                        <Button variant="danger" onClick={()=> cbDelete(user._id)}>
                            delete
                        </Button>
                        <Button variant="warning" onClick={()=> cbSetUpdate(user)}>
                            Update
                        </Button>
                    </td>
                </tr>))}
            </tbody>
        </Table>

    )
}

export default usersTable
