import * as React from 'react';
import ProjectButton from 'components/common/ProjectButton';
import fileBrowserImage from 'assets/images/project-buttons/filebrowser.png';
import leadToLiveImage from 'assets/images/project-buttons/leadtolive.png';
import rsLookupImage from 'assets/images/project-buttons/rslookup.png';
import soundboardImage from 'assets/images/project-buttons/soundboard.png';
import tiBasicImage from 'assets/images/project-buttons/tibasic.png';
import gameMakerImage from 'assets/images/project-buttons/gamemaker.png';
import isItTeamTimeYetImage from 'assets/images/project-buttons/isitteamtimeyet.png';
import minecraftImage from 'assets/images/project-buttons/minecraft.png';
import toxicImage from 'assets/images/project-buttons/toxic.png';
import vaporImage from 'assets/images/project-buttons/vapor.png';
import omnicashImage from 'assets/images/project-buttons/omnicash.png';
import ProjectButtonContainer from 'components/common/ProjectButtonContainer';

export default () => (
    <>
        <section>
            <h3>Projects that <em>probably</em> still work</h3>
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
                    title="RuneScape player lookup"
                    type="horizontal"
                    href="/rslookup/"
                    image={rsLookupImage}
                />
                <ProjectButton
                    title="Soundboard"
                    type="small"
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
                    title="Is it team time yet?"
                    type="small"
                    href="/isitteamtimeyet/"
                    image={isItTeamTimeYetImage}
                />
            </ProjectButtonContainer>
        </section>
        <section>
            <h3>Project archive</h3>
            <ProjectButtonContainer>
                <ProjectButton
                    title="Minecraft server"
                    type="large"
                    href="/archive/minecraft/"
                    image={minecraftImage}
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
