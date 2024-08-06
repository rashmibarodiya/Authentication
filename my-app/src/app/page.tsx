import { getSession } from 'next-auth/react';
import Signup from './components/Signup';

async function getData() {
  const session = await getSession();
  return session;
}

export default async function Home() {
   const session = await getData();

  return (
    <div>
      {/* <header>
        <Signup />
      </header> */}
      <div>
        hi
        Welcome, {session?.user?.name || 'Guest'}
      </div>
    </div>
  );
}
