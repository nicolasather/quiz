import { StaticPage, DocLink } from '@/components/StaticPage';

export default function NotFound() {
  return (
    <StaticPage
      eyebrow="404"
      title="Nothing here yet"
      lead="This address does not lead anywhere — which, in a project about dead ends, is at least on theme."
    >
      <section>
        <p>The one place that does exist:</p>
        <ul>
          <li><DocLink href="/">Quiz Studio</DocLink> — write a quiz and host it live.</li>
        </ul>
      </section>
    </StaticPage>
  );
}
