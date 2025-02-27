import LaunchForm from './launchForm';
import H2 from '../../components/h2';
import Section from '../../components/section';

export default function LaunchPage() {
  return (
    <Section>
      <H2>Launch a Rocket</H2>

      <p>
        Schedule a mission launch for interstellar travel to one of the Kepler
        Exoplanets. Only confirmed planets matching the following criteria are
        available for the earliest scheduled missions:
      </p>
      <ul>
        <li>- Planetary radius &lt; 1.6 times Earth&apos;s radius</li>
        <li>
          - Effective stellar flux &gt; 0.36 times Earth&apos;s value and &lt;
          1.11 times Earth&apos;s value
        </li>
      </ul>

      <LaunchForm />
    </Section>
  );
}
