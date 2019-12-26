import * as React from 'react';
import RandomAction from 'components/common/RandomAction';
import avatarImage from 'assets/images/avatar.png';
import SteamIcon from 'assets/icons/steam.svg';
import DiscordIcon from 'assets/icons/discord.svg';
import GmailIcon from 'assets/icons/gmail.svg';
import YouTubeIcon from 'assets/icons/youtube.svg';
import GitHubIcon from 'assets/icons/github.svg';

export default () => (
    <section>
        <h1>Welcome to my website</h1>
        <p>
            <img src={avatarImage} className="avatar" alt="Avatar" />
            Hi, I'm Villermen, I sometimes <RandomAction />.
        </p>
        <p>
            I enjoy solving complicated problems in whatever programming language I know. This page is pretty much a
            display
            of things I've created in my spare and not so spare time. Below is a display of some of the projects I've
            worked
            on that are actually worth mentioning.
        </p>
        <div className="contactlinks clear">
            <a className="contactlink gmail" href="mailto:villermen@gmail.com" title="Email">
                <GmailIcon />
            </a>
            <a className="contactlink github" href="https://github.com/villermen" title="GitHub">
                <GitHubIcon />
            </a>
            <span
                className="contactlink discord"
                title="Discord"
                onClick={() => window.prompt('Copy and add below Discord tag:', 'Villermen#6073')}>
                <DiscordIcon />
            </span>
            <a className="contactlink steam" href="http://steamcommunity.com/id/villermen" title="Steam">
                <SteamIcon />
            </a>
            <a className="contactlink youtube" href="https://www.youtube.com/user/villermen" title="YouTube">
                <YouTubeIcon />
            </a>
        </div>
    </section>
);
