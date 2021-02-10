import React from 'react'
import {Button, Grid} from 'semantic-ui-react'
// import { ButtonWrapper } from "../Styles/Navbar";
// import "../Styles/Styles.css"
const ButtonWrap = () => {
  return (
    // <ButtonWrapper>
    //         <Button primary>Login By Solution Team</Button>
    //         <Button primary>Login By HR</Button>
    //         <Button primary>Login By PAC Team</Button>
    //          </ButtonWrapper>
    <Grid columns={3} stackable="true">
      <Grid.Column>
      <Button primary>Login By Solution Team</Button>
      </Grid.Column>
      <Grid.Column>
      <Button primary>Login By HR</Button>
      </Grid.Column>
      <Grid.Column>
      <Button primary>Login By PAC Team</Button>
      </Grid.Column>
    </Grid>

  )
}

export default ButtonWrap