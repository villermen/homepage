<?php

$viller->title = "Villermen's homepage";

$viller->afterContent .= "<script src='" . $viller->GetUrl("jquery-3.2.1.min.js") . "'></script>";
$viller->afterContent .= "<script src='" . $viller->GetUrl("masonry-4.2.0.min.js") . "'></script>";
$viller->afterContent .= "<script src='" . $viller->GetUrl("index.js") . "'></script>";

function GetProjectButton($class, $href, $bgImage, $title)
{
    echo "<a class='project-button {$class}' href='{$href}' title='{$title}'><img class='project-image' src='{$bgImage}' alt='{$title}' /></a>";
}

$randomAction = [
    "create things", //generic
    "fly a jetpack", //mc ftb
    "walk in circles", //generic
    "return to freaking sender", //tf2 scout
    "goof around", //generic
    "think in code", //generic
    "<span style='font-family:\"comic sans ms\";'>type in Comic Sans</span>", //generic
    "google urls", //generic
    "remember my purpose", //rs quest the world wakes
    "resist symmetry", //mc zisteau
    "belong in a museum", //lol ezreal
    "defeat clunk bot", //awesomenauts
    "pray at an alter", //rs dungeoneering
    "miss a day in tactical school", //AI war
    "randomize strings", //meta
    "press the any key", //games' startup screens
    "skate cheaply", //cheapskate
    "force cookies down your throat", //cookie bs rules
    "judge a book by its cover",
    "run out of problems to fix", //todo lists
    "solo Blink", //rs dung
    "stay radiated", //leadtolive
    "melee a room full of rangers and mages", //rs dung
    "tweak to perfection",
    "forget how the sun feels", //rogue legacy
    "so doge, much wow",
    "disable free will", //the sims/irl
    "reinvent the wheel",
    "do things myself",
    "fail to save Curly", //Cave Story
    "combust spontaneously",
    "overachieve", //rs mainly
    "duck and cover", //nukes n shit
    "get fed",
    "close a tab that I still need",
    "locate Frankenstein's brain",
    "edit in post",
    "enhance licence plates", //CSI
    "melt to Morgan Freeman",
    "reconcile",
    "choose poontah",
    "listen to the rap music", //bill cosby
    "!!", //pokemon fishing
    "act awkwardly social",
    "keep seeding", //torrents
    "win the game", //you have to win the game
    "paint the lines", //amnesia pt. 1
    "cut the flesh", //amnesia pt. 2
    "hear stock sounds",
    "hit the paywall",
    "run with scissors",
    "kill all the mutants", //x-men
    "use lime on black",
    "kill the moment",
    "cut to black",
    "put a smile on your face", //dark knight
    "reject your reality", //mythbusters
    "vanish into thin air",
    "stick to the plan",
    "use more gun", //meet the engineer
    "buy two tickets to the gunshow", //demoman
    "procedurally generate",
    "prepare for trouble", //pokemon pt. 1
    "make it double", //pokemon pt. 2
    "fall into plotholes",
    "make life take the lemons back", //portal 2
    "get lost in translation",
    "learn by doing",
    "spruce the place up", //minecraft
    "get used by NASA", //avatar
    "get motivated by something else than score",
    "cannot into space", //polandball
    "appear random",
    "get dangerous", //darkwing duck
    "diversify my portfolio", //stocks
    "go dark", //army I guess
    "go waay back", //ts
    "feel the cosmos", //katamari damacy
    "want fries with that",
    "take things out of context",
    "may contain traces of nuts", //allergy warning
    "press space to win", //super press space to win action rpg 2009
    "juggle types", //php and other weakly-typed programming langauges
    "mangled in translation the google",
    "meet all standards", //undertale
    "flip the switch",
    "solve practical problems", //tf2 engineer
    "+forward; +attack;", //tf2 W+M1
    "trust keyboards",
    "apply logic to real life",
    "experience unscripted events",
    "defy categorization", //agent carter
    "know when to quit",
    "step into the tall grass", //pokemon
];

$randomAction = $randomAction[mt_rand(0, count($randomAction) - 1)];

?>

<section id='profile'>
    <h1>Welcome to my website</h1>

    <img class='avatar' src='<?php echo $viller->GetUrl("img/avatar.png"); ?>' alt='Avatar' />

    Hi, I'm Villermen, I sometimes <?php echo $randomAction; ?>.<br />
    <br />
    I enjoy solving complicated problems in whatever programming language I know.
    This page is pretty much a display of things I've created in my spare and not so spare time.
    Below is a display of some of the projects I've worked on that are actually worth mentioning.

    <!-- iconset by Dan Leech, https://simpleicons.org/ -->
    <div class='contactlinks clear'>
        <a class='contactlink steam' href='http://steamcommunity.com/id/villermen' title='Steam'></a>
        <a class='contactlink gmail' href='mailto:villermen@gmail.com' title='Email'></a>
        <a class='contactlink youtube' href='https://www.youtube.com/user/villermen' title='YouTube'></a>
        <a class='contactlink github' href='https://github.com/villermen' title='GitHub'></a>
    </div>
</section>

<section id="info">
    <div class="clock center info-section"></div>

    <div id="ip" class="center info-section">
        Your IP: <?php echo $_SERVER["REMOTE_ADDR"]; ?>
    </div>
</section>

<main class='section'>
    <h3>Projects that <em>probably</em> still work</h3>
    <div class='project-buttons'>
        <?php

        echo GetProjectButton("vertical", "/browser/", $viller->GetUrl("img/filebrowser.png"), "File browser");
        echo GetProjectButton("vertical", "/leadtolive/", $viller->GetUrl("img/leadtolive.png"), "Lead to Live");
        echo GetProjectButton("horizontal", "/rslookup/", $viller->GetUrl("img/rslookup.png"), "Runescape player lookup");
        echo GetProjectButton("small", "/soundboard/", $viller->GetUrl("img/soundboard.png"), "Soundboard");
        echo GetProjectButton("small", $viller->GetUrl("tibasic"), $viller->GetUrl("img/tibasic.png"), "TI-Basic");
        echo GetProjectButton("small", $viller->GetUrl("gamemaker"), $viller->GetUrl("img/gamemaker.png"), "Gamemaker 7");
        echo GetProjectButton("small", "/isitteamtimeyet/", $viller->GetUrl("img/isitteamtimeyet.png"), "Is it team time yet?");

        ?>
        <div class="clear"></div>
    </div>
</main>

<section>
    <h3>Project archive</h3>
    <div class='project-buttons'>
        <?php

        echo GetProjectButton("large", "/minecraft/", $viller->GetUrl("img/minecraft.png"), "Minecraft server");
        echo GetProjectButton("horizontal", "/toxic/", $viller->GetUrl("img/toxic.png"), "Toxic clansite");
        echo GetProjectButton("vertical", "/vapor/", $viller->GetUrl("img/vapor.png"), "Vapor homepage");
        echo GetProjectButton("small", "/omnicash/", $viller->GetUrl("img/omnicash.png"), "Omnicash");

        ?>
        <div class="clear"></div>
    </div>
</section>
