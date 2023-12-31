'use client';
import { useState } from 'react';
import PlayerDetails from './PlayerDetails';
import Game from './Game';

import { useElementSize } from 'usehooks-ts';
import { Id } from '../../convex/_generated/dataModel';

export default function GameWrapper() {
  const [selectedPlayer, setSelectedPlayer] = useState<Id<'players'> | undefined>();

  const [gameWrapperRef, { width, height }] = useElementSize();

  return (
    <div className="mx-auto w-full max-w grid grid-rows-[240px_1fr] lg:grid-rows-[1fr] lg:grid-cols-[1fr_auto] lg:h-[700px] max-w-[2400px] min-h-[480px]">
      {/* Game area */}
      <div className="relative overflow-hidden bg-brown-900" ref={gameWrapperRef}>
        <div className="absolute inset-0">
          <Game width={width} height={height} setSelectedPlayer={setSelectedPlayer} />
        </div>
      </div>

      {/* Right column area */}

      {selectedPlayer ? (
        <div className="flex flex-col overflow-y-auto no-scrollbar shrink-0 px-4 py-6 sm:px-6 lg:w-96 xl:pr-6 bg-brown-800 text-brown-100">
          <PlayerDetails playerId={selectedPlayer} />
        </div>
      ) : null}
    </div>
  );
}
