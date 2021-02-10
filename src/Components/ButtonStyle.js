import React from 'react'
import {Button, Grid} from 'semantic-ui-react'
//  import { ButtonStyle } from "../Styles/Navbar";
// import "../Styles/Styles.css"
import { Link } from 'react-router-dom'
import { LinkStyle} from "../Styles/Navbar";
const ButtonStyle = () => {
  return (
//     <ButtonStyle type='submit'>Login</ButtonStyle>
//     <LinkStyle as={Link} to='/home'>
//       Forgot Password?
//   </LinkStyle>
    <Grid columns={2} stackable>
      <Grid.Column>
      <Button primary className="login">Login</Button>
      </Grid.Column>
      <Grid.Column>
      <LinkStyle as={Link} to='/home'>Forgot Password?</LinkStyle>
      </Grid.Column>
    </Grid>

  )
}

export default ButtonStyle