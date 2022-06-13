import React from "react";
import { format } from "date-fns";
import Image from "next/image";
import {
  BG,
  CHSHBR,
  Coordinates,
  DockMap,
  Heading,
  LetterCard,
  Signature,
  Stencil,
  SubHeading,
  WelcomeCardBase,
  WelcomeCardContent,
  Frame,
} from "./ConfirmationEmail.styles";

export type ConfirmationEmailProps = {
  dateTime: Date;
};

export const ConfirmationEmail: React.FC<ConfirmationEmailProps> = ({
  dateTime,
}) => {
  const [date, time] = format(dateTime, "MMMM do, yyyy|h").split("|");
  const timeRange = `${time}:00 - ${parseInt(time) + 3}:00`;
  return (
    <>
      <BG>
        <tr>
          <Frame>
            <header>
              <Heading>EVERYTHING ZEN</Heading>
              <SubHeading>
                <h2>SAILING CHARTERS</h2>
                <span>|</span>
                <h2>CHARLESTON, SOUTH CAROLINA</h2>
              </SubHeading>
            </header>
            <WelcomeCardBase>
              <WelcomeCardContent>
                <h3>WELCOME ABOARD</h3>
                <h4>We are thrilled to have you on board Everything Zen!</h4>
                <h4>
                  You are scheduled for{" "}
                  <strong>
                    {date} from {timeRange}
                  </strong>
                </h4>
                <h5>We ask that cancelations be made 24 hours in advance</h5>
              </WelcomeCardContent>
            </WelcomeCardBase>
            <LetterCard>
              <CHSHBR src="/chshbr.png" height="33px" />
              <p>We are located at Charleston Harbor Marina</p>
              <p>
                Park near the Charleston Harbor Fish House and head out to the
                docks. We are docked on the last dock down to your right, “K”
                dock, between the USS Yorktown and Clamagore Submarine.
              </p>
              <DockMap>
                <Image src="/dockmap.jpg" width="294px" height="294px" />
              </DockMap>
              <p>
                We ask our charter guests to wear casual attire with easy off
                shoes. Barefoot boat experiences are the best for you and for
                the boat. Please bring food and drinks of your choice. We have
                ample refrigeration space, ice and water, tableware, glasses,
                and a microwave available.
              </p>
              <p>
                Our yacht’s sound system offers the ability to connect your
                phone, giving you power over music selection for your special
                day.
              </p>
              <p>Get ready for relaxation!</p>
              <Signature>CAPTAIN TODD</Signature>
              <footer>
                <section>
                  Everything Zen Sailing Charters
                  <br />
                  todd@ezsailingcharters.com
                  <br />
                  843-670-9145
                </section>
                <section>
                  Charleston Harbor Marina,
                  <br />
                  Patriots Point 24 Patriots Point Rd
                  <br />
                  Mt Pleasant, SC
                </section>
              </footer>
            </LetterCard>
            <Stencil>CHARLESTON, SOUTH CAROLINA</Stencil>
            <Coordinates>
              <Stencil>32.77’65’’ N </Stencil>
              <Stencil> 77.93’11’’ W</Stencil>
            </Coordinates>
          </Frame>
        </tr>
      </BG>
    </>
  );
};
