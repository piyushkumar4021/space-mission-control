import H2 from '../../components/h2';
import Section from '../../components/section';
import HistoryTable from './historyTable';

export default function HistoryPage() {
  return (
    <Section>
      <H2>Previous Launched Rockets</H2>

      <p>
        History of mission launches including SpaceX launches starting from the
        year 2006.
      </p>

      <HistoryTable />
    </Section>
  );
}
