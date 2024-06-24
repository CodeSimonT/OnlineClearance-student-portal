import React from 'react'
import { Table } from "flowbite-react";

function ActiveClearanceTable() {
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
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              President Name
            </Table.Cell>
            <Table.Cell>Student Council</Table.Cell>
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
              <button className="bg-red-200 text-red-500 px-4 py-2 rounded-sm drop-shadow-md font-medium">
                Send Request
              </button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              IT Name
            </Table.Cell>
            <Table.Cell>IT/Property</Table.Cell>
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
              <button className="bg-red-200 text-red-500 px-4 py-2 rounded-sm drop-shadow-md font-medium">
                Send Request
              </button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Finance Name
            </Table.Cell>
            <Table.Cell>Finance</Table.Cell>
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
              <button className="bg-red-200 text-red-500 px-4 py-2 rounded-sm drop-shadow-md font-medium">
                Send Request
              </button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Registrar Name
            </Table.Cell>
            <Table.Cell>Registrar</Table.Cell>
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
              <button className="bg-red-200 text-red-500 px-4 py-2 rounded-sm drop-shadow-md font-medium">
                Send Request
              </button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Dean Name
            </Table.Cell>
            <Table.Cell>Dean</Table.Cell>
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
              <button className="bg-red-200 text-red-500 px-4 py-2 rounded-sm drop-shadow-md font-medium">
                Send Request
              </button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}

export default ActiveClearanceTable