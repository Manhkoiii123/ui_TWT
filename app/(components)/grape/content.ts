/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const apiData = {
  name: "John Doe",
  time: "September 7, 2022 at 10:58 AM",
  device: "Chrome on Mac OS X",
  location: "Upland, California, United States",
  ip: "47.149.53.167",
};

const globalStyles = `
  <style>
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      padding: 0;
       overflow: visible;
    }
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: inherit !important;
    }
    #MessageViewBody a {
      color: inherit;
      text-decoration: none;
    }
    p {
      line-height: inherit;
    }
    .desktop_hide,
    .desktop_hide table {
      mso-hide: all;
      display: none;
      max-height: 0px;
      overflow: hidden;
    }
    .image_block img+div {
      display: none;
    }
    sup,
    sub {
      font-size: 75%;
      line-height: 0;
    }
    @media (max-width:650px) {
      .desktop_hide table.icons-inner,
      .social_block.desktop_hide .social-table {
        display: inline-block !important;
      }
      .icons-inner {
        text-align: center;
      }
      .icons-inner td {
        margin: 0 auto;
      }
      .image_block div.fullWidth {
        max-width: 100% !important;
      }
      .mobile_hide {
        display: none;
      }
      .row-content {
        width: 100% !important;
      }
      .stack .column {
        width: 100%;
        display: block;
      }
      .mobile_hide {
        min-height: 0;
        max-height: 0;
        max-width: 0;
        overflow: hidden;
        font-size: 0px;
      }
      .desktop_hide,
      .desktop_hide table {
        display: table !important;
        max-height: none !important;
      }
    }
  </style>
`;
export const cardContentTemplate = {
  image:
    "https://a0.muscache.com/im/pictures/miso/Hosting-1110442652475031330/original/b6d87652-2a44-423c-8396-c81e6df23628.jpeg?im_w=720",
  name: "Apartament in Miami",
  star: 4.5,
  beds: 4,
  day: "24 jun - 5 jul",
  price: "100",
};
export const content = (data: any) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <link
      rel="preload"
      as="image"
      href="https://react-email-demo-lpdmf0ryo-resend.vercel.app/static/yelp-logo.png"
    />
    <link
      rel="preload"
      as="image"
      href="https://react-email-demo-lpdmf0ryo-resend.vercel.app/static/yelp-header.png"
    />
    <link
      rel="preload"
      as="image"
      href="https://react-email-demo-lpdmf0ryo-resend.vercel.app/static/yelp-footer.png"
    />
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <!--$-->
  </head>
  <div
    style="
      display: none;
      overflow: hidden;
      line-height: 1px;
      opacity: 0;
      max-height: 0;
      max-width: 0;
    "
  >
    Yelp recent login
    <div>
       ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
    </div>
  </div>
  <body
    style="
      background-color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    "
  >
    <table
      align="center"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="max-width: 37.5em"
    >
      <tbody>
        <tr style="width: 100%">
          <td>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="padding: 30px 20px"
            >
              <tbody>
                <tr>
                  <td>
                    <img
                      src="https://react-email-demo-lpdmf0ryo-resend.vercel.app/static/yelp-logo.png"
                      style="
                        display: block;
                        outline: none;
                        border: none;
                        text-decoration: none;
                      "
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="
                border: 1px solid rgb(0, 0, 0, 0.1);
                border-radius: 3px;
                overflow: hidden;
              "
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                    >
                      <tbody style="width: 100%">
                        <tr style="width: 100%">
                          <img
                            src="https://react-email-demo-lpdmf0ryo-resend.vercel.app/static/yelp-header.png"
                            style="
                              display: block;
                              outline: none;
                              border: none;
                              text-decoration: none;
                              max-width: 100%;
                            "
                            width="620"
                          />
                        </tr>
                      </tbody>
                    </table>
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="padding: 20px; padding-bottom: 0"
                    >
                      <tbody style="width: 100%">
                        <tr style="width: 100%">
                          <td data-id="__react-email-column">
                            <h1
                              style="
                                font-size: 32px;
                                font-weight: bold;
                                text-align: center;
                              "
                            >
                              Hi, <span class="name">${data.name}</span>
                            </h1>
                            <h2
                              style="
                                font-size: 26px;
                                font-weight: bold;
                                text-align: center;
                              "
                            >
                              We noticed a recent login to your Yelp account.
                            </h2>
                            <p
                              style="
                                font-size: 16px;
                                line-height: 24px;
                                margin: 16px 0;
                              "
                            >
                              <b>Time: </b> <span class="time">${data.time}</span>
                            </p>
                            <p
                              style="
                                font-size: 16px;
                                line-height: 24px;
                                margin: 16px 0;
                                margin-top: -5px;
                              "
                            >
                              <b>Device: </b><span class="device">${data.device}</span>
                            </p>
                            <p
                              style="
                                font-size: 16px;
                                line-height: 24px;
                                margin: 16px 0;
                                margin-top: -5px;
                              "
                            >
                              <b>Location: </b><span class="location">${data.location}</span>
                            </p>
                            <p
                              style="
                                font-size: 14px;
                                line-height: 24px;
                                margin: 16px 0;
                                color: rgb(0, 0, 0, 0.5);
                                margin-top: -5px;
                              "
                            >
                              *Approximate geographic location based on IP
                              address:<!-- --> <span class="ip">${data.ip}</span>
                            </p>
                            <p
                              style="
                                font-size: 16px;
                                line-height: 24px;
                                margin: 16px 0;
                              "
                            >
                              If this was you, there&#x27;s nothing else you
                              need to do.
                            </p>
                            <p
                              style="
                                font-size: 16px;
                                line-height: 24px;
                                margin: 16px 0;
                                margin-top: -5px;
                              "
                            >
                              If this wasn&#x27;t you or if you have additional
                              questions, please see our support page.
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="padding: 20px; padding-top: 0"
                    >
                      <tbody style="width: 100%">
                        <tr style="width: 100%">
                          <td
                            colspan="2"
                            data-id="__react-email-column"
                            style="
                              display: flex;
                              justify-content: center;
                              width: 100%;
                            "
                          >
                            <a
                              style="
                                line-height: 100%;
                                text-decoration: none;
                                display: inline-block;
                                max-width: 100%;
                                mso-padding-alt: 0px;
                                background-color: #e00707;
                                border-radius: 3px;
                                color: #fff;
                                font-weight: bold;
                                border: 1px solid rgb(0, 0, 0, 0.1);
                                cursor: pointer;
                                padding: 12px 30px 12px 30px;
                              "
                              target="_blank"
                              ><span
                                ><!--[if mso
                                  ]><i
                                    style="
                                      mso-font-width: 500%;
                                      mso-text-raise: 18;
                                    "
                                    hidden
                                    >&#8202;&#8202;&#8202;</i
                                  ><!
                                [endif]--></span
                              ><span
                                style="
                                  max-width: 100%;
                                  display: inline-block;
                                  line-height: 120%;
                                  mso-padding-alt: 0px;
                                  mso-text-raise: 9px;
                                "
                                >Learn More</span
                              ><span
                                ><!--[if mso
                                  ]><i style="mso-font-width: 500%" hidden
                                    >&#8202;&#8202;&#8202;&#8203;</i
                                  ><!
                                [endif]--></span
                              ></a
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="padding: 45px 0 0 0"
            >
              <tbody>
                <tr>
                  <td>
                    <img
                      src="https://react-email-demo-lpdmf0ryo-resend.vercel.app/static/yelp-footer.png"
                      style="
                        display: block;
                        outline: none;
                        border: none;
                        text-decoration: none;
                        max-width: 100%;
                      "
                      width="620"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <p
              style="
                font-size: 12px;
                line-height: 24px;
                margin: 16px 0;
                text-align: center;
                color: rgb(0, 0, 0, 0.7);
              "
            >
              © 2022 | Yelp Inc., 350 Mission Street, San Francisco, CA 94105,
              U.S.A. | www.yelp.com
            </p>
          </td>
        </tr>
      </tbody>
    </table>
    <!--/$-->
  </body>
