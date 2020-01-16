import axios from "axios"
import React, { useState, useEffect } from 'react'
import { Row, Col } from "react-bootstrap"
import UsersTable from "../components/users/UsersTable"
import UsersCreateForm from "../components/users/UsersCreateForm"
import UsersUpdateForm from "../components/users/UsersUpdateForm"

const API_URL ="http://localhost:8000"

export default function() {
    const [users, setUser] = useState([])
    const [UserToUpdate, SetUserToUpdate] = useState({})
    useEffect(() => {
        axios.get(API_URL+"/users")
            .then(result => {
                console.log(result)
                setUser(result.data)
            })
            .catch(err => console.log(err))
    }, [])

    const cbDelete = id => {
        axios.delete(API_URL+`/users/${id}`)
            .then(result => {
                console.log(result)
                setUser(users.filter(users => users._id !== id))
            })
            .catch(err => console.log(err))

    }
    const cbUpdate = (id, data) => {
        axios.put(API_URL+`/users/${id}`,
            data
        )
            .then(result => {
                console.log(result)
                setUser(users.map(users => users._id === id ? data : users))
            })
            .catch(err => console.log(err))
    }
    const cbSetUpdate = (users) => {
        SetUserToUpdate(users)
    }
    const cbCreate = data => {
        axios.post(API_URL+"/users",
            data
        )
            .then(result => {
                setUser([...users, result.data])
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>users </h1>
            <Row>
                <Col>
                    <UsersCreateForm cbCreate={cbCreate} />

                </Col>
                <Col>
                    <UsersUpdateForm cbUpdate={cbUpdate} users={UserToUpdate} setUser={SetUserToUpdate} />

                </Col>
            </Row>
            <div >
                <UsersTable users={users} cbDelete={cbDelete} cbSetUpdate={cbSetUpdate} />
            </div>
        </div>
    )
}

