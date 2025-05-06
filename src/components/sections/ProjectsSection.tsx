import fileBrowserImage from 'assets/images/project-buttons/filebrowser.png';
import gameMakerImage from 'assets/images/project-buttons/gamemaker.png';
import isItTeamTimeYetImage from 'assets/images/project-buttons/isitteamtimeyet.png';
import leadToLiveImage from 'assets/images/project-buttons/leadtolive.png';
import minecraftImage from 'assets/images/project-buttons/minecraft.png';
import omnicashImage from 'assets/images/project-buttons/omnicash.png';
import rsLookupImage from 'assets/images/project-buttons/rslookup.png';
import soundboardImage from 'assets/images/project-buttons/soundboard.png';
import tiBasicImage from 'assets/images/project-buttons/tibasic.png';
import toolboxImage from 'assets/images/project-buttons/toolbox.png';
import toxicImage from 'assets/images/project-buttons/toxic.png';
import vaporImage from 'assets/images/project-buttons/vapor.png';
import {ProjectButton} from 'components/common/ProjectButton';
import {ProjectButtonContainer} from 'components/common/ProjectButtonContainer';
import React from 'react';

export default () => (
    <>
        <section>
            <ProjectButtonContainer>
                <ProjectButton
                    title="File browser"
                    type="vertical"
                    href="/browser/"
                    image={fileBrowserImage}
                />
                <ProjectButton
                    title="Lead to live"
                    type="vertical"
                    href="/leadtolive/"
                    image={leadToLiveImage}
                />
                <ProjectButton
                    title="Minecraft server"
                    type="large"
                    href="/minecraft/"
                    image={minecraftImage}
                />
                <ProjectButton
                    title="RuneScape player lookup"
                    type="horizontal"
                    href="/rslookup/"
                    image={rsLookupImage}
                />
                <ProjectButton
                    title="Soundboard"
                    type="vertical"
                    href="/soundboard/"
                    image={soundboardImage}
                />
                <ProjectButton
                    title="TI-Basic"
                    type="small"
                    href="/tibasic/"
                    image={tiBasicImage}
                    useRouter={true}
                />
                <ProjectButton
                    title="GameMaker 7"
                    type="small"
                    href="/gamemaker/"
                    image={gameMakerImage}
                    useRouter={true}
                />
                <ProjectButton
                    title="Toolbox"
                    type="horizontal"
                    href="https://nuijten.info/toolbox/"
                    image={toolboxImage}
                />
                <ProjectButton
                    title="Is it team time yet?"
                    type="small"
                    href="/isitteamtimeyet/"
                    image={isItTeamTimeYetImage}
                />
                <ProjectButton
                    title="Toxic clansite server"
                    type="horizontal"
                    href="/archive/toxic/"
                    image={toxicImage}
                />
                <ProjectButton
                    title="Vapor homepage"
                    type="vertical"
                    href="/archive/vapor/"
                    image={vaporImage}
                />
                <ProjectButton
                    title="Omnicash"
                    type="small"
                    href="/archive/omnicash/"
                    image={omnicashImage}
                />
            </ProjectButtonContainer>
        </section>
    </>
);
