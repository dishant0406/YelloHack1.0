import _ from 'lodash'
import React from 'react'
import { Header, Image, Table } from 'semantic-ui-react'


function exampleReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_SORT':
      if (state.column === action.column) {
        return {
          ...state,
          data: state.data.slice().reverse(),
          direction:
            state.direction === 'ascending' ? 'descending' : 'ascending',
        }
      }

      return {
        column: action.column,
        data: _.sortBy(state.data, [action.column]),
        direction: 'ascending',
      }
    default:
      throw new Error()
  }
}



function TableList({res, selData, setselData, inv}) {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    column: null,
    data: res,
    direction: null,
  })
  const { column, data, direction } = state;

  const handleClick = ((doc)=>{
    setselData([...selData, {name:doc.name, gender: doc.gender, email: doc.email, dob: doc.dob}])
    doc.colour = 'orange'
  })

  return (
    <Table className={inv} sortable selectable striped size='large'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell
            sorted={column === 'name' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'name' })}
          >
            Name
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'gender' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'gender' })}
          >
            Gender
          </Table.HeaderCell>
          <Table.HeaderCell>
            DOB
          </Table.HeaderCell>
          <Table.HeaderCell>
            Email
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map(doc=>{
          return <Table.Row key={doc.email} onClick={()=> handleClick(doc)} className={doc.colour}>
          <Table.Cell>
            <Header as='h4' image>
              <Image src={doc.thumbnail} rounded size='mini' />
              <Header.Content style={inv==='' ? {color: '#000'} : doc.colour==='' ? {color :'#fff'} : {color: '#000'}}>
              {doc.name}
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>{doc.gender}</Table.Cell>
          <Table.Cell>{doc.dob}</Table.Cell>
          <Table.Cell>{doc.email}</Table.Cell>
        </Table.Row>
        })}
      </Table.Body>
    </Table>
  )
}

export default TableList;