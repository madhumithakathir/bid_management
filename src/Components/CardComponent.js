import React from 'react'
import { Card } from 'semantic-ui-react'
import "../Styles/Navbar"

const CardComponent = (props) => {
    return (
        <React.Fragment>
             <Card>
                <Card.Content header={props.header} />
                <Card.Content header={props.numberCotent} className="numberCotent" />
            </Card> 
           
        </React.Fragment>
    )
}
export default CardComponent