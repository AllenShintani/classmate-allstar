import { SignedIn, SignedOut, UserButton, auth } from '@clerk/nextjs';
import GameWrapper from '@/components/GameWrapper';
import FreezeButton from '@/components/FreezeButton';
import LoginButton from '@/components/LoginButton';

export default function Home() {
  return (
    <main>
        <GameWrapper />
    </main>
  );
}
