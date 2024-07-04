import React, { useState, useEffect } from 'react';
import { Table } from "flowbite-react";
import axios from 'axios';

function ActiveClearanceTable({ data, serverURL, token }) {
  const [departments, setDepartments] = useState({});

  useEffect(() => {
    const fetchDepartments = async () => {
      const departmentData = {};

      await Promise.all(data.requiredDepartments.map(async (department) => {
        try {
          const response = await axios.get(`${serverURL}/osc/api/get/single/departmentData?id=${department.departmentId}`, {
            headers: {
              Authorization: token,
            },
          });
          departmentData[department.departmentId] = response.data;
        } catch (error) {
          console.error(`Error fetching department data for ID: ${department.departmentId}`, error);
        }
      }));

      setDepartments(departmentData);
    };

    fetchDepartments();
  }, [data, serverURL, token]);

  const handleSendRequest = async(dept)=>{
    console.log(dept)
  }
  return (
    <div className="overflow-x-auto border-2 rounded-b-md">
      <Table>
        <Table.Head>
          <Table.HeadCell>Designee</Table.HeadCell>
          <Table.HeadCell>Department</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Deficiency</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {
            data.requiredDepartments.map((department, index) => {
              const deptData = departments[department.departmentId];
              return (
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {deptData ? `${deptData.firstName} ${deptData.lastName}` : 'Loading...'}
                  </Table.Cell>
                  <Table.Cell>
                  {deptData ? deptData.department: 'Loading...'}
                  </Table.Cell>
                  <Table.Cell>
                    <span className="inline-flex items-center bg-gray-300 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full w-24">
                      <span className="w-2 h-2 me-1 bg-gray-500 rounded-full"></span>
                      Unsigned
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="inline-flex items-center bg-gray-300 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full w-28">
                      <span className="w-2 h-2 me-1 bg-gray-500 rounded-full"></span>
                      No deficiency
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <button 
                      className="bg-red-200 text-red-500 px-4 py-2 rounded-sm drop-shadow-md font-medium"
                      onClick={()=>{handleSendRequest(deptData)}}
                    >
                      Send Request
                    </button>
                  </Table.Cell>
                </Table.Row>
              );
            })
          }
        </Table.Body>
      </Table>
    </div>
  );
}

export default ActiveClearanceTable;
