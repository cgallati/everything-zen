type ConfirmationEmailProps = {
  date: string;
  timeRange: string;
};

export const getConfirmationEmailHTMLString = ({
  date,
  timeRange,
}: ConfirmationEmailProps): string => {
  return `
  <!DOCTYPE html>
<html style='font-family: Source Sans Pro,sans-serif;'>
<head>
  <meta content='text/html; charset=utf-8' http-equiv='Content-Type'>
  <link href='https://ezsailingcharters.netlify.app/wave.svg' rel='icon' type='image/svg+xml'>
  <link href='https://ezsailingcharters.netlify.app/favicon.ico' rel='alternate icon'>
  <link href='https://fonts.gstatic.com' rel='preconnect'>
  <meta charset='utf-8'>
  <meta content='width=device-width' name='viewport'>
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap');

  @font-face {
      font-family: Title Wave Regular;
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local("Title Wave Regular"), url('https://ezsailingcharters.netlify.app/fonts/titlewv.ttf') format("truetype");
  }
  @font-face {
      font-family: Source Sans Pro;
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local("Source Sans Pro"), url('https://ezsailingcharters.netlify.app/fonts/SourceSansPro-Regular.ttf') format("truetype");
  }

  @font-face {
      font-family: Source Sans Pro;
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: local("Source Sans Pro"), url('https://ezsailingcharters.netlify.app/fonts/SourceSansPro-Light.ttf') format("truetype");
  }

  @font-face {
      font-family: Stencilia-A;
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local("Stencilia-A"), url('https://ezsailingcharters.netlify.app/fonts/Stencilia-A.ttf') format("truetype");
  }

  body {
      margin: 0;
  }
  </style>
</head>
<body style='margin: 1rem; background-color: white'>
<!--<div style='background-color: white; wi'>-->
<table style="bgcolor=#fff; background-color: white; width: 500px;" class='ConfirmationEmailstyles__G-sc-1ckg3y-0 cAgQdd'>
  <div>
    <h1 align='center'
        class='ConfirmationEmailstyles__Heading-sc-1ckg3y-1 dtRY'
        style="-webkit-letter-spacing: 3.66px; -moz-letter-spacing: 3.66px; -ms-letter-spacing: 3.66px; letter-spacing: 3.66px; color: #001d2c; margin: 2.2rem 0 0; font: 24px/28px 'Title Wave Regular', serif;"
    >
      EVERYTHING ZEN
    </h1>
    <div class='ConfirmationEmailstyles__SubHeading-sc-1ckg3y-2 GYFYC'
          style='display: flex; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-transform: translateX(-2px); -ms-transform: translateX(-2px); transform: translateX(-2px); width: 100%; margin: .5rem auto 2rem auto;'><h2
      style='-webkit-letter-spacing: 1.34px; -moz-letter-spacing: 1.34px; -ms-letter-spacing: 1.34px; letter-spacing: 1.34px; color: #001d2c; margin: 0; font: 9px/11px "Source Sans Pro", Arial; white-space: nowrap;'>SAILING CHARTERS</h2>
  <span
    style='-webkit-letter-spacing: 1.34px; -moz-letter-spacing: 1.34px; -ms-letter-spacing: 1.34px; letter-spacing: 1.34px; color: #001d2c; margin: 0 0.4rem; font: 9px/11px "Source Sans Pro", Arial;'>|</span><h2
        style='-webkit-letter-spacing: 1.34px; -moz-letter-spacing: 1.34px; -ms-letter-spacing: 1.34px; letter-spacing: 1.34px; color: #001d2c; margin: 0; font: 9px/11px "Source Sans Pro", Arial; white-space: nowrap;'>CHARLESTON, SOUTH CAROLINA</h2></div>
  </div>
  <div
    class='ConfirmationEmailstyles__Card-sc-1ckg3y-3 ConfirmationEmailstyles__WelcomeCardase-sc-1ckg3y-4 etcnMf kLbrnr'
    style='box-sizing: border-box; max-width: 500px; border-radius: 3px; background-color: #00263a; margin: 0rem auto 0.8rem; padding: 1.8rem;'>
    <div
      align='center'
      class='ConfirmationEmailstyles__Card-sc-1ckg3y-3 ConfirmationEmailstyles__WelcomeCardContent-sc-1ckg3y- etcnMf ggsGVm'
      style='box-sizing: border-box; max-width: 500px; border-radius: 3px; background-color: white; margin: 0rem auto; padding: 1rem'>
      <h3
        style='-webkit-letter-spacing: 3.2px; -moz-letter-spacing: 3.2px; -ms-letter-spacing: 3.2px; letter-spacing: 3.2px; color: #001d2c; margin: 0 0 1rem; font: 16px/19px "Source Sans Pro", Courier;'>
        WELCOME ABOARD</h3>
      <h4
        style='-webkit-letter-spacing: 1.1px; -moz-letter-spacing: 1.1px; -ms-letter-spacing: 1.1px; letter-spacing: 1.1px; color: #001d2c; margin: 1.2rem 0; font: 11px/13px "Source Sans Pro", Courier;'>
        We are thrilled to have you on board Everything Zen!</h4>
      <h4
        style='-webkit-letter-spacing: 1.1px; -moz-letter-spacing: 1.1px; -ms-letter-spacing: 1.1px; letter-spacing: 1.1px; color: #001d2c; margin: 1.2rem 0; font: 11px/13px "Source Sans Pro", Courier;'>
        You are scheduled for<strong
        style='-webkit-letter-spacing: 0.8px; -moz-letter-spacing: 0.8px; -ms-letter-spacing: 0.8px; letter-spacing: 0.8px;'>
        ${date} from ${timeRange}</strong>
      </h4>
      <h5
        style='-webkit-letter-spacing: 0.92px; -moz-letter-spacing: 0.92px; -ms-letter-spacing: 0.92px; letter-spacing: 0.92px; color: #001d2c; margin: 1.2rem 0 0; font: 10px/13px "Source Sans Pro", Courier;'>
        We ask that cancelations be made 48 hours in advance
      </h5>
    </div>
  </div>
  <div
    class='ConfirmationEmailstyles__Card-sc-1ckg3y-3 ConfirmationEmailstyles__LetterCard-sc-1ckg3y-6 etcnMf gajNA'
    style='box-sizing: border-box; max-width: 500px; border-radius: 3px; background-color: white; margin: 0rem auto 2rem; padding: 2rem 2rem;'>
    <img align='right' class='ConfirmationEmailstyles__CHSHR-sc-1ckg3y-8 hespiI'
         height='33px'
         width='33px'
         src='https://ezsailingcharters.netlify.app/chshbr.png'
         style='position: relative; top: .5rem; z-index: 1; height=33px;'>
    <p
      style='-webkit-letter-spacing: 1.2px; -moz-letter-spacing: 1.2px; -ms-letter-spacing: 1.2px; letter-spacing: 1.2px; color: #001d2c; margin: 1rem 0 2rem; font: 12px/14px "Source Sans Pro", Courier;'>
      We are located at Charleston Harbor Marina.</p>
    <p
      style='-webkit-letter-spacing: 1.2px; -moz-letter-spacing: 1.2px; -ms-letter-spacing: 1.2px; letter-spacing: 1.2px; color: #001d2c; margin: 1rem 0 2rem; font: 12px/14px "Source Sans Pro", Courier;'>
      Park near the Charleston Harbor Fish House and head out to the docks. We are docked on the last dock down to
      your right, “K” dock, between the USS Yorktown and Clamagore Submarine.</p>
      <a href=https://maps.apple.com/?address=32°47'18.5"N+79°54'34.5"W>
    <div class='ConfirmationEmailstyles__ockMap-sc-1ckg3y- bntvhM'
         style='border-radius: 3px; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; margin: 2rem 0'>
      <div
        style='display: inline-block; max-width: 300px; overflow: hidden; position: relative; box-sizing: border-box; border-radius: 3px; margin: 0;'>
        <div style='box-sizing: border-box; display: block; width: 300px;'><img
          alt='' aria-hidden='true' role='presentation'
          src='https://ezsailingcharters.netlify.app/dockmap.jpg' style='width: 300px; display: block; margin: 0; padding: 0; border: none;'></div>
      </div>
    </div>
    </a>
    <p
      style='-webkit-letter-spacing: 1.2px; -moz-letter-spacing: 1.2px; -ms-letter-spacing: 1.2px; letter-spacing: 1.2px; color: #001d2c; margin: 1rem 0 2rem; font: 12px/14px "Source Sans Pro", Courier;'>
      We ask our charter guests to wear casual attire with soft soled boat shoes or shoes don't mind taking off. Barefoot boat experiences are the best for
      you and for the boat. Please bring food and drinks of your choice. We have ample refrigeration space, ice and
      water, tableware, glasses, and a microwave available.</p>
    <p
      style='-webkit-letter-spacing: 1.2px; -moz-letter-spacing: 1.2px; -ms-letter-spacing: 1.2px; letter-spacing: 1.2px; color: #001d2c; margin: 1rem 0 2rem; font: 12px/14px "Source Sans Pro", Courier;'>
      Our yacht’s sound system offers the ability to connect your phone, giving you power over music selection for
      your special day.</p>
      <p
      <p
      style='-webkit-letter-spacing: 1.2px; -moz-letter-spacing: 1.2px; -ms-letter-spacing: 1.2px; letter-spacing: 1.2px; color: #001d2c; margin: 1rem 0 2rem; font: 12px/14px "Source Sans Pro", Courier;'>
            Payment is accepted at the end of your charter. We accept Venmo, Apple Pay, Zelle, Cash App, credit cards, cash and check.
    </p>
    <p
      style='-webkit-letter-spacing: 1.2px; -moz-letter-spacing: 1.2px; -ms-letter-spacing: 1.2px; letter-spacing: 1.2px; color: #001d2c; margin: 1rem 0 2rem; font: 12px/14px "Source Sans Pro", Courier;'>
      We will text you further information and the exact boat location 24 hours before our sail.</p>
      <p
      style='-webkit-letter-spacing: 1.2px; -moz-letter-spacing: 1.2px; -ms-letter-spacing: 1.2px; letter-spacing: 1.2px; color: #001d2c; margin: 1rem 0 2rem; font: 12px/14px "Source Sans Pro", Courier;'>
      Sails up!</p>
    <h6 class='ConfirmationEmailstyles__Signature-sc-1ckg3y-9 dGejQF'
        style="-webkit-letter-spacing: 1.2px; -moz-letter-spacing: 1.2px; -ms-letter-spacing: 1.2px; letter-spacing: 1.2px; font-family: 'Title Wave Regular',serif; color: #001d2c; font-size: 14px; line-height: 16px;">
      CAPTAIN TODD</h6>
    <div
      style='display: flex; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-letter-spacing: 0.8px; -moz-letter-spacing: 0.8px; -ms-letter-spacing: 0.8px; letter-spacing: 0.8px; color: #001d2c; font: 10px/12px "Source Sans Pro", Courier;'>
      <div style='flex-wrap: nowrap'>Everything Zen Sailing Charters<br>todd@ezsailingcharters.com<br>843-670-9145</div>
      <div>Charleston Harbor Marina,<br>24 Patriots Point Rd<br>Mt Pleasant, SC</div>
    </div>
  </div>
</table>
</body>
</html>

`;
};

