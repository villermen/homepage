import conveyorsDownload from 'assets/downloads/gamemaker/conveyors.exe';
import conveyorsProjectDownload from 'assets/downloads/gamemaker/conveyors.gmk';
import dtm08Download from 'assets/downloads/gamemaker/dtm-0.8.exe';
import dtm36Download from 'assets/downloads/gamemaker/dtm-3.6.exe';
import dtmProjectDownload from 'assets/downloads/gamemaker/dtm.gmk';
import sentinelDownload from 'assets/downloads/gamemaker/sentinel.exe';
import visualizedDownload from 'assets/downloads/gamemaker/visualized.exe';
import visualizedProjectDownload from 'assets/downloads/gamemaker/visualized.gmk';
import conveyorsImage1 from 'assets/images/gamemaker/conveyors1.png';
import conveyorsImage2 from 'assets/images/gamemaker/conveyors2.png';
import conveyorsImage3 from 'assets/images/gamemaker/conveyors3.png';
import dtmImage1 from 'assets/images/gamemaker/dtm1.png';
import dtmImage2 from 'assets/images/gamemaker/dtm2.png';
import sentinelImage1 from 'assets/images/gamemaker/sentinel1.png';
import sentinelImage2 from 'assets/images/gamemaker/sentinel2.png';
import sentinelImage3 from 'assets/images/gamemaker/sentinel3.png';
import sentinelImage4 from 'assets/images/gamemaker/sentinel4.png';
import visualizedImage1 from 'assets/images/gamemaker/visualized1.png';
import visualizedImage2 from 'assets/images/gamemaker/visualized2.png';
import visualizedImage3 from 'assets/images/gamemaker/visualized3.png';
import React from 'react';

export default () => (
    <>
        <section>
            <h1>Gamemaker</h1>
            <p>
                Back in 2008 I started coding (or just plain drag-and-dropping at first) in Gamemaker. It basically
                taught me how coding languages and objects worked. I also made some pretty simple games/programs with it
                over time. All the programs listed below were made with GameMaker 7, which was the latest version at the
                time I was using it. I won't make any more games/programs with it due to it's limitations.
            </p>
        </section>
        <section>
            <h2>Conveyors</h2>
            <p className="center">
                <a href={conveyorsDownload}>Download game (.exe)</a><br />
                <a href={conveyorsProjectDownload}>Download project (.gmk)</a><br />
                (24-10-2008)
            </p>
            <p>
                This has been the first thing you could really call a game that I made myself. It's still unfinished,
                and it won't ever be, but all the main coding is there. To finish it I only had to put in some more
                content (more objects, levels), but I never came up with new ideas. Eventually I got bored of trying to
                come up with new stuff and creating levels, so I stopped working on it.
            </p>
            <p>
                In the game itself you have to get crates into a dropbox using conveyors and other objects you can
                place. It also has a constructor to create and test your own levels with. The only thing I did not make
                myself for this game was the music (which is evident).
            </p>
            <p className="center">
                <img src={conveyorsImage1} alt="Loading screen" />
                <img src={conveyorsImage2} alt="Main menu" />
                <img src={conveyorsImage3} alt="In-game" />
            </p>
        </section>
        <section>
            <h2>Sentinel</h2>
            <p className="center">
                <a href={sentinelDownload}>Download game (.exe)</a><br />
                (22-6-2010)
            </p>
            <p>
                I have helped the developer of this game by coding part of the AI of the enemies. That's basically it,
                it turned out to be quite a funny game to play as well.
            </p>
            <p>
                In the game you control a spaceship, and you must defend your core/base. The enemies will try to take
                down your shields and base and you should kill them before they do.
            </p>
            <p className="center">
                <img src={sentinelImage1} alt="Main menu" />
                <img src={sentinelImage2} alt="In-game 1" />
                <img src={sentinelImage3} alt="In-game 2" />
                <img src={sentinelImage4} alt="High scores" />
            </p>
        </section>
        <section>
            <h2>Visualized</h2>
            <p className="center">
                <a href={visualizedDownload}>Download game (.exe)</a><br />
                <a href={visualizedProjectDownload}>Download project (.gmk)</a><br />
                (21-7-2009)
            </p>
            <p>
                An idea I worked on for a day. It's more screensaver than game.It's a screensaver with some options you
                can edit when it's running.
            </p>
            <p>
                It's a black screen at first, use [Enter] to bring up an info display.<br />
                Use R/Y/G/W/B to toggle red/yellow/green/white/blue colors respectively.<br />
                + & - to toggle the speed of object creation.<br />
                P to pause.<br />
            </p>
            <p className="center">
                <img src={visualizedImage1} alt="Stars" />
                <img src={visualizedImage2} alt="Lines" />
                <img src={visualizedImage3} alt="Circles" />
            </p>
        </section>
        <section>
            <h2>Dungeoneering Team Map (DTM)</h2>
            <p className="center">
                <a href={dtm36Download}>Download game (.exe)</a><br />
                <a href={dtmProjectDownload}>Download project (.gmk)</a><br />
                (25-4-2011)
            </p>
            <p>
                DTM is a tool I made for dungeoneering in Runescape. It's an interactive multiplayer map that you can
                use to keep track of where all the obstacles, doors, paths, etc. are in the current dungeon. I stopped
                developing it after I noticed it was too tedious and slowing to keep updating it while also completing a
                dungeon. I still think the idea behind the tool is awesome though =)
            </p>
            <p>
                My attempt at the same idea a few months before that can be downloaded <a href={dtm08Download}>here</a>
                (21-6-2010). This one failed because I used the built-in networking system, which did not work at all. I
                discovered that after I had been working on it for a long time though =S
            </p>
            <p>
                Beware the spamshockintro.
            </p>
            <p className="center">
                <img src={dtmImage1} alt="Main menu" />
                <img src={dtmImage2} alt="In dungeon" />
            </p>
        </section>
    </>
);
