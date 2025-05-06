import avoiderDownload from 'assets/downloads/tibasic/AVOIDER.8xp';
import fourDownload from 'assets/downloads/tibasic/FOUR.8xp';
import freemoveDownload from 'assets/downloads/tibasic/FREEMOVE.8xp';
import mastermindDownload from 'assets/downloads/tibasic/MSTRMND.8xp';
import omniklokDownload from 'assets/downloads/tibasic/OMNIKLOK.8xg';
import yahtzeeDownload from 'assets/downloads/tibasic/YAHTZEE.8xp';
import avoiderImage from 'assets/images/tibasic/avoider.png';
import calculatorImage from 'assets/images/tibasic/calculator.png';
import fourImage from 'assets/images/tibasic/four.png';
import freemoveImage from 'assets/images/tibasic/freemove.png';
import mastermindImage from 'assets/images/tibasic/mastermind.png';
import omniklokImage1 from 'assets/images/tibasic/omniklok1.png';
import omniklokImage2 from 'assets/images/tibasic/omniklok2.png';
import omniklokImage3 from 'assets/images/tibasic/omniklok3.png';
import yahtzeeImage from 'assets/images/tibasic/yahtzee.png';
import React from 'react';

export default () => (
    <>
        <section>
            <h1>TI-Basic</h1>
            <p>
                <img src={calculatorImage} alt="TI-84 Plus graphing calculator" style={{float: 'right'}} />
                These are all the programs I created at school on my TI-84 plus graphing calculator. The built-in
                TI-Basic language is, as the name suggests, pretty basic and limited. Still I managed to create some
                slow but proper programs with it. If you want to have get the programs on your calculator you should
                have <a href="https://education.ti.com/en/products/computer-software/ti-connect-sw">TI-Connect</a> and
                you must understand how to send files to and from your calculator. All files can be run without using
                Mirage (if you have no idea what that is don't worry). Also, since I made them on and for school they
                are meant for use in the Netherlands. E.g., Omniklok is using dutch as display language.
            </p>
            <div className="clear" />
        </section>
        <section>
            <h2>Omniklok</h2>
            <p className="center">
                <a href={omniklokDownload}>Download group (.8xg)</a><br />
                (contains program + load screen & credits screen)<br />
                (20-12-2011)
            </p>
            <p>
                Omniklok is a clock for your graphing calculator that also gives you information about the class you
                have at that moment. The program counts down till the end of your class and tells you which hour it
                currently is. It also shows you which class you have, if you've set that, and in which classroom it is.
                If you turn on this mode it will however lag more due to the limitations of TI-Basic. Date and time can
                be set from within the program. Screentext is in dutch, and times are also, so it wouldn't be wise to
                use this if you aren't from the Netherlands itself.
            </p>
            <p>
                The controls are:<br />
                ENTER: Options<br />
                1/2: Digital/analog<br />
                4/5: 40/50-Minute timetable<br />
                7: Classes on/off<br />
            </p>
            <p className="center">
                <img src={omniklokImage1} alt="Loading screen" />
                <img src={omniklokImage2} alt="Digital display" />
                <img src={omniklokImage3} alt="Analog display" />
            </p>
        </section>
        <section>
            <h2>Mastermind</h2>
            <p className="center">
                <a href={mastermindDownload}>Download program (.8xp)</a><br />
                (20-12-2011)
            </p>
            <p>
                A simplistic approach to mastermind. You have 8 turns to guess a 4-digit combination consisting of the
                numbers 1 to 6. When a digit is entered in at the right place, a O will apear on the right of it. The
                right digit at the wrong place will make a / appear. Guess the right combination within 8 turns to win
                the game.
            </p>
            <p>
                There is a bug that sometimes causes the program to display too many slashess. I won't fix that because
                that would take too long, and it will probably double the amount of code.
            </p>
            <p className="center">
                <img src={mastermindImage} alt="In-game" />
            </p>
        </section>
        <section>
            <h2>Yahtzee</h2>
            <p className="center">
                <a href={yahtzeeDownload}>Download program (.8xp)</a>
            </p>
            <p>
                A small tool which replaces real life dice and gives you a list of possible scores for a game of
                yahtzee.
            </p>
            <p className="center">
                <img src={yahtzeeImage} alt="In-game" />
            </p>
        </section>
        <section>
            <h2>Connect four</h2>
            <p className="center">
                <a href={fourDownload}>Download program (.8xp)</a>
            </p>
            <p>
                In connect four you try to get 4 of your boxes connected in all directions. It is just a replacement for
                the on-paper version. It does not have a CPU enemy or any win-detection at all, because I was too lazy
                to code that.
            </p>
            <p className="center">
                <img src={fourImage} alt="In-game" />
            </p>
        </section>
        <section>
            <h2>Freemove</h2>
            <p className="center">
                <a href={freemoveDownload}>Download program (.8xp)</a>
            </p>
            <p>
                A screensaver-like program with 4 diagonally moving lines. They change the color of the pixel they pass
                over. Press ENTER to let them turn 90 degrees. That is basically it, it was just a thing to deal with
                the time.
            </p>
            <div className="center">
                <img src={freemoveImage} alt="In-screensaver" />
            </div>
        </section>
        <section>
            <h2>Avoider</h2>
            <p className="center">
                <a href={avoiderDownload}>Download program (.8xp)</a>
            </p>
            <p>
                A really basic and not at all challenging game where you have to avoid evil VV's of DOOM falling from
                the top of the screen for an unknown reason.
            </p>
            <p className="center">
                <img src={avoiderImage} alt="In-game" />
            </p>
        </section>
    </>
);
