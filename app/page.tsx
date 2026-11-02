import { redirect } from 'next/navigation';

// Quiz Studio lives at /quiz; the root address opens it.
export default function Home() {
  redirect('/quiz');
}
