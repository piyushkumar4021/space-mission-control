import { Card, CardBody, CardHeader } from '@heroui/react';
import H2 from '../../components/H2';
import UpcomingTable from './UpcomingTable';

export default function UpcomingPage() {
  return (
    <section className='px-3 mb-5'>
      <Card className='max-w-screen-lg mx-auto sm:p-4'>
        <CardHeader>
          <H2>Upcoming Rockets</H2>
        </CardHeader>
        <CardBody>
          <p className='mb-2'>
            Upcoming missions including both SpaceX launches and newly scheduled
            Zero to Mastery rockets.
          </p>
          <p className='mb-4'>Warning! Clicking on the ✖ aborts the mission.</p>

          <UpcomingTable />
        </CardBody>
      </Card>
    </section>
  );
}
