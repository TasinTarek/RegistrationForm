import React, { useEffect, useState } from 'react';
import logo from '../../assets/Images/logo.png';
import DataTable from './DataTable';

const infos = [
  { _id: 1, date: "11/7/16", name: "Arlene McCoy", status: "present" },
  { _id: 2, date: "11/7/16", name: "Arlene McCoy", status: "present" },
  { _id: 3, date: "11/7/16", name: "Arlene McCoy", status: "present" },
  { _id: 4, date: "11/7/16", name: "Arlene McCoy", status: "present" },
  { _id: 5, date: "11/7/16", name: "Arlene McCoy", status: "present" },
  { _id: 6, date: "11/7/16", name: "Arlene McCoy", status: "present" },
  { _id: 7, date: "11/7/16", name: "Arlene McCoy", status: "present" },
  { _id: 8, date: "11/7/16", name: "Arlene McCoy", status: "present" },
];



const Dashboard = () => {
    
    return (
      <div>
        <img src={logo} />
        <div className="text-center ">
          <h1 className="p-10 bg-accent min-w-full  text-6xl text-white">
            Attendance
          </h1>
        </div>
        {
            infos.map((info)=><DataTable
            key={info._id}
            info={info}
            ></DataTable>)
        }  
      </div>
      
    );
};

export default Dashboard;