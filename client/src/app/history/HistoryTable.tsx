'use client';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from '@heroui/react';

const rows = [
  {
    id: '1',
    date: 'Tony Reichert',
    rocket: 'CEO',
    mission: 'Active',
    customers: 'Active',
  },
  {
    id: '2',
    date: 'Tony Reichert',
    rocket: 'CEO',
    mission: 'Active',
    customers: 'Active',
  },
  {
    id: '3',
    date: 'Tony Reichert',
    rocket: 'CEO',
    mission: 'Active',
    customers: 'Active',
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
    key: 'customers',
    label: 'Customers',
  },
];

export default function App() {
  return (
    <Table aria-label='Example table with dynamic content'>
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