</html>
`;
};
export const cardContent = (data: any) => {
  return `
    <table
      height="100%"
      align="center"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      style="padding: 5px; " 

      role="presentation"
    >
      <tbody style="width: 100%;height:100%;">
        <tr style="width: 100%;height:100%; ">
          <td data-id="__react-email-column" style="border: 1px solid #ddd; border-radius: 10px; display: flex; flex-direction: column; width: 100%; height: 100%; align-items: space-between; ">
            <img
              style="
                display: block;
                outline: none;
                border: none;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                width: 100%;
                max-width: 100%;
                height:auto;
                margin-bottom: 10px;
              "
              src="${data.image}"
            />
            <div style="display: flex; flex-direction: column; width: 100%;height: 100%; padding:10px;justify-content:space-between; ">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <div style="font-size: 18px;font-weight: bold" class='name'>${data.name}</div>
              </div>
              <div>
               <div style="font-size: 18px; margin-bottom: 10px; color: #555">${data.beds} Beds</div>
                <div style="font-size: 18px; margin-bottom: 10px; color: #555;">${data.day}</div>
                <div style="font-size: 18px; margin-bottom:20px;">$${data.price} USD / night</div>
                <div style= "display: flex; justify-content:center; width: 100%;" >
                  <button style="
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    background-color: #007bff;
                    color: #fff;
                    cursor: pointer;
                  ">Book Now</button>
                </div>
              </div>
             
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <style>
      @media (max-width: 768px) {
        /* Make the button full width on screens smaller than 768px */
        .gjs-cell button {
          width: 100% !important;
        }
      }
    </style>
  `;
};
export const footerContent = () => {
  return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <link rel="preload" as="image" href="/static/get-it-on-google-play.png" />
    <link
      rel="preload"
      as="image"
      href="/static/download-on-the-app-store.png"
    />
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <!--$-->
    <style>
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        mso-font-alt: 'Helvetica';
        src: url(https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hiA.woff2) format('woff2');
      }

      * {
        font-family: 'Inter', Helvetica;
      }
    </style>
    <style>
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        mso-font-alt: 'Helvetica';
        src: url(https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_fjbvMwCp50PDca1ZL7.woff2) format('woff2');
      }

      * {
        font-family: 'Inter', Helvetica;
      }
    </style>
    <style>
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        mso-font-alt: 'Helvetica';
        src: url(https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_fjbvMwCp50BTca1ZL7.woff2) format('woff2');
      }

      * {
        font-family: 'Inter', Helvetica;
      }
    </style>
  </head>
  <body style="margin:0;margin-left:12px;margin-right:12px">
    <table
      align="center"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="max-width:37.5em;margin-left:auto;margin-right:auto;box-sizing:border-box;padding-top:1rem;padding-bottom:1rem;height:100vh"
    >
      <tbody>
        <tr style="width:100%">
          <td>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
            >
              <tbody style="width:100%">
                <tr style="width:100%">
                  <td align="center" data-id="__react-email-column">
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                    >
                      <tbody style="width:100%">
                        <tr style="width:100%">
                          <p
                            style="font-size:18px;line-height:28px;margin:16px 0;color:rgb(99,102,241);font-weight:700"
                          >
                            Try now
                          </p>
                          <p
                            style="font-size:14px;line-height:24px;margin:16px 0;color:rgb(17,24,39)"
                          >
                            The app all cheese enthusiasts have been waiting for
                          </p>
                        </tr>
                      </tbody>
                    </table>
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                    >
                      <tbody style="width:100%">
                        <tr style="width:100%">
                          <td align="center">
                            <table>
                              <tr>
                                <td style="padding-right:16px">
                                  <a
                                    href="https://react.email"
                                    style="line-height:100%;text-decoration:none;display:inline-block;max-width:100%;mso-padding-alt:0px;padding:0px 0px 0px 0px"
                                    target="_blank"
                                    ><span
                                      ><!--[if mso
                                        ]><i
                                          style="mso-font-width:0%;mso-text-raise:0"
                                          hidden
                                        ></i><![endif]--></span
                                    ><span
                                      style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:0"
                                      ><img
                                        alt="Get it on Google Play button"
                                        height="54"
                                        src="https://react.email/static/get-it-on-google-play.png"
                                        style="display:block;outline:none;border:none;text-decoration:none" /></span
                                    ><span
                                      ><!--[if mso
                                        ]><i style="mso-font-width:0%" hidden
                                          >&#8203;</i
                                        ><!
                                      [endif]--></span
                                    ></a
                                  >
                                </td>
                                <td style="padding-left:16px">
                                  <a
                                    href="https://react.email"
                                    style="line-height:100%;text-decoration:none;display:inline-block;max-width:100%;mso-padding-alt:0px;padding:0px 0px 0px 0px"
                                    target="_blank"
                                    ><span
                                      ><!--[if mso
                                        ]><i
                                          style="mso-font-width:0%;mso-text-raise:0"
                                          hidden
                                        ></i><![endif]--></span
                                    ><span
                                      style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:0"
                                      ><img
                                        alt="Download on the App Store button"
                                        height="54"
                                        src="https://react.email/static/download-on-the-app-store.png"
                                        style="display:block;outline:none;border:none;text-decoration:none" /></span
                                    ><span
                                      ><!--[if mso
                                        ]><i style="mso-font-width:0%" hidden
                                          >&#8203;</i
                                        ><!
                                      [endif]--></span
                                    ></a
                                  >
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <!--/$-->
  </body>
</html>
`;
};
export const header = () => {
  return `
<head>
  ${globalStyles}
</head>
									<table class="row-content"  style=" color: #000000; width: 550px; margin: 0 auto;background:#ffffff" width="550">
										<tbody>
											<tr>
												<td class="column column-1" width="50%" style=" font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="image_block block-1" width="100%"style="">
														<tr>
															<td class="pad" style="padding-left:25px;width:100%;padding-right:0px;">
																<div class="alignment" align="left" style="line-height:10px">
																	<div style="max-width: 68.75px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1661/logo_airline.png" style="display: block; height: auto; border: 0; width: 100%;" width="68.75" alt="Alternate text" title="Alternate text" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="50%" style=" font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="10"  style=" word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:120%;text-align:right;mso-line-height-alt:14.399999999999999px;">
																	<p style="margin: 0; word-break: break-word;">James Brown</p>
																	<p style="margin: 0; word-break: break-word;">Member Nr. <span style="word-break: break-word; color: #ea5256;"><strong>688969807</strong></span> | Level <span style="word-break: break-word; color: #ea5256;"><strong>Basic</strong></span></p>
																	<p style="margin: 0; word-break: break-word;">Reward Points <strong><span style="word-break: break-word; color: #ea5256;">2000</span></strong></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
`;
};
export const flightData = {
  departure: {
    code: "OTP",
    city: "Bucharest",
  },
  name: "aaaa",
  arrival: {
    code: "LHR",
    city: "London",
  },
  flightDuration: "2h 54m",
  terminal: "A",
  boardingTime: "16:45",
  class: "Economy",
  seat: "17A",
};
export const templateFlight = (flightData: any) => {
  return `
    <head>
      ${globalStyles}
      <style>
        
        .body {
          background-color: #bdd6c4;
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: none;
          text-size-adjust: none;
          font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;
        }
        .container {
          max-width: 550px;
          margin: 0 auto;
          background-color: #ea5256;
          color: #ffffff;
        }
        
        .column {
          flex: 1;
          text-align: center;
          padding: 10px;
        }
        .spacer {
          height: 40px;
        }
        .flight-code {
          font-size: 42px;
          font-weight: bold;
          line-height: 1.2;
        }
        .city {
          font-size: 17px;
          line-height: 1.2;
        }
        .flight-duration {
          font-size: 12px;
          color: #f0efef;
        }
        .details {
          font-size: 15px;
          line-height: 1.2;
        }
        .details strong {
          font-size: 18px;
        }
        .divider {
          border-top: 1px solid #ffffff;
          margin: 10px auto;
          width: 90%;
        }

        
        @media only screen and (max-width: 700px) {
          .row-flight {
            flex-direction: column; 
          }
          .column {
            padding: 5px 0; 
          }
          .flight-code {
            font-size: 32px; 
          }
          .city {
            font-size: 14px; 
          }
          .details {
            font-size: 14px; 
          }
          .details strong {
            font-size: 16px; 
          }
          .spacer{
            height: 20px;
          }
        }
      </style>
    </head>
   <table  style="width: 100%; border-collapse: collapse;">
    <tr>
      <td>
      <div class="container">
        
        <div style="display: flex;justify-content: center;padding:10px 0" class="row-flight">
          <div class="column">
            <div class="spacer"></div>
            <div class="flight-code">${flightData.departure.code}</div>
            <div class="name">${flightData.name}</div>
          </div>
          <div class="column">
            <div class="spacer"></div>
            <img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1661/Airplane_.gif" alt="Airplane" style="display: block; height: auto; width: 100%; max-width: 137.5px; margin: 0 auto;">
            <div class="flight-duration">Flight Duration</div>
            <div class="flight-duration">${flightData.flightDuration}</div>
          </div>
          <div class="column">
            <div class="spacer"></div>
            <div class="flight-code">${flightData.arrival.code}</div>
            <div class="city">${flightData.arrival.city}</div>
          </div>
        </div>

        
        <div class="divider"></div>

        
        <div style="display: flex;justify-content: center;padding:10px 0" class="row-flight">
          <div class="column">
            <div class="details">Terminal</div>
            <div class="details"><strong>${flightData.terminal}</strong></div>
          </div>
          <div class="column">
            <div class="details">Boarding Time</div>
            <div class="details"><strong>${flightData.boardingTime}</strong></div>
          </div>
          <div class="column">
            <div class="details">Class</div>
            <div class="details"><strong>${flightData.class}</strong></div>
          </div>
          <div class="column">
            <div class="details">Seat</div>
            <div class="details"><strong>${flightData.seat}</strong></div>
          </div>
        </div>

        
        <div class="spacer" style="height: 5px;"></div>
      </div>
      </td>
  </tr>
</table>
  `;
};
export const heroSection = () => {
  return `
    <table class="row row-3" align="center" width="100%" border="0" cellpadding="0"  style="">
      <tbody>
        <tr>
          <td>
            <table class="row-content stack" align="center" border="0" cellpadding="0"  style=" background-color: #f3f3f3; color: #000000; width: 630px; margin: 0 auto;" width="630">
              <tbody>
                <tr>
                  <td class="column column-1" width="100%" style=" font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                    <table class="image_block block-1" width="100%" border="0" cellpadding="0"  style="">
                      <tr>
                        <td class="pad" style="padding-bottom:10px;width:100%;">
                          <div class="alignment" align="center" style="line-height:10px">
                            <div style="max-width: 630px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5706/STAMP-01-01.png" style="display: block; height: auto; border: 0; width: 100%;" width="630" alt="Sweater and coffee" title="Sweater and coffee" height="auto"></div>
                          </div>
                        </td>
                      </tr>
                    </table>
                    <table class="heading_block block-2" width="100%" border="0" cellpadding="0"  style="">
                      <tr>
                        <td class="pad" style="padding-bottom:5px;padding-left:15px;padding-right:15px;padding-top:35px;text-align:center;width:100%;">
                          <h1 style="margin: 0; color: #005e26; direction: ltr; font-family: 'Nunito', Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 18px; font-weight: normal; letter-spacing: 1px; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 21.599999999999998px;">'TIS THE SEASON</h1>
                        </td>
                      </tr>
                    </table>
                    <table class="heading_block block-3" width="100%" border="0" cellpadding="0"  style="">
                      <tr>
                        <td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;text-align:center;width:100%;">
                          <h1 style="margin: 0; color: #b21420; direction: ltr; font-family: 'Nunito', Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 34px; font-weight: normal; letter-spacing: 1px; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 40.8px;">UGLY SWEATERS</h1>
                        </td>
                      </tr>
                    </table>
                    <table class="button_block block-4" width="100%" border="0" cellpadding="10"  style="">
                      <tr>
                        <td class="pad">
                          <div class="alignment" align="center">
                            <a class="button" href="example.com" target="_blank" style="background-color:transparent;border-bottom:2px solid #B21420;border-left:2px solid #B21420;border-radius:0px;border-right:2px solid #B21420;border-top:2px solid #B21420;color:#b21420;display:inline-block;font-family:Nunito, Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;font-weight:undefined;mso-border-alt:none;padding-bottom:3px;padding-top:3px;text-align:center;text-decoration:none;width:auto;word-break:keep-all;">
                              <span style="word-break: break-word; padding-left: 40px; padding-right: 40px; font-size: 14px; display: inline-block; letter-spacing: normal;">
                                <span style="word-break: break-word;">
                                  <span style="word-break: break-word; line-height: 25.2px;" data-mce-style><strong>SHOP NOW</strong></span>
                                </span>
                              </span>
                            </a>
                          </div>
                        </td>
                      </tr>
                    </table>
                    <div class="spacer_block block-5" style="height:60px;line-height:60px;font-size:1px;">&#8202;</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  `;
};
export const productSection = () => {
  return `
    <table class="row row-6" align="center" width="100%" border="0" cellpadding="0"  style="">
      <tbody>
        <tr>
          <td>
            <table class="row-content stack" align="center" border="0" cellpadding="0"  style=" background-color: #f3f3f3; color: #000000; width: 630px; margin: 0 auto;" width="630">
              <tbody>
                <tr>
                  <td class="column column-1" width="33.333333333333336%" style=" font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                    <table class="image_block block-1" width="100%" border="0" cellpadding="20"  style="">
                      <tr>
                        <td class="pad">
                          <div class="alignment" align="center" style="line-height:10px">
                            <div class="fullWidth" style="max-width: 170px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5706/AdobeStock_309361881_edited.jpg" style="display: block; height: auto; border: 0; width: 100%;" width="170" alt="Product" title="Product" height="auto"></div>
                          </div>
                        </td>
                      </tr>
                    </table>
                    <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0"  style=" word-break: break-word;">
                      <tr>
                        <td class="pad" style="padding-left:15px;padding-right:15px;padding-top:10px;">
                          <div style="color:#393d47;font-family:Nunito, Arial, Helvetica Neue, Helvetica, sans-serif;font-size:15px;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:18px;">
                            <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word;"><strong>NAVY SNOWFLAKE SWEATER</strong></span></p>
                          </div>
                        </td>
                      </tr>
                    </table>
                    <table class="paragraph_block block-3" width="100%" border="0" cellpadding="0"  style=" word-break: break-word;">
                      <tr>
                        <td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:3px;">
                          <div style="color:#393d47;font-family:Nunito, Arial, Helvetica Neue, Helvetica, sans-serif;font-size:15px;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:18px;">
                            <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word;">Lorem impsum at</span></p>
                          </div>
                        </td>
                      </tr>
                    </table>
                    <table class="button_block block-4" width="100%" border="0" cellpadding="10"  style="">
                      <tr>
                        <td class="pad">
                          <div class="alignment" align="center">
                            <a class="button" href="example.com" target="_blank" style="background-color:transparent;border-bottom:2px solid #B21420;border-left:2px solid #B21420;border-radius:0px;border-right:2px solid #B21420;border-top:2px solid #B21420;color:#b21420;display:inline-block;font-family:Nunito, Arial, Helvetica Neue, Helvetica, sans-serif;font-size:12px;font-weight:undefined;mso-border-alt:none;padding-bottom:3px;padding-top:3px;text-align:center;text-decoration:none;width:auto;word-break:keep-all;">
                              <span style="word-break: break-word; padding-left: 20px; padding-right: 20px; font-size: 12px; display: inline-block; letter-spacing: normal;">
                                <span style="word-break: break-word;">
                                  <span style="word-break: break-word; line-height: 18px;" data-mce-style><strong>SHOP NOW</strong></span>
                                </span>
                              </span>
                            </a>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <!-- Repeat for other products -->
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  `;
};
export const footer = () => {
  return `<!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head>
  <title></title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">
  ${globalStyles}
</head>
<body class="body" style="background-color: #bdd6c4; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
  <table class="row row-15" align="center" width="100%" border="0" cellpadding="0"  style="">
      <tbody>
        <tr>
          <td>
            <table class="row-content" align="center" border="0" cellpadding="0"  style=" background-color: #f3f3f3; color: #000000; width: 630px; margin: 0 auto;" width="630">
              <tbody>
                <tr>
                  <td class="column column-1" width="100%" style=" font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                    <table class="divider_block block-1" width="100%" border="0" cellpadding="0"  style="">
                      <tr>
                        <td class="pad" style="padding-bottom:10px;padding-left:10px;padding-top:10px;">
                          <div class="alignment" align="right">
                            <table border="0" cellpadding="0"  width="100%" style="">
                              <tr>
                                <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #666666;"><span style="word-break: break-word;">&#8202;</span></td>
                              </tr>
                            </table>
                          </div>
                        </td>
                      </tr>
                    </table>
                    <table class="image_block block-2" width="100%" border="0" cellpadding="0"  style="">
                      <tr>
                        <td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:10px;width:100%;">
                          <div class="alignment" align="center" style="line-height:10px">
                            <div style="max-width: 80px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5706/LOGO-02-02_02_1.png" style="display: block; height: auto; border: 0; width: 100%;" width="80" alt="Logo" title="Logo" height="auto"></div>
                          </div>
                        </td>
                      </tr>
                    </table>
                    <table class="social_block block-3" width="100%" border="0" cellpadding="0"  style="">
                      <tr>
                        <td class="pad" style="padding-bottom:5px;padding-left:20px;padding-right:20px;padding-top:10px;text-align:center;">
                          <div class="alignment" align="center">
                            <table class="social-table" width="126px" border="0" cellpadding="0"  style=" display: inline-block;">
                              <tr>
                                <td style="padding:0 5px 0 5px;"><a href="https://www.facebook.com" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-dark-gray/facebook@2x.png" width="32" height="auto" alt="Facebook" title="Facebook" style="display: block; height: auto; border: 0;"></a></td>
                                <td style="padding:0 5px 0 5px;"><a href="https://www.twitter.com" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-dark-gray/twitter@2x.png" width="32" height="auto" alt="Twitter" title="Twitter" style="display: block; height: auto; border: 0;"></a></td>
                                <td style="padding:0 5px 0 5px;"><a href="https://www.instagram.com" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-dark-gray/instagram@2x.png" width="32" height="auto" alt="Instagram" title="Instagram" style="display: block; height: auto; border: 0;"></a></td>
                              </tr>
                            </table>
                          </div>
                        </td>
                      </tr>
                    </table>
                    <table class="paragraph_block block-4" width="100%" border="0" cellpadding="0"  style=" word-break: break-word;">
                      <tr>
                        <td class="pad" style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:15px;">
                          <div style="color:#666666;font-family:Nunito, Arial, Helvetica Neue, Helvetica, sans-serif;font-size:12px;line-height:120%;text-align:center;mso-line-height-alt:14.399999999999999px;">
                            <p style="margin: 0; word-break: break-word;"><strong><span style="word-break: break-word; color: #39374e;"><a href="example.com" target="_blank" style="text-decoration: none; color: #b21420;" rel="noopener">Delivery Information</a>&nbsp; &nbsp;|&nbsp; &nbsp;<a href="example.com" target="_blank" style="text-decoration: none; color: #b21420;" rel="noopener">About Us</a>&nbsp; &nbsp;|&nbsp; &nbsp;<a href="example.com" target="_blank" style="text-decoration: none; color: #b21420;" rel="noopener">Contact</a></span></strong></p>
                          </div>
                        </td>
                      </tr>
                    </table>
                    <table class="paragraph_block block-5" width="100%" border="0" cellpadding="0"  style=" word-break: break-word;">
                      <tr>
                        <td class="pad" style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:5px;">
                          <div style="color:#666666;font-family:Nunito, Arial, Helvetica Neue, Helvetica, sans-serif;font-size:12px;line-height:120%;text-align:center;mso-line-height-alt:14.399999999999999px;">
                            <p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #39374e;">&nbsp;Changed your mind? You can </span><strong><span style="word-break: break-word;"><a href="*|UNSUB|*" target="_blank" rel="noopener" style="color: #b21420;">unsubscribe</a></span></strong><span style="word-break: break-word; color: #39374e;"><strong> </strong>at any time.</span></p>
                          </div>
                        </td>
                      </tr>
                    </table>
                    <div class="spacer_block block-6" style="height:35px;line-height:35px;font-size:1px;">&#8202;</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
</body>
</html>`;
};
export const globalCss = `
<style>
* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
       overflow: visible;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		.image_block img+div {
			display: none;
		}

		sup,
		sub {
			font-size: 75%;
			line-height: 0;
		}

		@media (max-width:660px) {
			.desktop_hide table.icons-inner {
				display: inline-block !important;
			}

			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.image_block div.fullWidth {
				max-width: 100% !important;
			}

			.mobile_hide {
				display: none;
			}

			.row-content {
				width: 100% !important;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}
		}
      </style>
`;

