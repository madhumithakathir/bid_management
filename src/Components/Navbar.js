import React from 'react'
import { Icon, Menu} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import "../Styles/Styles.css"
const MenuNavBar = (props) => {
  return (
    <div>
      {props.visible?
      <Menu >
      <Menu.Menu position='right'>
        <h2>BID Management</h2>
        </Menu.Menu>
        <Menu.Menu position='right'>
          <Icon name="alarm" size="big" className="iconMargin" />
          <Icon name="user" size="big" className="iconMargin"/>
          <Icon name="share square" size="big" className="iconMargin"/>
        </Menu.Menu>
      </Menu>
      :<Menu className="centerContent">
      <Menu.Menu >
        <h2>BID Management</h2>
        </Menu.Menu>
        </Menu>
        }
      

    </div>

  )
}

export default MenuNavBar
