import DiscordIcon from 'assets/icons/discord.svg';
import GitHubIcon from 'assets/icons/github.svg';
import GmailIcon from 'assets/icons/gmail.svg';
import SteamIcon from 'assets/icons/steam.svg';
import YouTubeIcon from 'assets/icons/youtube.svg';
import avatarImage from 'assets/images/avatar.png';
import {RandomAction} from 'components/common/RandomAction';
import React from 'react';

export default () => (
    <section>
        <p>
            <img src={avatarImage} className="avatar" alt="Avatar" />
            Hi, I'm Villermen, I sometimes <RandomAction />.
        </p>
        <p>
            I enjoy solving complicated problems in whatever programming language I know. Listed below are some of the
            projects I've worked on in my spare, and sometimes less spare, time.
        </p>
        <div className="contactlinks clear">
            <a className="contactlink" href="mailto:villermen@gmail.com" title="Email">
                <GmailIcon />
            </a>
            <a className="contactlink" href="https://github.com/villermen" title="GitHub">
                <GitHubIcon />
            </a>
            <a className="contactlink" href="https://discord.com/users/145263433883844609" title="Discord">
                <DiscordIcon />
            </a>
            <a className="contactlink" href="https://steamcommunity.com/id/villermen" title="Steam">
                <SteamIcon />
            </a>
            <a className="contactlink youtube" href="https://www.youtube.com/user/villermen" title="YouTube">
                <YouTubeIcon />
            </a>
        </div>
    </section>
);
