import { Card, CardBody, CardHeader } from '@heroui/react';
import LaunchForm from './LaunchForm';
import H2 from '../../components/H2';

export default function LaunchPage() {
  return (
    <section className='px-3 mb-5'>
      <Card className='max-w-screen-lg mx-auto sm:p-4'>
        <CardHeader>
          <H2>Launch a Rocket</H2>
        </CardHeader>
        <CardBody>
          <Content />
          <LaunchForm />
        </CardBody>
      </Card>
    </section>
  );
}

const Content = () => {
  return (
    <div className='text-sm sm:text-base'>
      <p className='mb-1'>
        Schedule a mission launch for interstellar travel to one of the Kepler
        Exoplanets.
      </p>
      <p>
        Only confirmed planets matching the following criteria are available for
        the earliest scheduled missions:
      </p>
      <ul className='pl-6'>
        <li>- Planetary radius &lt; 1.6 times Earth&apos;s radius</li>
        <li>
          - Effective stellar flux &gt; 0.36 times Earth&apos;s value and &lt;
          1.11 times Earth&apos;s value
        </li>
      </ul>
    </div>
  );
};
