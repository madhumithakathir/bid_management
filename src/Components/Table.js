import React from 'react'
import {
    Table, Icon
} from 'semantic-ui-react'
import "../Styles/Navbar"

const DashBoardTable = () => {

    return (

        <Table celled striped>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>
                        <select name="ProjectId" class="ui dropdown">
                            <option value="1">Project Id</option>
                            <option value="2">Project1</option>
                        </select>
                    </Table.HeaderCell>
                    <Table.HeaderCell>Project Name</Table.HeaderCell>
                    <Table.HeaderCell>Project Type</Table.HeaderCell>
                    <Table.HeaderCell>LOB</Table.HeaderCell>
                    <Table.HeaderCell>Total Volume</Table.HeaderCell>
                    <Table.HeaderCell>Location</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                    <Table.HeaderCell>Action</Table.HeaderCell>

                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell collapsing>TVSBID001</Table.Cell>
                    <Table.Cell>LG</Table.Cell>
                    <Table.Cell>IPW</Table.Cell>
                    <Table.Cell>MHS</Table.Cell>
                    <Table.Cell>20%</Table.Cell>
                    <Table.Cell>Chennai</Table.Cell>
                    <Table.Cell>Pending From Solution Team</Table.Cell>
                    <Table.Cell collapsing textAlign='right'>
                        <Icon name="edit" />
                        <Icon name="eye" />  </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell collapsing>TVSBID001</Table.Cell>
                    <Table.Cell>LG</Table.Cell>
                    <Table.Cell>IPW</Table.Cell>
                    <Table.Cell>MHS</Table.Cell>
                    <Table.Cell>20%</Table.Cell>
                    <Table.Cell>Chennai</Table.Cell>
                    <Table.Cell>Pending From Solution Team</Table.Cell>
                    <Table.Cell collapsing textAlign='right'>
                        <Icon name="edit" />
                        <Icon name="eye" />  </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell collapsing>TVSBID001</Table.Cell>
                    <Table.Cell>LG</Table.Cell>
                    <Table.Cell>IPW</Table.Cell>
                    <Table.Cell>MHS</Table.Cell>
                    <Table.Cell>20%</Table.Cell>
                    <Table.Cell>Chennai</Table.Cell>
                    <Table.Cell>Pending From Solution Team</Table.Cell>
                    <Table.Cell collapsing textAlign='right'>
                        <Icon name="edit" />
                        <Icon name="eye" />  </Table.Cell>
                </Table.Row>

            </Table.Body>
        </Table>

    )
}
export default DashBoardTable