'use client';

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Button,
} from '@heroui/react';
import { TfiClose } from 'react-icons/tfi';

const rows = [
  {
    id: '1',
    date: 'Tony Reichert',
    rocket: 'CEO',
    mission: 'Active',
    destination: 'Active',
  },
  {
    id: '2',
    date: 'Tony Reichert',
    rocket: 'CEO',
    mission: 'Active',
    destination: 'Active',
  },
  {
    id: '3',
    date: 'Tony Reichert',
    rocket: 'CEO',
    mission: 'Active',
    destination: 'Active',
  },
];

const columns = [
  {
    key: 'id',
    label: 'ID',
  },
  {
    key: 'date',
    label: 'Date',
  },
  {
    key: 'mission',
    label: 'Mission',
  },
  {
    key: 'rocket',
    label: 'Rocket',
  },
  {
    key: 'destination',
    label: 'Destination',
  },
];

export default function UpcomingTable() {
  return (
    <Table aria-label='Table with dynamic content'>
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>

      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>
                <div className='flex items-center'>
                  {getKeyValue(item, columnKey)}
                  {columnKey === 'destination' && (
                    <Button
                      isIconOnly
                      className='ml-auto'
                      variant='light'
                      size='sm'
                      color='danger'
                    >
                      <TfiClose />
                    </Button>
                  )}
                </div>
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
