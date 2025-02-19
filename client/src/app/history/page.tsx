import { Card, CardHeader, CardBody } from '@heroui/react';
import H2 from '../../components/H2';
import HistoryTable from './HistoryTable';

export default function HistoryPage() {
  return (
    <section className='px-3 mb-5'>
      <Card className='max-w-screen-lg mx-auto sm:p-4'>
        <CardHeader>
          <H2>Previous Launched Rockets</H2>
        </CardHeader>
        <CardBody>
          <p className='mb-4'>
            History of mission launches including SpaceX launches starting from
            the year 2006.
          </p>

          <HistoryTable />
        </CardBody>
      </Card>
    </section>
  );
}
