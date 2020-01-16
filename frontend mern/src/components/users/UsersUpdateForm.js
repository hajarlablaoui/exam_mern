import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
function UsersForm({ cbUpdate, User={} ,setUser}) {

    const UpdateUser = () => {
        cbUpdate(User._id,User )

    }
    return (
        <div style={{ margin: 20, width: "600px" }} >
            <h3>Update Form</h3>
            <Form.Control size="md" style={{margin:5}} type="text" placeholder="username" value={User.name} onChange={(e)=> setUser({...User,username:e.target.value})}/>
        
            <Button variant="primary" style={{margin:5}} onClick={UpdateUser}>Update</Button>
        </div>
    )
}

export default UsersForm
