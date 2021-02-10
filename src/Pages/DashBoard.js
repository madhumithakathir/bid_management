import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import "../Styles/Navbar"
import CardComponent from "../Components/CardComponent";
import DashBoardTable from "../Components/Table";
import SideNav from "../Components/SideNav";
import Navbar from "../Components/Navbar";

class SideBar extends React.Component {
  state={
    iconVisible:true,
    cardcontent:[
      { header:"Total No of projects",numberCotent:5},
      { header:"Submitted to PAC",numberCotent:3},
      { header:"Waiting For Review",numberCotent:6,}
    ]
  }
  render() {    
    return (
      <React.Fragment>
        <Navbar visible={this.state.iconVisible} />
        <Grid>
          <Grid.Column width={4}>
            <SideNav />
          </Grid.Column>
          <Grid.Column width={12}>
            <Segment.Group>
              <Segment className="cardSegment">
                {this.state.cardcontent.map((item,index)=>{
                return   <CardComponent header={item.header} numberCotent={item.numberCotent} key={index}></CardComponent>
                }    
                )}
              </Segment>
              <Segment>
                <DashBoardTable />
              </Segment>
            </Segment.Group>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    )
  }
}


export default SideBar