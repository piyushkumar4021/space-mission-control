import { IoClose as XIcon } from 'react-icons/io5';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';

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
    value: 'id',
    name: 'ID',
  },
  {
    value: 'date',
    name: 'Date',
  },
  {
    value: 'mission',
    name: 'Mission',
  },
  {
    value: 'rocket',
    name: 'Rocket',
  },
  {
    value: 'destination',
    name: 'Destination',
  },
];

export default function UpcomingTable() {
  return (
    <Table className='my-5'>
      <TableCaption>A list of your recent rocket launches.</TableCaption>
      <TableHeader>
        <TableRow>
          {columns.map((col) => (
            <TableHead key={col.value}>{col.name}</TableHead>
          ))}
          <TableHead className='w-10' />
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            {columns.map((col) => (
              <TableCell key={col.value}>{row[col.value]}</TableCell>
            ))}
            <TableCell className='flex justify-center items-center'>
              <XIcon className='w-7 h-7 text-red-500 hover:bg-red-400/20 p-0.5 rounded cursor-pointer' />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
