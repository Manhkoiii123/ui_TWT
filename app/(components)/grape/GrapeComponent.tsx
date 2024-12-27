/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useEffect } from "react";
import grapesjs, { Component, Editor } from "grapesjs";
import { useState } from "react";
import grapesjsPresetWebpage from "grapesjs-preset-webpage";
import grapesjsBlocksBasic from "grapesjs-blocks-basic";
import useWindowWidth from "@/hooks/useWindowSize";
import useDebounce from "@/hooks/useDebounce";
const GrapeComponent = () => {
  const apiData = {
    name: "John Doe",
    time: "September 7, 2022 at 10:58 AM",
    device: "Chrome on Mac OS X",
    location: "Upland, California, United States",
    ip: "47.149.53.167",
  };
  const apiData2 = {
    name: "John Doe2 ",
    time: "September 7, 2022 at 10:58 AM  22222222",
    device: "Chrome on Mac OS X22222222",
    location: "Upland, California, United States22222222",
    ip: "47.149.53.167222222222",
  };

  const content = (data: any) => {
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
  const [editor, setEditor] = useState<Editor | null>();
  //dựa vao cài này để call api
  const [textInput, setTextInput] = useState("");
  const debouncedInputValue = useDebounce(textInput, 500);

  const windowWidth = useWindowWidth();
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      width: windowWidth > 1280 ? String((windowWidth - 300) * 0.9) : "100%",
      height: String(window.innerHeight * 0.8),
      plugins: [grapesjsPresetWebpage, grapesjsBlocksBasic],
      pluginsOpts: {
        grapesjsPresetWebpage: {},
        grapesjsBlocksBasic: {},
      },
    });
    editor.TraitManager.addType("live-input", {
      createInput({ trait }: any) {
        const el = document.createElement("input");
        el.type = "text";
        el.placeholder = trait.get("placeholder") || "";

        el.addEventListener("input", (event: Event) => {
          const value = (event.target as HTMLInputElement).value;
          trait.set("value", value);
          setTextInput(value);
        });
        el.addEventListener("keydown", (event: KeyboardEvent) => {
          if (event.key === "Enter") {
            const selectedId = trait.get("selectedId");
            const wrapper = editor?.getWrapper();
            const tableId = wrapper?.find(`#${selectedId}`)[0];

            for (const [key, value] of Object.entries(apiData2)) {
              const spanComponents = tableId?.find(`[class="${key}"]`)[0];
              if (spanComponents) {
                const currentContent = spanComponents.get("content");
                spanComponents.components(`${currentContent} ${value}`);
              }
            }
          }
        });

        return el;
      },
    });
    editor.on("component:selected", (component) => {
      const blockId = component.getId();
      if (component.get("tagName") === "table") {
        component.set({
          traits: [
            {
              type: "live-input",
              name: "Input",
              label: "Input",
              placeholder: "Nhập...",
              selectedId: blockId,
            },
          ],
        });
      }
    });

    editor.BlockManager.add("section", {
      label: "Section",
      content: content(apiData),
      category: "Custom",
    });

    setEditor(editor);
    return () => {
      editor.destroy();
    };
  }, [windowWidth]);

  return (
    <div>
      <div id="editor"></div>
    </div>
  );
};
export default GrapeComponent;
