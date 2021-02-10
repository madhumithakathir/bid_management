import React from 'react'
import {
  Menu,
  Segment,
  Sidebar
} from 'semantic-ui-react'
import "../Styles/Navbar"
const SideNav=()=>{
    return(
<Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            visible
          >
            <Menu secondary vertical>
              <Menu.Item>
                Home
                </Menu.Item>
              <Menu.Item>
                New Project
                </Menu.Item>
              <Menu.Item>
                Bid Review
                </Menu.Item>
              <hr></hr>
              <Menu.Header>
                Master Data
                </Menu.Header>
              <Menu.Item>
                Users
                </Menu.Item>
              <Menu.Item>
                Customers
                </Menu.Item>
              <Menu.Item>
                Products
                </Menu.Item>
              <Menu.Item>
                Price Template
                </Menu.Item>
              <Menu.Item>
                Opex Template
                </Menu.Item>
              <Menu.Item>
                Copx Template
                </Menu.Item>
              <Menu.Item>
                Signout
                </Menu.Item>
            </Menu>
          </Sidebar>
        </Sidebar.Pushable>
    )
}

export default SideNav