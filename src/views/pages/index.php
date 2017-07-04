<?php
    /** @var \Symfony\Component\Templating\PhpEngine $view */

    $view->extend("layout");

    $view["slots"]->set("title", "Villermen's homepage");

    $view["slots"]->start("scripts");
?>
    <script src="<?=$baseUrl."scripts/jquery-3.2.1.min.js"?>"></script>
    <script src="<?=$baseUrl."scripts/masonry-4.2.0.min.js"?>"></script>
    <script src="<?=$baseUrl."scripts/index.js"?>"></script>
<?php
    $view["slots"]->stop();
?>

<section>
    <h1>Welcome to my website</h1>

    <p>
        <img class="avatar" src="<?=$baseUrl."images/avatar.png"?>" alt="Avatar" />

        Hi, I'm Villermen, I sometimes <?=$view->render("random-action")?>.
    </p>
    <p>
        I enjoy solving complicated problems in whatever programming language I know.
        This page is pretty much a display of things I've created in my spare and not so spare time.
        Below is a display of some of the projects I've worked on that are actually worth mentioning.
    </p>

    <!-- Iconset by Dan Leech, https://simpleicons.org/ -->
    <div class="contactlinks clear">
        <a class="contactlink steam" href="http://steamcommunity.com/id/villermen" title="Steam">
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M7.986 0C3.784 0 .34 3.24.014 7.358L4.302 9.13c.363-.247.802-.393 1.274-.393.042 0 .084.002.126.004L7.61 5.98v-.04c0-1.663 1.352-3.016 3.016-3.016 1.663 0 3.017 1.354 3.017 3.018 0 1.664-1.354 3.017-3.017 3.017h-.07L7.838 10.9c0 .034.003.07.003.106 0 1.25-1.01 2.264-2.26 2.264-1.09 0-2.01-.782-2.22-1.818L.29 10.18C1.24 13.538 4.323 16 7.985 16c4.418 0 8-3.582 8-8s-3.582-8-8-8zm-2.96 12.14l-.982-.407c.175.362.476.666.876.833.865.36 1.862-.05 2.222-.916.175-.42.176-.88.003-1.3-.173-.42-.5-.747-.918-.922-.416-.173-.86-.166-1.252-.02l1.015.42c.638.267.94 1 .673 1.637-.265.638-.998.94-1.636.674zm7.61-6.202c0-1.108-.902-2.01-2.01-2.01-1.11 0-2.01.902-2.01 2.01 0 1.11.9 2.01 2.01 2.01 1.108 0 2.01-.9 2.01-2.01zM9.12 5.935c0-.835.675-1.51 1.51-1.51.833 0 1.51.675 1.51 1.51 0 .834-.677 1.51-1.51 1.51-.835 0-1.51-.676-1.51-1.51z"/></svg>
        </a>
        <a class="contactlink gmail" href="mailto:villermen@gmail.com" title="Email">
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M16 3v10c0 .567-.433 1-1 1h-1V4.925L8 9.233 2 4.925V14H1c-.567 0-1-.433-1-1V3c0-.283.108-.533.287-.712C.467 2.107.718 2 1 2h.333L8 6.833 14.667 2H15c.283 0 .533.108.713.288.179.179.287.429.287.712z" fill-rule="evenodd"/></svg>
        </a>
        <a class="contactlink youtube" href="https://www.youtube.com/user/villermen" title="YouTube">
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M0 7.345c0-1.294.16-2.59.16-2.59s.156-1.1.636-1.587c.608-.637 1.408-.617 1.764-.684C3.84 2.36 8 2.324 8 2.324s3.362.004 5.6.166c.314.038.996.04 1.604.678.48.486.636 1.588.636 1.588S16 6.05 16 7.346v1.258c0 1.296-.16 2.59-.16 2.59s-.156 1.102-.636 1.588c-.608.638-1.29.64-1.604.678-2.238.162-5.6.166-5.6.166s-4.16-.037-5.44-.16c-.356-.067-1.156-.047-1.764-.684-.48-.487-.636-1.587-.636-1.587S0 9.9 0 8.605v-1.26zm6.348 2.73V5.58l4.323 2.255-4.32 2.24z"/></svg>
        </a>
        <a class="contactlink github" href="https://github.com/villermen" title="GitHub">
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8"/></svg>
        </a>
    </div>
</section>

<section>
    <p class="clock center"></p>

    <p class="ip center">
        Your IP: <?=$_SERVER["REMOTE_ADDR"]?>
    </p>
</section>

<section>
    <h3>Projects that <em>probably</em> still work</h3>

    <?php
        echo $view->render("project-buttons", [
            "buttonData" => [
                ["File browser", "vertical", "/browser/", "filebrowser.png"],
                ["Lead to Live", "vertical", "/leadtolive/", "leadtolive.png"],
                ["RuneScape player lookup", "horizontal", "/rslookup/", "rslookup.png"],
                ["Soundboard", "small", "/soundboard/", "soundboard.png"],
                ["TI-Basic", "small", $baseUrl."tibasic/", "tibasic.png"],
                ["Gamemaker 7", "small", $baseUrl."gamemaker/", "gamemaker.png"],
                ["Is it team time yet?", "small", "/isitteamtimeyet/", "isitteamtimeyet.png"],
            ]
        ]);
    ?>
</section>

<section>
    <h3>Project archive</h3>

    <?php
        echo $view->render("project-buttons", [
            "buttonData" => [
                ["Minecraft server", "large", "/minecraft/", "minecraft.png"],
                ["Toxic clansite", "horizontal", "/toxic/", "toxic.png"],
                ["Vapor homepage", "vertical", "/vapor/", "vapor.png"],
                ["Omnicash", "small", "/omnicash/", "omnicash.png"],
            ]
        ]);
    ?>
</section>
