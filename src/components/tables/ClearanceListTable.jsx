import React from 'react'
import { Table } from "flowbite-react";
import { useNavigate } from 'react-router-dom';

function ClearanceListTable({historyQuery}) {
    const navigate = useNavigate();

    const handleNavigate = ()=>{
        console.log('navigate')
    }

    return (
        <div className="overflow-x-auto border-2 rounded-b-md">
            <Table>
                <Table.Head>
                <Table.HeadCell>ID</Table.HeadCell>
                <Table.HeadCell>Term</Table.HeadCell>
                <Table.HeadCell>Status</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        historyQuery.data.map((data)=>(
                            <Table.Row 
                                onClick={handleNavigate} 
                                className="cursor-pointer bg-white dark:border-gray-700 dark:bg-gray-800"
                                key={data._id}
                            >
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {data._id.slice(-4)}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {data.term}
                                </Table.Cell>
                                <Table.Cell>
                                    {
                                        data.completed ?
                                        (
                                            <span className="inline-flex items-center bg-green-300 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                                <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
                                                Completed
                                            </span>
                                        ):(
                                            <span className="inline-flex items-center bg-red-300 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                                <span className="w-2 h-2 me-1 bg-red-500 rounded-full"></span>
                                                Incomplete
                                            </span>
                                        )
                                    }
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}

export default ClearanceListTable