export const templateCard1 = (data: any) => {
  return `
<head>
${globalStyles}
  <style>
    @media only screen and (max-width: 700px) {
      .container {
        width: 100% !important;
      }
      .flex-container {
        flex-direction: column !important;
        align-items: center !important;
      }
      .image-container-card, .content-container {
        max-width: 100% !important;
        padding: 0 16px !important;
        text-align: center !important;
      }
      .image-container-card {
        margin-bottom: 16px;
      }
      .button {
        width: 100% !important;
        text-align: center !important;
      }
      .content-container {
        padding-left: 0 !important;
      }
    }
  </style>
</head>
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:20px;">
    <tr>
      <td align="center">
        <table class="container" width="640" cellpadding="0" cellspacing="0" border="0" style="max-width: 640px; margin: 0 auto; background-color: #ffffff; color: #000000; border-radius: 8px; overflow: hidden;">
          <tr>
            <td>
              <div class="flex-container" style="display: flex; align-items: center; ">
                <div class="image-container-card" style="flex: 1; max-width: 33.333%;">
                  <div style="text-align: center;height:100%">
                    <img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1161/thumb1.jpg" style="display: block; min-height:212px;height: 100%; border: 0; width: 100%; border-radius: 8px;object-fit: fill;" alt="Apartment Image" title="Apartment Image">
                  </div>
                </div>
                <div class="content-container" style="flex: 2; max-width: 66.666%; padding-left: 16px;display: flex; flex-direction: column; gap:12px">
                  <div>
                    <div style="color: #2b3940; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; font-size: 20px; line-height: 120%;">
                      <p style="margin: 0;"><strong>$475,000</strong></p>
                    </div>
                  </div>
                  <div>
                    <div style="color: #2b3940; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; font-size: 14px; line-height: 150%;">
                      <p style="margin: 0;"><strong class="name">Apartament in Miami</strong></p>
                    </div>
                  </div>
                  <div>
                    <div style="border-top: 1px solid #E9EBEB; width: 100%;"></div>
                  </div>
                  <div>
                    <div style="color: #7e8989; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; font-size: 14px; line-height: 150%;">
                      <p style="margin: 0;">5 Bedrooms, 2 Bathrooms, 1075 sq.f.</p>
                    </div>
                  </div>
                  <div>
                    <a href="#" class="button" style="background-color: #f75c03; border-radius: 3px; color: #ffffff; display: inline-block; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; font-size: 14px; padding: 5px 20px; text-align: center; text-decoration: none;">
                      <strong>View Property</strong>
                    </a>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
`;
};
export const textDescription = () => {
  return `<!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head>
  <title></title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">
  ${globalCss}
</head>
<body class="body" style="background-color: #bdd6c4; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
  <table class="row row-4" align="center" width="100%" border="0" cellpadding="0"  style="">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0"  style=" color: #000000; width: 640px; margin: 0 auto;" width="640">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style=" font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
																			<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0"  style=" word-break: break-word;">
							<div class="spacer_block block-1" style="height:60px;line-height:60px;font-size:1px;">&#8202;</div>
														<tr>
															<td class="pad" style="padding-bottom:15px;padding-left:30px;padding-right:30px;">
																<div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:30px;line-height:120%;text-align:center;mso-line-height-alt:36px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #2b3940;"><strong><span style="word-break: break-word;">A friendly reminder about your favorite properties</span></strong></span></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="0"  style=" word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:5px;">
																<div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;line-height:150%;text-align:center;mso-line-height-alt:21px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #7e8989;">Are you still interested in these properties?</span></p>
																</div>
															</td>
														</tr>
													</table>
													<div class="spacer_block block-4" style="height:40px;line-height:40px;font-size:1px;">&#8202;</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
</body>
</html>`;
};

