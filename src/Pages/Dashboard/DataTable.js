import React from 'react';

const DataTable = ({ info,key }) => {
  return (
    <div className="overflow-x-auto mx-10">
      <table className="text-cneter table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>Date</th>
            <th>Name</th>
            <th>Status</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{info._id}</th>
            <td>{info.date}</td>
            <td>{info.name}</td>
            <td>{info.status}</td>
            
          </tr>
          
          
        </tbody>
        
      </table>
    </div>
  );
};

export default DataTable;