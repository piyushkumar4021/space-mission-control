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
    value: 'customers',
    name: 'Customers',
  },
];

export default function HistoryTable() {
  return (
    <Table className='my-5'>
      <TableCaption>A list of your previous rocket launches.</TableCaption>
      <TableHeader>
        <TableRow>
          {columns.map((col) => (
            <TableHead key={col.value}>{col.name}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            {columns.map((col) => (
              <TableCell key={col.value}>{row[col.value]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
