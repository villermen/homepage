<?php $viller->title = "Ti-Basic"; ?>

<section>
    <h1>TI-Basic</h1>
    <img src='<?php echo $viller->GetUrl("tibasic/calculator.png"); ?>' alt='TI-84 Plus graphing calculator' style='float:right;' />
    These are all the programs I created at school on my TI-84 plus graphing calculator.<br />
    The built-in TI-Basic language is, as the name suggests, pretty basic and limited.<br />
    Still I managed to create some slow but proper programs with it.<br />
    If you want to have get the programs on your calculator you should have <a href='http://education.ti.com/educationportal/sites/US/productDetail/us_ti_connect.html'>TI-Connect</a> and you must understand how to send files to and from your calculator.<br />
    All files can be run without using Mirage (if you have no idea what that is don't worry).<br />
    Also, since I made them on and for school they are meant for use in the Netherlands.<br />
    e.g. Omniklok is using dutch as display language.
    <div class='clear'></div>
</section>

<section>
    <h2>Omniklok</h2>

    <div class='center'>
        <a href='<?php echo $viller->GetUrl("tibasic/OMNIKLOK.8xg"); ?>'>Download group (.8xg)</a><br />
        (contains program + load screen &amp; credits screen)<br />
        (20-12-2011)
    </div>
    <br />
    Omniklok is a clock for your graphing calculator that also gives you information about the class you have at that moment.<br />
    The program counts down till the end of your class and tells you which hour it currently is.<br />
    It also shows you which class you have, if you've set that, and in which classroom it is.<br />
    If you turn on this mode it will however lag more due to the limitations of TI-Basic.<br />
    Date and time can be set from within the program.<br />
    Screentext is in dutch, and times are also, so it wouldn't be wise to use this if you aren't from the Netherlands itself.<br />
    <br />
    <div class='center'>
        The controls are as follows:<br />
        ENTER: Options<br />
        1/2: Digital/analog<br />
        4/5: 40/50-Minute timetable<br />
        7: Classes on/off<br />
        <br />
        <img src='<?php echo $viller->GetUrl("tibasic/omniklok1.png"); ?>' alt='Loading screen' />
        <img src='<?php echo $viller->GetUrl("tibasic/omniklok2.png"); ?>' alt='Digital display' />
        <img src='<?php echo $viller->GetUrl("tibasic/omniklok3.png"); ?>' alt='Analog display' />
    </div>
</section>

<section>
    <h2>Mastermind</h2>

    <div class='center'>
        <a href='<?php echo $viller->GetUrl("tibasic/MSTRMND.8xp"); ?>'>Download program (.8xp)</a><br />
        (20-12-2011)
    </div>
    <br />
    A simplistic approach to mastermind.<br />
    You have 8 turns to guess a 4-digit combination consisting of the numbers 1 to 6.<br />
    When a digit is entered in at the right place, a O will apear on the right of it.<br />
    The right digit at the wrong place will make a / appear.<br />
    Guess the right combination within 8 turns to win the game.<br />
    <br />
    There is a bug that sometimes causes the program to display too many /'s.<br />
    I won't fix that because that would take too long, and it will probably double the amount of code.<br />
    <br />
    <div class='center'>
        <img src='<?php echo $viller->GetUrl("tibasic/mstrmnd1.png"); ?>' alt='In-game' />
    </div>
</section>

<section>
    <h2>Yahtzee</h2>

    <div class='center'>
        <a href='<?php echo $viller->GetUrl("tibasic/YAHTZEE.8xp"); ?>'>Download program (.8xp)</a>
    </div>
    <br />
    A small tool which replaces real life dice and gives you a list of possible scores for a game of yahtzee.<br />
    <br />
    <div class='center'>
        <img src='<?php echo $viller->GetUrl("tibasic/yahtzee1.png"); ?>' alt='In-game' />
    </div>
</section>

<section>
    <h2>Connect four</h2>

    <div class='center'>
        <a href='<?php echo $viller->GetUrl("tibasic/FOUR.8xp"); ?>'>Download program (.8xp)</a>
    </div>
    <br />
    In connect four you try to get 4 of your boxes connected in all directions.<br />
    It is just a replacement for the on-paper version.<br />
    It does not have a CPU enemy or any win-detection at all, because I was too lazy to code that.<br />
    <br />
    <div class='center'>
        <img src='<?php echo $viller->GetUrl("tibasic/four1.png"); ?>' alt='In-game' />
    </div>
</section>

<section>
    <h2>Freemove</h2>

    <div class='center'>
        <a href='<?php echo $viller->GetUrl("tibasic/FREEMOVE.8xp"); ?>'>Download program (.8xp)</a>
    </div>
    <br />
    A screensaver-like program with 4 diagonally moving lines.<br />
    They change the color of the pixel they pass over.<br />
    Press ENTER to let them turn 90 degrees.<br />
    That is basically it, it was just a thing to deal with the time.<br />
    <br />
    <div class='center'>
        <img src='<?php echo $viller->GetUrl("tibasic/freemove1.png"); ?>' alt='In-screensaver' />
    </div>
</section>

<section>
    <h2>Avoider</h2>

    <div class='center'>
        <a href='<?php echo $viller->GetUrl("tibasic/AVOIDER.8xp"); ?>'>Download program (.8xp)</a>
    </div>
    <br />
    A really basic and not at all challenging game where you have to avoid evil VV's of DOOM falling from the top of the screen for an unknown reason.<br />
    <br />
    <div class='center'>
        <img src='<?php echo $viller->GetUrl("tibasic/avoider1.png"); ?>' alt='In-game' />
    </div>
</section>
