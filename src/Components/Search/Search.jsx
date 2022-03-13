import React from 'react'
import { CSVLink } from "react-csv";

const Search = ({ selData, inv}) => {
  if(selData.length ===0){
    return (
       <div className="ui warning  message" bis_skin_checked="1">
                            <div className="header" bis_skin_checked="1">
                              No Data Selected!!
                            </div>
                            Select the row you want to download as CSV!!
                          </div>
    )
  }
  return (
    <div className={`ui ${inv} segment`}>

    {selData.length >0 && <CSVLink data={selData}><button className="ui teal right fluid labeled icon button">
                            <i className="download icon"></i>
                            Download as CSV 
                          </button>
                          </CSVLink>
                          }
  </div>
  )
}

export default Search;