export const imageText = () => {
  return `
<head>
  <style>
    .body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: none;
      text-size-adjust: none;
       overflow: visible;
    }
    .container-image-text {
      max-width: 640px;
      margin: 0 auto;
      color: #ffffff;
      font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;
      padding: 20px;
      text-align: center;
    }
    .image-container {
      position: relative;
      width: 100%;
      height: 100%;
      max-height:280px;
    }
    .image-container img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;
    }
    .content {
      position: relative;
      z-index: 1;
    }
    .spacer {
      height: 65px;
    }
    .title {
      font-size: 30px;
      line-height: 1.2;
      color: #ffffff;
      margin: 0;
    }
    .button {
      background-color: #f75c03;
      border-radius: 3px;
      color: #ffffff;
      display: inline-block;
      font-size: 16px;
      padding: 10px 28px;
      text-align: center;
      text-decoration: none;
      margin-top: 20px;
    }
  </style>
</head>
  <div class="image-container">
    <img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1161/bg4.png" alt="Background Image">
    <div class="container-image-text">
      <div class="content">
        <div class="spacer"></div>
        <h1 class="title">Manage your favorite properties</h1>
        <a href="#" class="button">Discover more houses</a>
        <div class="spacer"></div>
      </div>
    </div>
  </div>
`;
};
export const startNow = () => {
  return `<!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head>
  <title></title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">
  ${globalCss}
</head>
<body class="body" style="background-color: #bdd6c4; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
  <table class="row row-19" align="center" width="100%" border="0" cellpadding="0"  style=" background-color: #ffffff;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0"  style=" color: #000000; width: 640px; margin: 0 auto;" width="640">
										<tbody>
											<tr>
												<td class="column column-1" width="50%" style=" font-weight: 400; text-align: left; background-color: #f6f8f8; border-bottom: 10px solid #FFF; border-left: 10px solid #FFF; border-right: 10px solid #FFF; border-top: 10px solid #FFF; vertical-align: top;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="0"  style=" word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:5px;padding-left:32px;padding-right:32px;padding-top:40px;">
																<div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:24px;line-height:150%;text-align:left;mso-line-height-alt:36px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #2b3940;"><strong>Discover your next dream home</strong></span></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0"  style=" word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:5px;padding-left:32px;padding-right:32px;padding-top:10px;">
																<div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;line-height:180%;text-align:left;mso-line-height-alt:25.2px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #7e8989;">Quisque vitae tristique sem, nullam vulputate nisi sed purus.</span></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="button_block block-3" width="100%" border="0" cellpadding="0"  style="">
														<tr>
															<td class="pad" style="padding-bottom:40px;padding-left:32px;padding-right:32px;padding-top:20px;text-align:left;">
																<div class="alignment" align="left"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:52px;width:190px;v-text-anchor:middle;" arcsize="6%" stroke="false" fillcolor="#f75c03">
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#ffffff;font-family:Tahoma, sans-serif;font-size:16px">
<![endif]-->
																	<div class="button" style="background-color:#f75c03;border-bottom:0px solid transparent;border-left:0px solid transparent;border-radius:3px;border-right:0px solid transparent;border-top:0px solid transparent;color:#ffffff;display:inline-block;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:16px;font-weight:undefined;mso-border-alt:none;padding-bottom:10px;padding-top:10px;text-align:center;text-decoration:none;width:auto;word-break:keep-all;"><span style="word-break: break-word; padding-left: 28px; padding-right: 28px; font-size: 16px; display: inline-block; letter-spacing: normal;"><span style="margin: 0; word-break: break-word; line-height: 32px;"><strong>Get Started Now</strong></span></span></div><!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="50%" style=" font-weight: 400; text-align: left; background-color: #f6f8f8; border-bottom: 10px solid #FFF; border-left: 10px solid #FFF; border-right: 10px solid #FFF; border-top: 10px solid #FFF; vertical-align: top;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="0"  style=" word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:5px;padding-left:32px;padding-right:32px;padding-top:40px;">
																<div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:24px;line-height:150%;text-align:left;mso-line-height-alt:36px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #2b3940;"><strong>How much is your house worth?</strong></span></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0"  style=" word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:5px;padding-left:32px;padding-right:32px;padding-top:10px;">
																<div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;line-height:180%;text-align:left;mso-line-height-alt:25.2px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; color: #7e8989;">Quisque vitae tristique sem, nullam vulputate nisi sed purus.</span></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="button_block block-3" width="100%" border="0" cellpadding="0"  style="">
														<tr>
															<td class="pad" style="padding-bottom:40px;padding-left:32px;padding-right:32px;padding-top:20px;text-align:left;">
																<div class="alignment" align="left"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:52px;width:190px;v-text-anchor:middle;" arcsize="6%" stroke="false" fillcolor="#f75c03">
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#ffffff;font-family:Tahoma, sans-serif;font-size:16px">
<![endif]-->
																	<div class="button" style="background-color:#f75c03;border-bottom:0px solid transparent;border-left:0px solid transparent;border-radius:3px;border-right:0px solid transparent;border-top:0px solid transparent;color:#ffffff;display:inline-block;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:16px;font-weight:undefined;mso-border-alt:none;padding-bottom:10px;padding-top:10px;text-align:center;text-decoration:none;width:auto;word-break:keep-all;"><span style="word-break: break-word; padding-left: 28px; padding-right: 28px; font-size: 16px; display: inline-block; letter-spacing: normal;"><span style="margin: 0; word-break: break-word; line-height: 32px;"><strong>Get Started Now</strong></span></span></div><!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
</body>
</html>`;
};

