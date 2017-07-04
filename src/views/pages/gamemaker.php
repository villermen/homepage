<?php
    $view->extend("layout");
    $view["slots"]->set("title", "Gamemaker");
?>
<section>
    <h1>Gamemaker</h1>

    <p>
        Back in 2008 I started coding (or just plain drag-and-dropping at first) in Gamemaker.
        It basically taught me how coding languages and objects worked.
        I also made some pretty simple games/programs with it over time.
        All the programs listed below were made with GameMaker 7, which was the latest version at the time I was using it.
        I won't make any more games/programs with it due to it's limitations.
    </p>
</section>

<section>
    <h2>Conveyors</h2>

    <p class="center">
        <a href="<?=$baseUrl."gamemaker/conveyors.exe"?>">Download game (.exe)</a><br />
        <a href="<?=$baseUrl."gamemaker/conveyors.gmk"?>">Download project (.gmk)</a><br />
        (24-10-2008)
    </p>
    <p>
        This has been the first thing you could really call a game that I made myself.
        It's still unfinished, and it won't ever be, but all the main coding is there.
        To finish it I only had to put in some more content (more objects, levels), but I never came up with new ideas.
        Eventually I got bored of trying to come up with new stuff and creating levels, so I stopped working on it.
    </p>
    <p>
        In the game itself you have to get crates into a dropbox using conveyors and other objects you can place.
        It also has a constructor to create and test your own levels with.
        The only thing I did not make myself for this game was the music (which is evident).
    </p>
    <p class="center">
        <img src="<?=$baseUrl."gamemaker/conveyors1.png"?>" alt="Loading screen" />
        <img src="<?=$baseUrl."gamemaker/conveyors2.png"?>" alt="Main menu" />
        <img src="<?=$baseUrl."gamemaker/conveyors3.png"?>" alt="In-game" />
    </p>
</section>

<section>
    <h2>Sentinel</h2>

    <p class="center">
        <a href="<?=$baseUrl."gamemaker/sentinel.exe"?>">Download game (.exe)</a><br />
        (22-6-2010)
    </p>
    <p>
        I have helped the developer of this game by coding part of the AI of the enemies.<br />
        That's basically it, it turned out to be quite a funny game to play as well.<br />
    </p>
    <p>
        In the game you control a spaceship, and you must defend your core/base.<br />
        The enemies will try to take down your shields and base and you should kill them before they do.<br />
    </p>
    <p class="center">
        <img src="<?=$baseUrl."gamemaker/sentinel1.png"?>" alt="Main menu" />
        <img src="<?=$baseUrl."gamemaker/sentinel2.png"?>" alt="In-game 1" />
        <img src="<?=$baseUrl."gamemaker/sentinel3.png"?>" alt="In-game 2" />
        <img src="<?=$baseUrl."gamemaker/sentinel4.png"?>" alt="High scores" />
    </p>
</section>

<section>
    <h2>Visualized</h2>

    <p class="center">
        <a href="<?=$baseUrl."gamemaker/visualized.exe"?>">Download game (.exe)</a><br />
        <a href="<?=$baseUrl."gamemaker/visualized.gmk"?>">Download project (.gmk)</a><br />
        (21-7-2009)
    </p>
    <p>
        An idea I worked on for a day.
        It's more screensaver than game.
        It's a screensaver with some options you can edit when it's running.
    </p>
    <p>
        It's a black screen at first, use [Enter] to bring up an info display.<br />
        Use R/Y/G/W/B to toggle red/yellow/green/white/blue colors respectively.<br />
        + & - to toggle the speed of object creation.<br />
        P to pause.<br />
    </p>
    <p class="center">
        <img src="<?=$baseUrl."gamemaker/visualized1.png"?>" alt="Stars" />
        <img src="<?=$baseUrl."gamemaker/visualized2.png"?>" alt="Lines" />
        <img src="<?=$baseUrl."gamemaker/visualized3.png"?>" alt="Circles" />
    </p>
</section>

<section>
    <h2>Dungeoneering Team Map (DTM)</h2>

    <p class="center">
        <a href="<?=$baseUrl."gamemaker/dtm_08.exe"?>">Download game (.exe)</a><br />
        <a href="<?=$baseUrl."gamemaker/dtm.gmk"?>">Download project (.gmk)</a><br />
        (25-4-2011)
    </p>
    <p>
        DTM is a tool I made for dungeoneering in Runescape.
        It's an interactive multiplayer map that you can use to keep track of where all the obstacles, doors, paths, etc. are in the current dungeon.
        I stopped developing it after I noticed it was too tedious and slowing to keep updating it while also completing a dungeon.
        I still think the idea behind the tool is awesome though =)
    </p>
    <p>
        My attempt at the same idea a few months before that can be downloaded <a href="<?=$baseUrl."gamemaker/dtm_36.exe"?>">here</a> (21-6-2010).
        This one failed because I used the built-in networking system, which did not work at all.
        I discovered that after I had been working on it for a long time though =S
    </p>
    <p>
        Beware the spamshockintro.
    </p>
    <p class="center">
        <img src="<?=$baseUrl."gamemaker/dtm2.png"?>" alt="Main menu" />
        <img src="<?=$baseUrl."gamemaker/dtm1.png"?>" alt="In dungeon" />
    </p>
</section>
