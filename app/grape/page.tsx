/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useEffect } from "react";
import grapesjs, { Editor } from "grapesjs";

import { useState } from "react";
import grapesjsPresetWebpage from "grapesjs-preset-webpage";
import grapesjsBlocksBasic from "grapesjs-blocks-basic";
import grapesjsPresetNewsletter from "grapesjs-preset-newsletter";
import grapesjsComponentCountdown from "grapesjs-component-countdown";
import grapesjsPluginForms from "grapesjs-plugin-forms";
function GrapePage() {
  const [editor, setEditor] = useState<Editor | null>();

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      width: "80vw",
      height: "80vh",

      plugins: [
        grapesjsPresetWebpage,
        grapesjsBlocksBasic,
        grapesjsPresetNewsletter,
        grapesjsComponentCountdown,
        grapesjsPluginForms,
      ],
      pluginsOpts: {
        grapesjsPresetWebpage: {},
        grapesjsBlocksBasic: {},
        grapesjsPresetNewsletter: {},
        grapesjsComponentCountdown: {},
        grapesjsPluginForms: {},
      },
    });
    editor.DomComponents.addType("link", {
      model: {
        defaults: {
          tagName: "a",
          traits: [
            {
              type: "select",
              name: "title",
              label: "Title",
              options: [
                { id: "1", value: "Home", name: "Home" },
                { id: "2", value: "About Us", name: "About Us" },
                { id: "3", value: "Contact", name: "Contact" },
                { id: "4", value: "Blog", name: "Blog" },
              ],
              default: "Home",
            },
            {
              type: "select",
              name: "href",
              label: "Href",
              //   options: [
              //     { value: "/", name: "Trang chủ" },
              //     { value: "/about", name: "Giới thiệu" },
              //     { value: "/contact", name: "Liên hệ" },
              //     { value: "/blog", name: "Blog" },
              //   ],
              //   default: "/",
            },
            {
              type: "select",
              name: "target",
              label: "Target",
              options: [
                { id: "1", value: "_self", name: "This window" },
                { id: "2", value: "_blank", name: "New window" },
              ],
            },
          ],
          attributes: { href: "/", title: "Home" },
        },
      },
    });

    setEditor(editor);
  }, []);
  return (
    <div className="">
      <div id="editor"></div>
    </div>
  );
}

export default GrapePage;