interface ColumnProps {
  imageUrl: string;
  price: string;
  name: string;
  description: string;
  details: string;
}

export const column1Props: ColumnProps = {
  imageUrl:
    "https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1161/Img8.jpg",
  price: "$475,000",
  name: "Springfield Gardens, New York",
  description:
    "Quisque vitae tristique sem. Nullam vulputate nisi sed purus pulvinar dictum. Vestibulum ante ipsum.",
  details: "5 Bedrooms, 2 Bathrooms, 1075 sq.f.",
};

export const templateCredit = () => {
  return `
<head>
  ${globalCss}
</head>
<body class="body" style="background-color: #bdd6c4; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
  <table class="row row-20" align="center" width="100%" border="0" cellpadding="0"  style="">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0"  style=" background-color: #ffffff; color: #000000; width: 550px; margin: 0 auto;" width="550">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style=" font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="0"  style=" word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:35px;padding-right:10px;padding-top:10px;">
																<div style="color:#232323;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:17px;line-height:120%;text-align:left;mso-line-height-alt:20.4px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word;">Your Trip Receipt</span></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-21" align="center" width="100%" border="0" cellpadding="0"  style="">
						<tbody>
							<tr>
								<td>
									<table class="row-content" align="center" border="0" cellpadding="0"  style=" background-color: #ffffff; color: #000000; width: 550px; margin: 0 auto;" width="550">
										<tbody>
											<tr>
												<td class="column column-1" width="25%" style=" font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0"  style="">
														<tr>
															<td class="pad" style="padding-top:5px;width:100%;">
																<div class="alignment" align="center" style="line-height:10px">
																	<div style="max-width: 34px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1661/creadit_card.png" style="display: block; height: auto; border: 0; width: 100%;" width="34" alt="Alternate text" title="Alternate text" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="75%" style=" font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="10"  style=" word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;line-height:120%;text-align:left;mso-line-height-alt:16.8px;">
																	<p style="margin: 0; word-break: break-word;">Visa xxxx xxxx xxxx xx34</p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-22" align="center" width="100%" border="0" cellpadding="0"  style="">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0"  style=" background-color: #ffffff; color: #000000; width: 550px; margin: 0 auto;" width="550">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style=" font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="0"  style=" word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:35px;padding-right:10px;padding-top:10px;">
																<div style="color:#232323;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:17px;line-height:120%;text-align:left;mso-line-height-alt:20.4px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word;">James Brown</span></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-23" align="center" width="100%" border="0" cellpadding="0"  style="">
						<tbody>
							<tr>
								<td>
									<table class="row-content" align="center" border="0" cellpadding="0"  style=" background-color: #ffffff; color: #000000; width: 550px; margin: 0 auto;" width="550">
										<tbody>
											<tr>
												<td class="column column-1" width="50%" style=" font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="0"  style=" word-break: break-word;">
														<tr>
															<td class="pad" style="padding-left:35px;padding-right:10px;padding-top:10px;">
																<div style="color:#232323;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;line-height:150%;text-align:left;mso-line-height-alt:21px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word;">Basic Economy Far x1</span></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="50%" style=" font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="0"  style=" word-break: break-word;">
														<tr>
															<td class="pad" style="padding-left:35px;padding-right:25px;padding-top:10px;">
																<div style="color:#232323;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;line-height:150%;text-align:left;mso-line-height-alt:21px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word;">$350</span></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-24" align="center" width="100%" border="0" cellpadding="0"  style="">
						<tbody>
							<tr>
								<td>
									<table class="row-content" align="center" border="0" cellpadding="0"  style=" background-color: #ffffff; color: #000000; width: 550px; margin: 0 auto;" width="550">
										<tbody>
											<tr>
												<td class="column column-1" width="50%" style=" font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="0"  style=" word-break: break-word;">
														<tr>
															<td class="pad" style="padding-left:35px;padding-right:10px;padding-top:10px;">
																<div style="color:#232323;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;line-height:150%;text-align:left;mso-line-height-alt:21px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word;">Fees & Taxes</span></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="50%" style=" font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="0"  style=" word-break: break-word;">
														<tr>
															<td class="pad" style="padding-left:35px;padding-right:25px;padding-top:10px;">
																<div style="color:#232323;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;line-height:150%;text-align:left;mso-line-height-alt:21px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word;">$50</span></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-25" align="center" width="100%" border="0" cellpadding="0"  style="">
						<tbody>
							<tr>
								<td>
									<table class="row-content" align="center" border="0" cellpadding="0"  style=" background-color: #ffffff; color: #000000; width: 550px; margin: 0 auto;" width="550">
										<tbody>
											<tr>
												<td class="column column-1" width="50%" style=" font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="0"  style=" word-break: break-word;">
														<tr>
															<td class="pad" style="padding-left:35px;padding-right:10px;padding-top:10px;">
																<div style="color:#232323;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:16px;line-height:150%;text-align:left;mso-line-height-alt:24px;">
																	<p style="margin: 0; word-break: break-word;"><strong><span style="word-break: break-word;">Total</span></strong></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="50%" style=" font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="0"  style=" word-break: break-word;">
														<tr>
															<td class="pad" style="padding-left:35px;padding-right:25px;padding-top:10px;">
																<div style="color:#232323;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:16px;line-height:150%;text-align:left;mso-line-height-alt:24px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word;"><strong><span style="word-break: break-word;">$400</span></strong></span></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-26" align="center" width="100%" border="0" cellpadding="0"  style="">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0"  style=" color: #000000; width: 550px; margin: 0 auto;" width="550">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style=" font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0"  style="">
														<tr>
															<td class="pad" style="width:100%;">
																<div class="alignment" align="center" style="line-height:10px">
																	<div style="max-width: 550px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1661/round_corners_2.png" style="display: block; height: auto; border: 0; width: 100%;" width="550" alt="Alternate text" title="Alternate text" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
</body>`;
};

const renderColumn = (props: any) => {
  const { imageUrl, price, name, description, details } = props;

  return `
    <table class="column" width="100%" border="0" cellpadding="0"  style=" width: 100%;max-width:400px">
      <tr>
        <td  style=" font-weight: 400; text-align: left; background-color: #ffffff; border: 10px solid #F6F8F8; vertical-align: top;">
          <div class="image-block" style="width: 100%;">
            <div class="pad" style="padding: 16px;">
              <img src="${imageUrl}" alt="Image" style="display: block; height: auto; border: 0; width: 100%;" width="268" height="auto">
            </div>
          </div>
          <div class="button-block" style="width: 100%;">
            <div class="pad" style="padding: 16px 24px; text-align: left;">
              <div class="button" style="background-color: #e5f7f1; border-radius: 3px; color: #00b074; display: inline-block; font-family: Montserrat, sans-serif; font-size: 12px; padding: 1px 10px; text-align: center; text-decoration: none;">
                <span style="font-size: 16px; line-height: 2;">
                  <strong>JUST LISTED</strong>
                </span>
              </div>
            </div>
          </div>
          <div class="price-block" style="padding: 10px 24px 5px;">
            <div style="color: #2b3940; font-family: Montserrat, sans-serif; font-size: 24px; line-height: 120%;">
              <strong>${price}</strong>
            </div>
          </div>
          <div class="name-block" style="padding: 0 24px 15px;">
            <div style="color: #2b3940; font-family: Montserrat, sans-serif; font-size: 16px; line-height: 180%;">
              <strong class="name">${name}</strong>
            </div>
          </div>
          <div class="description-block" style="padding: 5px 24px;">
            <div style="color: #7e8989; font-family: Montserrat, sans-serif; font-size: 14px; line-height: 180%;">
              ${description}
            </div>
          </div>
          <div class="divider-block" style="padding: 20px 24px;">
            <div style="border-top: 1px solid #E9EBEB;"></div>
          </div>
          <div class="details-block" style="padding: 5px 24px 10px;">
            <div style="color: #7e8989; font-family: Montserrat, sans-serif; font-size: 14px; line-height: 150%;">
              ${details}
            </div>
          </div>
          <div class="contact-block" style="padding: 20px 24px 32px; text-align: left;">
            <div class="button" style="background-color: #f75c03; border-radius: 3px; color: #ffffff; display: inline-block; font-family: Montserrat, sans-serif; font-size: 14px; padding: 5px 20px; text-align: center; text-decoration: none;">
              <strong>Contact Us</strong>
            </div>
          </div>
        </td>
      </tr>
    </table>
   
  `;
};