export const getConfirmationEmailText = ({
  date,
  timeRange,
}: ConfirmationEmailProps): string => {
  return `
**************
EVERYTHING ZEN
**************

--------------------------------------------
SAILING CHARTERS| CHARLESTON, SOUTH CAROLINA
--------------------------------------------


WELCOME ABOARD
--------------

We are thrilled to have you on board Everything Zen!
----------------------------------------------------

You are scheduled for ${date} from ${timeRange}
------------------------------------------------------

We ask that cancellations be made 48 hours in advance.
----------------------------------------------------

We are located at Charleston Harbor Marina.

Park near the Charleston Harbor Fish House and head out to the
docks. We are docked on the last dock down to your right, “K”
dock, between the USS Yorktown and Clamagore Submarine.

We ask our charter guests to wear casual attire with soft soled
boat shoes or shoes don't mind taking off. Barefoot boat experiences
are the best for you and for the boat. Please bring food and
drinks of your choice. We have ample refrigeration space, ice and
water, tableware, glasses, and a microwave available.

Our yacht’s sound system offers the ability to connect your
phone, giving you power over music selection for your special
day.

Payment is accepted at the end of your charter. We accept
Venmo, Apple Pay, Zelle, Cash App, credit cards, cash and check.

We will text you further information and the exact boat location
24 hours before our sail.

Get ready for relaxation!

Sails up!
CAPTAIN TODD
------------

Everything Zen Sailing Charters
todd@ezsailingcharters.com
843-670-9145

Charleston Harbor Marina
24 Patriots Point Rd
Mt Pleasant, SC

`;
};
