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
// import "";
const GrapeComponent = () => {
  const [editor, setEditor] = useState<Editor | null>();
  //dựa vao cài này để call api
  const [textInput, setTextInput] = useState("");
  const debouncedInputValue = useDebounce(textInput, 500);
  const [templateSection, setTemplateSection] = useState("");
  useEffect(() => {
    const fetchHtml = async () => {
      const response = await fetch("/api/read-file", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Manh",
          pathName: "section.ejs",
        }),
      });
      if (response.ok) {
        const text = await response.text();
        setTemplateSection("`" + `${text}` + "`");
      } else {
        console.error(response);
      }
    };

    fetchHtml();
  }, []);
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
      console.log("🚀 ~ editor.on ~ component:", component);
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
      content: templateSection,
      category: "Custom",
    });

    setEditor(editor);
    return () => {
      editor.destroy();
    };
  }, [templateSection, windowWidth]);
  return (
    <div>
      <div id="editor"></div>
    </div>
  );
};
export default GrapeComponent;
