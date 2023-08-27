import { SignedIn, SignedOut, UserButton, auth } from '@clerk/nextjs';
import GameWrapper from '@/components/GameWrapper';
import FreezeButton from '@/components/FreezeButton';
import LoginButton from '@/components/LoginButton';

export default function Home() {
  return (
    <main>
      <GameWrapper />
      <footer className="absolute bottom-0 left-0 w-full flex items-center mt-4 gap-6 p-6 flex-wrap pointer-events-none">
        <div className="flex gap-4 flex-grow pointer-events-none">
          <FreezeButton />
        </div>
      </footer>
    </main>
  );
}
