import H2 from '../../components/h2';
import Section from '../../components/section';
import UpcomingTable from './upcomingTable';

export default function UpcomingPage() {
  return (
    <Section>
      <H2>Upcoming Rockets</H2>

      <p>
        Upcoming missions including both SpaceX launches and newly scheduled
        Zero to Mastery rockets.
      </p>
      <p>Warning! Clicking on the ❌ aborts the mission.</p>

      <UpcomingTable />
    </Section>
  );
}
