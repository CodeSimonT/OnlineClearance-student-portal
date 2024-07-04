import React, { useState, useEffect } from 'react';
import { Table } from "flowbite-react";
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import ErrorToast from '../toast/ErrorToast';

function ActiveClearanceTable({ data, serverURL, token, userID }) {
  const [departments, setDepartments] = useState({});

  const mutation = useMutation({
    mutationFn:async(clearanceData)=>{
      const {data} = await axios.post(`${serverURL}/osc/api/post/sendRequestClearance`,clearanceData,{
        headers:{
          Authorization:token
        }
      })

      return data
    }
  })

  const handleSendRequest = async(dept)=>{
    if(!dept){
      return ErrorToast('Something wen wrong. Please try again.')
    }

    mutation.mutate({
      deptID:dept._id,
      clearanceID:data._id,
      userID
    })
  }

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
                    {
                      department.status === '' ?
                      (
                        <span className="inline-flex items-center bg-gray-300 text-gray-800 text-xs font-medium px-4 py-0.5 rounded-full">
                          <span className="w-2 h-2 me-1 bg-gray-500 rounded-full"></span>
                          Unsigned
                        </span>
                      ):(
                        <span className="inline-flex items-center bg-green-300 text-green-800 text-xs font-medium px-4 py-0.5 rounded-full">
                          <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
                          Signed
                        </span>
                      )
                    }
                  </Table.Cell>
                  <Table.Cell>
                      {
                        department.deficiency === '' ?
                        (
                          <span className="inline-flex items-center bg-gray-300 text-gray-800 text-xs font-medium px-4 py-0.5 rounded-full">
                            <span className="w-2 h-2 me-1 bg-gray-500 rounded-full"></span>
                            No deficiency
                          </span>
                        ):(
                          <span className="inline-flex items-center bg-red-300 text-red-800 text-xs font-medium px-4 py-0.5 rounded-full">
                            <span className="w-2 h-2 me-1 bg-red-500 rounded-full"></span>
                            Deficiency
                          </span>
                        )
                      }
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
