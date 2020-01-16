import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
function UsersForm({ cbCreate }) {
    const [newUser, SetNewUser] = useState({})
    const createUser = () => {
        cbCreate(newUser)

    }
    return (
        <div style={{ margin: 20, width: "600px" }} >
            <h3>Creation Form</h3>
            <Form.Control size="md" style={{margin:5}} type="text" placeholder="username" value={newUser.name} onChange={(e)=> SetNewUser({...newUser,username:e.target.value})}/>
            <Form.Control  size="md" style={{margin:5}} type="text" placeholder="gender" value={newUser.gender} onChange={(e)=> SetNewUser({...newUser,gender:e.target.value})}/>
            <Form.Control size="md" style={{margin:5}}type="date" placeholder="dob" value={newUser.qte} onChange={(e)=> SetNewUser({...newUser,dob:e.target.value})}/>
            <Form.Control size="md" style={{margin:5}}type="text" placeholder="news" value={newUser.qte} onChange={(e)=> SetNewUser({...newUser,news:e.target.value})}/>
            <Form.Control size="md" style={{margin:5}}type="text" placeholder="email" value={newUser.qte} onChange={(e)=> SetNewUser({...newUser,email:e.target.value})}/>
            <Form.Control size="md" style={{margin:5}}type="text" placeholder="photo" value={newUser.qte} onChange={(e)=> SetNewUser({...newUser,photo:e.target.value})}/>
             <Button variant="primary" onClick={createUser}>Add</Button>
        </div>
    )
}

export default UsersForm