export const layoutCard2 = (column1Props: any) => {
  const column1 = renderColumn(column1Props);
  const column2 = renderColumn(column1Props);

  return `
    <div class="row layout2" style="display: flex; align-items: center; justify-content: center; margin: 0 auto; margin-bottom:20px " >
      ${column1}
      ${column2}
    </div>
    <style>
      @media only screen and (max-width: 700px) {
        .row {
          flex-direction: column; 
          width: 100%; 
        }
      }
      @media only screen and (min-width: 700px) {
        .row.layout2 {
          width: 100%; 
        }
      }
    </style>
  `;
};

export const templateFakeAPI = [
  {
    name: "email",
    label: "Email",
    content: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <link
      rel="preload"
      as="image"
      href="https://react-email-demo-lpdmf0ryo-resend.vercel.app/static/yelp-logo.png"
    />
    <link
      rel="preload"
      as="image"
      href="https://react-email-demo-lpdmf0ryo-resend.vercel.app/static/yelp-header.png"
    />
    <link
      rel="preload"
      as="image"
      href="https://react-email-demo-lpdmf0ryo-resend.vercel.app/static/yelp-footer.png"
    />
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <!--$-->
  </head>
  <div
    style="
      display: none;
      overflow: hidden;
      line-height: 1px;
      opacity: 0;
      max-height: 0;
      max-width: 0;
    "
  >
    Yelp recent login
    <div>
       ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
    </div>
  </div>
  <body
    style="
      background-color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    "
  >
    <table
      align="center"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="max-width: 37.5em"
    >
      <tbody>
        <tr style="width: 100%">
          <td>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="padding: 30px 20px"
            >
              <tbody>
                <tr>
                  <td>
                    <img
                      src="https://react-email-demo-lpdmf0ryo-resend.vercel.app/static/yelp-logo.png"
                      style="
                        display: block;
                        outline: none;
                        border: none;
                        text-decoration: none;
                      "
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="
                border: 1px solid rgb(0, 0, 0, 0.1);
                border-radius: 3px;
                overflow: hidden;
              "
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                    >
                      <tbody style="width: 100%">
                        <tr style="width: 100%">
                          <img
                            src="https://react-email-demo-lpdmf0ryo-resend.vercel.app/static/yelp-header.png"
                            style="
                              display: block;
                              outline: none;
                              border: none;
                              text-decoration: none;
                              max-width: 100%;
                            "
                            width="620"
                          />
                        </tr>
                      </tbody>
                    </table>
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="padding: 20px; padding-bottom: 0"
                    >
                      <tbody style="width: 100%">
                        <tr style="width: 100%">
                          <td data-id="__react-email-column">
                            <h1
                              style="
                                font-size: 32px;
                                font-weight: bold;
                                text-align: center;
                              "
                            >
                              Hi, <span class="name">Manh</span>
                            </h1>
                            <h2
                              style="
                                font-size: 26px;
                                font-weight: bold;
                                text-align: center;
                              "
                            >
                              We noticed a recent login to your Yelp account.
                            </h2>
                            <p
                              style="
                                font-size: 16px;
                                line-height: 24px;
                                margin: 16px 0;
                              "
                            >
                              <b>Time: </b> <span class="time">Manh</span>
                            </p>
                            <p
                              style="
                                font-size: 16px;
                                line-height: 24px;
                                margin: 16px 0;
                                margin-top: -5px;
                              "
                            >
                              <b>Device: </b><span class="device">Manh</span>
                            </p>
                            <p
                              style="
                                font-size: 16px;
                                line-height: 24px;
                                margin: 16px 0;
                                margin-top: -5px;
                              "
                            >
                              <b>Location: </b><span class="location">Manh</span>
                            </p>
                            <p
                              style="
                                font-size: 14px;
                                line-height: 24px;
                                margin: 16px 0;
                                color: rgb(0, 0, 0, 0.5);
                                margin-top: -5px;
                              "
                            >
                              *Approximate geographic location based on IP
                              address:<!-- --> <span class="ip">Manh</span>
                            </p>
                            <p
                              style="
                                font-size: 16px;
                                line-height: 24px;
                                margin: 16px 0;
                              "
                            >
                              If this was you, there&#x27;s nothing else you
                              need to do.
                            </p>
                            <p
                              style="
                                font-size: 16px;
                                line-height: 24px;
                                margin: 16px 0;
                                margin-top: -5px;
                              "
                            >
                              If this wasn&#x27;t you or if you have additional
                              questions, please see our support page.
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="padding: 20px; padding-top: 0"
                    >
                      <tbody style="width: 100%">
                        <tr style="width: 100%">
                          <td
                            colspan="2"
                            data-id="__react-email-column"
                            style="
                              display: flex;
                              justify-content: center;
                              width: 100%;
                            "
                          >
                            <a
                              style="
                                line-height: 100%;
                                text-decoration: none;
                                display: inline-block;
                                max-width: 100%;
                                mso-padding-alt: 0px;
                                background-color: #e00707;
                                border-radius: 3px;
                                color: #fff;
                                font-weight: bold;
                                border: 1px solid rgb(0, 0, 0, 0.1);
                                cursor: pointer;
                                padding: 12px 30px 12px 30px;
                              "
                              target="_blank"
                              ><span
                                ><!--[if mso
                                  ]><i
                                    style="
                                      mso-font-width: 500%;
                                      mso-text-raise: 18;
                                    "
                                    hidden
                                    >&#8202;&#8202;&#8202;</i
                                  ><!
                                [endif]--></span
                              ><span
                                style="
                                  max-width: 100%;
                                  display: inline-block;
                                  line-height: 120%;
                                  mso-padding-alt: 0px;
                                  mso-text-raise: 9px;
                                "
                                >Learn More</span
                              ><span
                                ><!--[if mso
                                  ]><i style="mso-font-width: 500%" hidden
                                    >&#8202;&#8202;&#8202;&#8203;</i
                                  ><!
                                [endif]--></span
                              ></a
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="padding: 45px 0 0 0"
            >
              <tbody>
                <tr>
                  <td>
                    <img
                      src="https://react-email-demo-lpdmf0ryo-resend.vercel.app/static/yelp-footer.png"
                      style="
                        display: block;
                        outline: none;
                        border: none;
                        text-decoration: none;
                        max-width: 100%;
                      "
                      width="620"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <p
              style="
                font-size: 12px;
                line-height: 24px;
                margin: 16px 0;
                text-align: center;
                color: rgb(0, 0, 0, 0.7);
              "
            >
              © 2022 | Yelp Inc., 350 Mission Street, San Francisco, CA 94105,
              U.S.A. | www.yelp.com
            </p>
          </td>
        </tr>
      </tbody>
    </table>
    <!--/$-->
  </body>
</html>
`,
    category: "Custom",
  },
  {
    name: "example",
    label: "Example email",
    content: `
        <style>* { box-sizing: border-box; } body {margin: 0;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;}a[x-apple-data-detectors]{color:inherit !important;text-decoration-line:inherit !important;text-decoration-thickness:inherit !important;text-decoration-style:inherit !important;text-decoration-color:inherit !important;}#MessageViewBody a{color:inherit;text-decoration-line:none;text-decoration-thickness:initial;text-decoration-style:initial;text-decoration-color:initial;}p{line-height:inherit;}.desktop_hide, .desktop_hide table{display:none;max-height:0px;overflow-x:hidden;overflow-y:hidden;}.image_block img + div{display:none;}sup, sub{font-size:75%;line-height:0;}#ikx5{color:#000000;width:550px;margin:0 auto;}#im0gy{font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0px;border-right:0px;border-bottom:0px;border-left:0px;}#i23qn{padding-left:25px;width:100%;padding-right:0px;}#i4mwu{line-height:10px;}#i04e8{max-width:68.75px;}#iofg9{display:block;height:auto;border:0;width:100%;}#iypqm{font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0px;border-right:0px;border-bottom:0px;border-left:0px;}#ir6pn{word-break:break-word;}#iy012{color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:120%;text-align:right;mso-line-height-alt:14.399999999999999px;}#iog4h{margin:0;word-break:break-word;}#izx0p{margin:0;word-break:break-word;}#i7wh3{word-break:break-word;color:#ea5256;}#iemwl{word-break:break-word;color:#ea5256;}#i43l9{margin:0;word-break:break-word;}#iyv8l{word-break:break-word;color:#ea5256;}#in06d{margin-bottom:20px;}#isq8t{max-width:640px;margin:0 auto;background-color:#ffffff;color:#000000;border-radius:8px;overflow:hidden;}#ie84q{display:flex;align-items:center;}#i9lbj{flex:1;max-width:33.333%;}#i0eof{text-align:center;}#isrz5{display:block;height:auto;border:0;width:100%;max-width:181.333px;border-radius:8px;}#ic6il{flex:2;max-width:66.666%;padding-left:16px;display:flex;flex-direction:column;gap:12px;}#i5xgv{color:#2b3940;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:20px;line-height:120%;}#i0uyj{margin:0;}#i8mza{color:#2b3940;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;line-height:150%;}#idxsu{margin:0;}#ikqvy{border-top:1px solid #E9EBEB;width:100%;}#i7lon{color:#7e8989;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;line-height:150%;}#izin4{margin:0;}#irsjw{background-color:#f75c03;border-radius:3px;color:#ffffff;display:inline-block;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;padding:5px 20px;text-align:center;text-decoration:none;}#iaaac{display:flex;align-items:center;justify-content:center;margin:0 auto;margin-bottom:20px;}#ik8qk{width:100%;}#ikpkl{font-weight:400;text-align:left;background-color:#ffffff;border:10px solid #F6F8F8;vertical-align:top;}#iuoq8{width:100%;}#iydkk{padding:16px;}#iacw3{display:block;height:auto;border:0;width:100%;}#i2ueq{width:100%;}#in9ku{padding:16px 24px;text-align:left;}#in5en{background-color:#e5f7f1;border-radius:3px;color:#00b074;display:inline-block;font-family:Montserrat, sans-serif;font-size:12px;padding:1px 10px;text-align:center;text-decoration:none;}#i9dq1{font-size:16px;line-height:2;}#i17jg{padding:10px 24px 5px;}#iupbr{color:#2b3940;font-family:Montserrat, sans-serif;font-size:24px;line-height:120%;}#i3497{padding:0 24px 15px;}#i2zkg{color:#2b3940;font-family:Montserrat, sans-serif;font-size:16px;line-height:180%;}#ipxixl{padding:5px 24px;}#ij1l7i{color:#7e8989;font-family:Montserrat, sans-serif;font-size:14px;line-height:180%;}#i8l2pl{padding:20px 24px;}#ibcapt{border-top:1px solid #E9EBEB;}#i69dym{padding:5px 24px 10px;}#iosnln{color:#7e8989;font-family:Montserrat, sans-serif;font-size:14px;line-height:150%;}#i2cqhf{padding:20px 24px 32px;text-align:left;}#ie1euh{background-color:#f75c03;border-radius:3px;color:#ffffff;display:inline-block;font-family:Montserrat, sans-serif;font-size:14px;padding:5px 20px;text-align:center;text-decoration:none;}#io30ci{width:100%;}#ipywhj{font-weight:400;text-align:left;background-color:#ffffff;border:10px solid #F6F8F8;vertical-align:top;}#id38xs{width:100%;}#i8obif{padding:16px;}#i2jlbk{display:block;height:auto;border:0;width:100%;}#ipttd5{width:100%;}#injwyt{padding:16px 24px;text-align:left;}#i8b43g{background-color:#e5f7f1;border-radius:3px;color:#00b074;display:inline-block;font-family:Montserrat, sans-serif;font-size:12px;padding:1px 10px;text-align:center;text-decoration:none;}#iuiem9{font-size:16px;line-height:2;}#ifl9sg{padding:10px 24px 5px;}#iroox8{color:#2b3940;font-family:Montserrat, sans-serif;font-size:24px;line-height:120%;}#i788z2{padding:0 24px 15px;}#inc2bh{color:#2b3940;font-family:Montserrat, sans-serif;font-size:16px;line-height:180%;}#ialfjj{padding:5px 24px;}#iapf3i{color:#7e8989;font-family:Montserrat, sans-serif;font-size:14px;line-height:180%;}#izbvli{padding:20px 24px;}#isdfre{border-top:1px solid #E9EBEB;}#i4zl1j{padding:5px 24px 10px;}#icb333{color:#7e8989;font-family:Montserrat, sans-serif;font-size:14px;line-height:150%;}#im28q2{padding:20px 24px 32px;text-align:left;}#i6jslt{background-color:#f75c03;border-radius:3px;color:#ffffff;display:inline-block;font-family:Montserrat, sans-serif;font-size:14px;padding:5px 20px;text-align:center;text-decoration:none;}@media only screen and (max-width: 700px){.container{width:100% !important;}.flex-container{flex-direction:column !important;align-items:center !important;}.image-container-card{max-width:100% !important;padding-top:0px !important;padding-right:16px !important;padding-bottom:0px !important;padding-left:16px !important;text-align:center !important;margin-bottom:16px;}.content-container{max-width:100% !important;padding-top:0px !important;padding-right:16px !important;padding-bottom:0px !important;padding-left:0px !important;text-align:center !important;}.button{width:100% !important;text-align:center !important;}.row{flex-direction:column;width:100%;}}@media only screen and (min-width: 700px){.row.layout2{width:60%;}}@media (max-width: 650px){.desktop_hide table.icons-inner, .social_block.desktop_hide .social-table{display:inline-block !important;}.icons-inner td{margin-top:0px;margin-right:auto;margin-bottom:0px;margin-left:auto;}.image_block div.fullWidth{max-width:100% !important;}.row-content{width:100% !important;}.stack .column{width:100%;display:block;}.desktop_hide, .desktop_hide table{display:table !important;max-height:none !important;}}</style>
        <div id="editor">
          <body><table width="550" class="row-content" id="ikx5"><tbody><tr><td width="50%" class="column column-1" id="im0gy"><table width="100%" class="image_block block-1"><tbody><tr><td class="pad" id="i23qn"><div align="left" class="alignment" id="i4mwu"><div id="i04e8"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1661/logo_airline.png" width="68.75" alt="Alternate text" title="Alternate text" height="auto" id="iofg9"/></div></div></td></tr></tbody></table></td><td width="50%" class="column column-2" id="iypqm"><table width="100%" border="0" cellpadding="10" class="paragraph_block block-1" id="ir6pn"><tbody><tr><td class="pad"><div id="iy012"><p id="iog4h">James Brown</p><p id="izx0p">Member Nr. <span id="i7wh3"><strong>688969807</strong></span> | Level <span id="iemwl"><strong>Basic</strong></span></p><p id="i43l9">Reward Points <strong><span id="iyv8l">2000</span></strong></p></div></td></tr></tbody></table></td></tr></tbody></table><table width="100%" cellpadding="0" cellspacing="0" border="0" id="in06d"><tbody><tr><td align="center"><table width="640" cellpadding="0" cellspacing="0" border="0" class="container" id="isq8t"><tbody><tr><td><div class="flex-container" id="ie84q"><div class="image-container-card" id="i9lbj"><div id="i0eof"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1161/thumb1.jpg" alt="Apartment Image" title="Apartment Image" id="isrz5"/></div></div><div class="content-container" id="ic6il"><div><div id="i5xgv"><p id="i0uyj"><strong>$475,000</strong></p></div></div><div><div id="i8mza"><p id="idxsu"><strong class="name">Apartament in Miami</strong></p></div></div><div><div id="ikqvy"></div></div><div><div id="i7lon"><p id="izin4">5 Bedrooms, 2 Bathrooms, 1075 sq.f.</p></div></div><div><a href="#" class="button" id="irsjw"><strong>View Property</strong></a></div></div></div></td></tr></tbody></table></td></tr></tbody></table><div class="row layout2" id="iaaac"><table width="100%" border="0" cellpadding="0" class="column" id="ik8qk"><tbody><tr><td id="ikpkl"><div class="image-block" id="iuoq8"><div class="pad" id="iydkk"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1161/Img8.jpg" alt="Image" width="268" height="auto" id="iacw3"/></div></div><div class="button-block" id="i2ueq"><div class="pad" id="in9ku"><div class="button" id="in5en"><span id="i9dq1"><strong>JUST LISTED</strong></span></div></div></div><div class="price-block" id="i17jg"><div id="iupbr"><strong>$475,000</strong></div></div><div class="name-block" id="i3497"><div id="i2zkg"><strong class="name">Springfield Gardens, New York</strong></div></div><div class="description-block" id="ipxixl"><div id="ij1l7i">
              Quisque vitae tristique sem. Nullam vulputate nisi sed purus pulvinar dictum. Vestibulum ante ipsum.
            </div></div><div class="divider-block" id="i8l2pl"><div id="ibcapt"></div></div><div class="details-block" id="i69dym"><div id="iosnln">
              5 Bedrooms, 2 Bathrooms, 1075 sq.f.
            </div></div><div class="contact-block" id="i2cqhf"><div class="button" id="ie1euh"><strong>Contact Us</strong></div></div></td></tr></tbody></table><table width="100%" border="0" cellpadding="0" class="column" id="io30ci"><tbody><tr><td id="ipywhj"><div class="image-block" id="id38xs"><div class="pad" id="i8obif"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1161/Img8.jpg" alt="Image" width="268" height="auto" id="i2jlbk"/></div></div><div class="button-block" id="ipttd5"><div class="pad" id="injwyt"><div class="button" id="i8b43g"><span id="iuiem9"><strong>JUST LISTED</strong></span></div></div></div><div class="price-block" id="ifl9sg"><div id="iroox8"><strong>$475,000</strong></div></div><div class="name-block" id="i788z2"><div id="inc2bh"><strong class="name">Springfield Gardens, New York</strong></div></div><div class="description-block" id="ialfjj"><div id="iapf3i">
              Quisque vitae tristique sem. Nullam vulputate nisi sed purus pulvinar dictum. Vestibulum ante ipsum.
            </div></div><div class="divider-block" id="izbvli"><div id="isdfre"></div></div><div class="details-block" id="i4zl1j"><div id="icb333">
              5 Bedrooms, 2 Bathrooms, 1075 sq.f.
            </div></div><div class="contact-block" id="im28q2"><div class="button" id="i6jslt"><strong>Contact Us</strong></div></div></td></tr></tbody></table></div></body>
        </div>
      
`,
    category: "Custom",
  },
  {
    name: "example2",
    label: "Example email 2",
    content: `
        
        <style>* { box-sizing: border-box; } body {margin: 0;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;}a[x-apple-data-detectors]{color:inherit !important;text-decoration-line:inherit !important;text-decoration-thickness:inherit !important;text-decoration-style:inherit !important;text-decoration-color:inherit !important;}#MessageViewBody a{color:inherit;text-decoration-line:none;text-decoration-thickness:initial;text-decoration-style:initial;text-decoration-color:initial;}p{line-height:inherit;}.desktop_hide, .desktop_hide table{display:none;max-height:0px;overflow-x:hidden;overflow-y:hidden;}.image_block img + div{display:none;}sup, sub{font-size:75%;line-height:0;}#ik0j{color:#000000;width:550px;margin:0 auto;}#iun2i{font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0px;border-right:0px;border-bottom:0px;border-left:0px;}#i2o29{padding-left:25px;width:100%;padding-right:0px;}#irtow{line-height:10px;}#ip1sb{max-width:68.75px;}#iptsj{display:block;height:auto;border:0;width:100%;}#i2d6r{font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0px;border-right:0px;border-bottom:0px;border-left:0px;}#i16ty{word-break:break-word;}#i14qf{color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;line-height:120%;text-align:right;mso-line-height-alt:14.399999999999999px;}#il1mo{margin:0;word-break:break-word;}#iryua{margin:0;word-break:break-word;}#iv4qx{word-break:break-word;color:#ea5256;}#iudt9{word-break:break-word;color:#ea5256;}#iv3sc{margin:0;word-break:break-word;}#ino4j{word-break:break-word;color:#ea5256;}#ixerg{margin-bottom:20px;}#il27m{max-width:640px;margin:0 auto;background-color:#ffffff;color:#000000;border-radius:8px;overflow:hidden;}#ig08a{display:flex;align-items:center;}#i8lhq{flex:1;max-width:33.333%;}#ies7k{text-align:center;}#igbrf{display:block;height:auto;border:0;width:100%;max-width:181.333px;border-radius:8px;}#i53zj{flex:2;max-width:66.666%;padding-left:16px;display:flex;flex-direction:column;gap:12px;}#iwm6s{color:#2b3940;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:20px;line-height:120%;}#i9v2s{margin:0;}#i12dt{color:#2b3940;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;line-height:150%;}#i8emu{margin:0;}#ibtvw{border-top:1px solid #E9EBEB;width:100%;}#iwvoj{color:#7e8989;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;line-height:150%;}#ie3e5{margin:0;}#i0yjw{background-color:#f75c03;border-radius:3px;color:#ffffff;display:inline-block;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;padding:5px 20px;text-align:center;text-decoration:none;}#i2lzd{margin-bottom:20px;}#i2xyg{max-width:640px;margin:0 auto;background-color:#ffffff;color:#000000;border-radius:8px;overflow:hidden;}#iz9xv{display:flex;align-items:center;}#iat3e{flex:1;max-width:33.333%;}#ik5yl{text-align:center;}#ixt2r{display:block;height:auto;border:0;width:100%;max-width:181.333px;border-radius:8px;}#ik3f3{flex:2;max-width:66.666%;padding-left:16px;display:flex;flex-direction:column;gap:12px;}#igusi{color:#2b3940;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:20px;line-height:120%;}#ixtx7{margin:0;}#im8bll{color:#2b3940;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;line-height:150%;}#isdnag{margin:0;}#iiq7fm{border-top:1px solid #E9EBEB;width:100%;}#i3iggf{color:#7e8989;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;line-height:150%;}#ibf6hm{margin:0;}#il7xwj{background-color:#f75c03;border-radius:3px;color:#ffffff;display:inline-block;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;padding:5px 20px;text-align:center;text-decoration:none;}#itvdjs{margin-bottom:20px;}#isq96k{max-width:640px;margin:0 auto;background-color:#ffffff;color:#000000;border-radius:8px;overflow:hidden;}#ib1pqh{display:flex;align-items:center;}#igxtpp{flex:1;max-width:33.333%;}#i3067y{text-align:center;}#i99cmt{display:block;height:auto;border:0;width:100%;max-width:181.333px;border-radius:8px;}#icaqvu{flex:2;max-width:66.666%;padding-left:16px;display:flex;flex-direction:column;gap:12px;}#indpz9{color:#2b3940;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:20px;line-height:120%;}#ijexrl{margin:0;}#iapktf{color:#2b3940;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;line-height:150%;}#ixf8od{margin:0;}#iu4dzw{border-top:1px solid #E9EBEB;width:100%;}#ijjo3e{color:#7e8989;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;line-height:150%;}#i8549i{margin:0;}#iq3n3i{background-color:#f75c03;border-radius:3px;color:#ffffff;display:inline-block;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;padding:5px 20px;text-align:center;text-decoration:none;}@media only screen and (max-width: 700px){.container{width:100% !important;}.flex-container{flex-direction:column !important;align-items:center !important;}.image-container-card{max-width:100% !important;padding-top:0px !important;padding-right:16px !important;padding-bottom:0px !important;padding-left:16px !important;text-align:center !important;margin-bottom:16px;}.content-container{max-width:100% !important;padding-top:0px !important;padding-right:16px !important;padding-bottom:0px !important;padding-left:0px !important;text-align:center !important;}.button{width:100% !important;text-align:center !important;}}@media (max-width: 650px){.desktop_hide table.icons-inner, .social_block.desktop_hide .social-table{display:inline-block !important;}.icons-inner td{margin-top:0px;margin-right:auto;margin-bottom:0px;margin-left:auto;}.image_block div.fullWidth{max-width:100% !important;}.row-content{width:100% !important;}.stack .column{width:100%;display:block;}.desktop_hide, .desktop_hide table{display:table !important;max-height:none !important;}}</style>
        <div id="editor">
          <body><table width="550" class="row-content" id="ik0j"><tbody><tr><td width="50%" class="column column-1" id="iun2i"><table width="100%" class="image_block block-1"><tbody><tr><td class="pad" id="i2o29"><div align="left" class="alignment" id="irtow"><div id="ip1sb"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1661/logo_airline.png" width="68.75" alt="Alternate text" title="Alternate text" height="auto" id="iptsj"/></div></div></td></tr></tbody></table></td><td width="50%" class="column column-2" id="i2d6r"><table width="100%" border="0" cellpadding="10" class="paragraph_block block-1" id="i16ty"><tbody><tr><td class="pad"><div id="i14qf"><p id="il1mo">James Brown</p><p id="iryua">Member Nr. <span id="iv4qx"><strong>688969807</strong></span> | Level <span id="iudt9"><strong>Basic</strong></span></p><p id="iv3sc">Reward Points <strong><span id="ino4j">2000</span></strong></p></div></td></tr></tbody></table></td></tr></tbody></table><table width="100%" cellpadding="0" cellspacing="0" border="0" id="ixerg"><tbody><tr><td align="center"><table width="640" cellpadding="0" cellspacing="0" border="0" class="container" id="il27m"><tbody><tr><td><div class="flex-container" id="ig08a"><div class="image-container-card" id="i8lhq"><div id="ies7k"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1161/thumb1.jpg" alt="Apartment Image" title="Apartment Image" id="igbrf"/></div></div><div class="content-container" id="i53zj"><div><div id="iwm6s"><p id="i9v2s"><strong>$475,000</strong></p></div></div><div><div id="i12dt"><p id="i8emu"><strong class="name">Apartament in Miami</strong></p></div></div><div><div id="ibtvw"></div></div><div><div id="iwvoj"><p id="ie3e5">5 Bedrooms, 2 Bathrooms, 1075 sq.f.</p></div></div><div><a href="#" class="button" id="i0yjw"><strong>View Property</strong></a></div></div></div></td></tr></tbody></table></td></tr></tbody></table><table width="100%" cellpadding="0" cellspacing="0" border="0" id="i2lzd"><tbody><tr><td align="center" id="i8oef"><table width="640" cellpadding="0" cellspacing="0" border="0" class="container" id="i2xyg"><tbody><tr><td><div class="flex-container" id="iz9xv"><div class="image-container-card" id="iat3e"><div id="ik5yl"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1161/thumb1.jpg" alt="Apartment Image" title="Apartment Image" id="ixt2r"/></div></div><div class="content-container" id="ik3f3"><div><div id="igusi"><p id="ixtx7"><strong>$475,000</strong></p></div></div><div><div id="im8bll"><p id="isdnag"><strong class="name">Apartament in Miami</strong></p></div></div><div><div id="iiq7fm"></div></div><div><div id="i3iggf"><p id="ibf6hm">5 Bedrooms, 2 Bathrooms, 1075 sq.f.</p></div></div><div><a href="#" class="button" id="il7xwj"><strong>View Property</strong></a></div></div></div></td></tr></tbody></table></td></tr></tbody></table><table width="100%" cellpadding="0" cellspacing="0" border="0" id="itvdjs"><tbody><tr><td align="center"><table width="640" cellpadding="0" cellspacing="0" border="0" class="container" id="isq96k"><tbody><tr><td><div class="flex-container" id="ib1pqh"><div class="image-container-card" id="igxtpp"><div id="i3067y"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1161/thumb1.jpg" alt="Apartment Image" title="Apartment Image" id="i99cmt"/></div></div><div class="content-container" id="icaqvu"><div><div id="indpz9"><p id="ijexrl"><strong>$475,000</strong></p></div></div><div><div id="iapktf"><p id="ixf8od"><strong class="name">Apartament in Miami</strong></p></div></div><div><div id="iu4dzw"></div></div><div><div id="ijjo3e"><p id="i8549i">5 Bedrooms, 2 Bathrooms, 1075 sq.f.</p></div></div><div><a href="#" class="button" id="iq3n3i"><strong>View Property</strong></a></div></div></div></td></tr></tbody></table></td></tr></tbody></table></body>
        </div>
      
      
`,
    category: "Custom",
  },
];
