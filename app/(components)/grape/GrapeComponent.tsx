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
import { AnyAaaaRecord } from "dns";
const GrapeComponent = () => {
  const apiData = {
    name: "John Doe",
    time: "September 7, 2022 at 10:58 AM",
    device: "Chrome on Mac OS X",
    location: "Upland, California, United States",
    ip: "47.149.53.167",
  };
  function replaceTemplateValues(template: any, data: any) {
    let updatedTemplate = template;

    for (const [key, value] of Object.entries(data)) {
      updatedTemplate = updatedTemplate.split(`${key}`).join(value);
    }

    return updatedTemplate;
  }
  const content = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
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
                              Hi, ${"name"}
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
                              <b>Time: </b>${"time"}
                            </p>
                            <p
                              style="
                                font-size: 16px;
                                line-height: 24px;
                                margin: 16px 0;
                                margin-top: -5px;
                              "
                            >
                              <b>Device: </b>${"device"}
                            </p>
                            <p
                              style="
                                font-size: 16px;
                                line-height: 24px;
                                margin: 16px 0;
                                margin-top: -5px;
                              "
                            >
                              <b>Location: </b>${"location"}
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
                              address:${"ip"}
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
  const [editor, setEditor] = useState<Editor | null>();
  const [selectId, setSelectedId] = useState<string>("");
  const [selectElement, setSelectedElement] = useState<Component | null>();
  //dựa vao cài này để call api
  const [textInput, setTextInput] = useState("");
  const dataName = "Manh 2222";
  const debouncedInputValue = useDebounce(textInput, 500);

  const windowWidth = useWindowWidth();
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      width: windowWidth > 1200 ? String(windowWidth * 0.8) : "100%",
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

        return el;
      },
    });
    editor.on("component:selected", (component) => {
      const domElement = component.getEl();
      setSelectedElement(domElement);
      if (component.get("tagName") === "table") {
        component.set({
          traits: [
            {
              type: "live-input",
              name: "Input",
              label: "Input",
              placeholder: "Nhập...",
            },
          ],
        });
      }
    });

    editor.BlockManager.add("section", {
      label: "Section",
      content: replaceTemplateValues(content, apiData),
      category: "Custom",
    });
    editor.BlockManager.add("policy", {
      label: "Policy",
      content: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <link
      rel="preload"
      as="image"
      href="https://react-email-demo-lpdmf0ryo-resend.vercel.app/static/google-play-header.png"
    />
    <link
      rel="preload"
      as="image"
      href="https://react-email-demo-lpdmf0ryo-resend.vercel.app/static/google-play-logo.png"
    />
    <link
      rel="preload"
      as="image"
      href="https://react-email-demo-lpdmf0ryo-resend.vercel.app/static/google-play-chat.png"
    />
    <link
      rel="preload"
      as="image"
      href="https://react-email-demo-lpdmf0ryo-resend.vercel.app/static/google-play-icon.png"
    />
    <link
      rel="preload"
      as="image"
      href="https://react-email-demo-lpdmf0ryo-resend.vercel.app/static/google-play-academy.png"
    />
    <link
      rel="preload"
      as="image"
      href="https://react-email-demo-lpdmf0ryo-resend.vercel.app/static/google-play-footer.png"
    />
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <!--$-->
  </head>
  <div
    style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0"
  >
    Google Play developers
    <div>
       ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
    </div>
  </div>
  <table
    style='background-color:#dbddde;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
  >
    <table
      align="center"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="max-width:37.5em;margin:30px auto;background-color:#fff;border-radius:5px;overflow:hidden"
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
                      <tbody style="width:100%">
                        <tr style="width:100%">
                          <td data-id="__react-email-column">
                            <img
                              alt="Google Play developers header blue transparent"
                              height="28"
                              src="https://react-email-demo-lpdmf0ryo-resend.vercel.app/static/google-play-header.png"
                              style="display:block;outline:none;border:none;text-decoration:none;margin-top:-1px"
                              width="305"
                            /><img
                              alt="Google Play"
                              height="31"
                              src="https://react-email-demo-lpdmf0ryo-resend.vercel.app/static/google-play-logo.png"
                              style="display:block;outline:none;border:none;text-decoration:none;padding:0 40px"
                              width="155"
                            />
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
              style="padding:0 40px"
            >
              <tbody>
                <tr>
                  <td>
                    <hr
                      style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#e8eaed;margin:20px 0"
                    />
                    <p
                      style="font-size:14px;line-height:26px;margin:16px 0;font-weight:700;color:#004dcf"
                    >
                      DEVELOPER UPDATE
                    </p>
                    <p
                      style="font-size:14px;line-height:22px;margin:16px 0;color:#3c4043"
                    >
                      Hello Google Play Developer,
                    </p>
                    <p
                      style="font-size:14px;line-height:22px;margin:16px 0;color:#3c4043"
                    >
                      We strive to make Google Play a safe and trusted
                      experience for users.
                    </p>
                    <p
                      style="font-size:14px;line-height:22px;margin:16px 0;color:#3c4043"
                    >
                      We&#x27;ve added clarifications to our<!-- -->
                      <a
                        href="https://notifications.google.com"
                        style="color:#004dcf;text-decoration-line:none;font-size:14px;line-height:22px"
                        target="_blank"
                        >Target API Level policy</a
                      >. Because this is a clarification, our enforcement
                      standards and practices for this policy remain the same.
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
              style="padding-left:40px"
            >
              <tbody>
                <tr>
                  <td>
                    <p
                      style="font-size:14px;line-height:22px;margin:16px 0;color:#3c4043"
                    >
                      We’re noting exceptions to the<!-- -->
                      <a
                        href="https://notifications.google.com"
                        style="color:#004dcf;text-decoration-line:none;font-size:14px;line-height:22px"
                        target="_blank"
                        >Target API Level policy</a
                      >, which can be found in our updated<!-- -->
                      <a
                        href="https://notifications.google.com"
                        style="color:#004dcf;text-decoration-line:none;font-size:14px;line-height:22px"
                        target="_blank"
                        >Help Center article.</a
                      >These exceptions include permanently private apps and
                      apps that target automotive or wearables form factors and
                      are bundled within the same package.<!-- -->
                      <a
                        href="https://notifications.google.com"
                        style="color:#004dcf;text-decoration-line:none;font-size:14px;line-height:22px"
                        target="_blank"
                        >Learn more</a
                      >
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
              style="padding:0 40px"
            >
              <tbody>
                <tr>
                  <td>
                    <p
                      style="font-size:14px;line-height:22px;margin:16px 0;color:#3c4043"
                    >
                      We’re also extending the deadline to give you more time to
                      adjust to these changes. Now, apps that target API level
                      29 or below will start experiencing reduced distribution
                      starting <b>Jan 31, 2023</b>
                      <!-- -->instead of Nov 1, 2022. If you need more time to
                      update your app, you can request an extension to keep your
                      app discoverable to all users until May 1, 2023.
                    </p>
                    <hr
                      style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#e8eaed;margin:20px 0"
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
              style="padding:0 40px"
            >
              <tbody>
                <tr>
                  <td>
                    <p
                      style="font-size:14px;line-height:22px;margin:16px 0;color:#3c4043"
                    >
                      Thank you,
                    </p>
                    <p
                      style="font-size:20px;line-height:22px;margin:16px 0;color:#3c4043"
                    >
                      The Google Play team
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
              style="background-color:#f0fcff;width:90%;border-radius:5px;overflow:hidden;padding-left:20px"
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
                      <tbody style="width:100%">
                        <tr style="width:100%">
                          <p
                            style="font-size:14px;line-height:22px;margin:16px 0;color:#3c4043"
                          >
                            Connect with us
                          </p>
                        </tr>
                      </tbody>
                    </table>
                    <table
                      align="left"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="width:84px;float:left"
                    >
                      <tbody style="width:100%">
                        <tr style="width:100%">
                          <td
                            data-id="__react-email-column"
                            style="padding-right:4px"
                          >
                            <a
                              href="https://notifications.google.com"
                              style="color:#067df7;text-decoration-line:none"
                              target="_blank"
                              ><img
                                height="28"
                                src="https://react-email-demo-lpdmf0ryo-resend.vercel.app/static/google-play-chat.png"
                                style="display:block;outline:none;border:none;text-decoration:none"
                                width="28"
                            /></a>
                          </td>
                          <td
                            data-id="__react-email-column"
                            style="padding-right:4px"
                          >
                            <a
                              href="https://notifications.google.com"
                              style="color:#067df7;text-decoration-line:none"
                              target="_blank"
                              ><img
                                height="28"
                                src="https://react-email-demo-lpdmf0ryo-resend.vercel.app/static/google-play-icon.png"
                                style="display:block;outline:none;border:none;text-decoration:none"
                                width="28"
                            /></a>
                          </td>
                          <td
                            data-id="__react-email-column"
                            style="padding-right:4px"
                          >
                            <a
                              href="https://notifications.google.com"
                              style="color:#067df7;text-decoration-line:none"
                              target="_blank"
                              ><img
                                height="28"
                                src="https://react-email-demo-lpdmf0ryo-resend.vercel.app/static/google-play-academy.png"
                                style="display:block;outline:none;border:none;text-decoration:none"
                                width="28"
                            /></a>
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
                    >
                      <tbody style="width:100%">
                        <tr style="width:100%">
                          <img
                            height="48"
                            src="https://react-email-demo-lpdmf0ryo-resend.vercel.app/static/google-play-footer.png"
                            style="display:block;outline:none;border:none;text-decoration:none;max-width:100%"
                            width="540"
                          />
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
              style="padding:0 40px;padding-bottom:30px"
            >
              <tbody>
                <tr>
                  <td>
                    <p
                      style="font-size:12px;line-height:22px;margin:0;color:#3c4043;text-align:center"
                    >
                      © 2022 Google LLC 1600 Amphitheatre Parkway, Mountain
                      View, CA 94043, USA
                    </p>
                    <p
                      style="font-size:12px;line-height:22px;margin:0;color:#3c4043;text-align:center"
                    >
                      You have received this mandatory email service
                      announcement to update you about important changes to your
                      Google Play Developer account.
                    </p>
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

      `,
      category: "Custom",
    });
    setEditor(editor);
    return () => {
      editor.destroy();
    };
  }, [dataName, windowWidth]);
  useEffect(() => {
    if (editor && selectElement) {
      const selectedElement = editor.getSelected();
    }
  }, [editor, selectElement]);
  return (
    <div>
      <div id="editor"></div>
    </div>
  );
};
export default GrapeComponent;
