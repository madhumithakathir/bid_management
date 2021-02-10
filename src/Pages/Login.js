import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import { Wrapper } from "../Styles/Navbar";
import "../Styles/Styles.css"
import ButtonWrap from "../Components/ButtonWrap";
import LoginForm from "../Components/LoginForm";
import Navbar from "../Components/Navbar";
import ButtonStyle from "../Components/ButtonStyle";
class LoginPage extends React.Component {
 
  state={
    iconVisible:false
  }
  
  render() {
    return (
      <React.Fragment>
        <Navbar visible={this.state.iconVisible} />
        <Container>
          <Wrapper>
            <Header as='h2'>Login</Header>
            <LoginForm />
            <ButtonStyle/>
            <ButtonWrap />
          </Wrapper>
        </Container>
      </React.Fragment>
    )
  }
}



export default LoginPage