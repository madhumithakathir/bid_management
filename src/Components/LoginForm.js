import React from 'react'
import {  Button, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { LinkStyle,ButtonStyle} from "../Styles/Navbar";
import "../Styles/Styles.css"
const LoginForm=()=>{
    return(
        <Form>
        <Form.Field inline>
          <label style={{marginLeft: "23px" }}>Email:</label>
          <input type="text" style={{ width: "80%", marginLeft: "4px" }} />
        </Form.Field>
        <Form.Field inline>
          <label>Password:</label>
          <input type="password" style={{ width: "80%" }} />
        </Form.Field>
      </Form>

    )
}
 export default LoginForm