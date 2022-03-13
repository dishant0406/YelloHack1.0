import React from 'react';
import { useFetch } from '../../Hooks/useFetch';
import TableList from '../TableList/TableList';


const Table = ({ selData, setselData, inv}) => {
  const {data, error, isPending} = useFetch('https://randomuser.me/api/?results=50');

  let tableData;

  
  

  if(data){
     tableData = data.results.map(doc=>{
      return {name: `${doc.name.first} ${doc.name.last}`,
               thumbnail: doc.picture.thumbnail,
              gender: doc.gender.toUpperCase(),
              dob: new Date(doc.dob.date).toLocaleDateString('en-us', { day:"numeric",year:"numeric", month:"short"}),
              email: doc.email, colour:''}
    })
  }
  
  return (
    <div className="Table">
    {isPending && <div className="ui container">
                    <p></p>
                    <div className="ui active dimmer">
                      <div className="ui loader"></div>
                    </div>
                  </div>
    }
    {error && <div className="ui negative message">
              <div className="header">
                Sorry there is a error Fetching the data!
              </div>
              <p>{error}</p>
            </div>
    }
    {data && <TableList res={tableData} selData={selData} setselData={setselData} inv={inv}/>}
    </div>
  )
}

export default Table