/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import html2canvas from "html2canvas";
import { useEffect } from "react";
import grapesjs, { Editor } from "grapesjs";
import { useState } from "react";
import grapesjsPresetWebpage from "grapesjs-preset-webpage";
import grapesjsBlocksBasic from "grapesjs-blocks-basic";
import useWindowWidth from "@/hooks/useWindowSize";
import { testRequest } from "@/api/test";
import {
  apiData,
  cardContent,
  cardContentTemplate,
  content,
  footer,
  footerContent,
  header,
  heroSection,
  imageText,
  productSection,
  startNow,
  templateCard1,
  layoutCard2,
  textDescription,
  column1Props,
  templateFlight,
  templateCredit,
  flightData,
  templateFakeAPI,
} from "@/app/(components)/grape/content";
type Props = {
  isCreateTemplate?: boolean;
};
const GrapeComponent = ({ isCreateTemplate = true }: Props) => {
  const [editor, setEditor] = useState<Editor | null>();
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleRenderImage = async (htmlContent: string) => {
    try {
      const response = await fetch("/api/render-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ htmlContent }),
      });
      console.log("🚀 ~ handleRenderImage ~ response:", response);

      if (!response.ok) {
        throw new Error("Failed to render image");
      }

      const blob = await response.blob();
      setImageSrc(URL.createObjectURL(blob));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const windowWidth = useWindowWidth();

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      width: windowWidth > 1280 ? String((windowWidth - 300) * 0.9) : "100%",
      height: String(window.innerHeight * 0.8),
      plugins: isCreateTemplate
        ? [grapesjsPresetWebpage, grapesjsBlocksBasic]
        : [grapesjsPresetWebpage],

      storageManager: false,
    });

    const nameInput = document.getElementById("nameInput");
    if (nameInput) {
      nameInput.addEventListener("keydown", (event: KeyboardEvent) => {
        if (event.key === "Enter") {
          const name = (event.target as HTMLInputElement).value;
          const arrayName = name.split(",");
          const components = [];
          for (let i = 0; i < arrayName.length; i++) {
            const data = {
              name: arrayName[i],
              time: "September 7, 2022 at 10:58 AM",
              device: "Chrome on Mac OS X",
              location: "Upland, California, United States",
              ip: "47.149.53.167",
            };
            const template = content(data);
            components.push(template);
          }
          editor.addComponents(components);
          (event.target as HTMLInputElement).value = "";
        }
      });
    }

    const findParentTable = (comp: any) => {
      if (!comp) return null;
      if (comp.get("tagName") === "td") return comp;
      return findParentTable(comp.parent());
    };

    const addCustomCSS = () => {
      editor.CssComposer.getAll().add(`
      .gjs-cell {
        height: auto !important;
        flex-shrink: 0 !important; 
        width: 33.33% !important;
        max-width: 33.33% !important;
      }


      @media (max-width: 768px) {
        .gjs-cell {
          width: 100% !important; 
          max-width: 100%   !important; 
        } 
      }
    `);
    };

    addCustomCSS();

    editor.on("load", addCustomCSS);
    editor.on(
      "component:add component:update component:drag:stop",
      addCustomCSS
    );
    editor.on("device:change", addCustomCSS);

    const getEditorHTMLAndCSS = () => {
      const html = editor.getHtml();
      const css = editor.getCss();
      const combinedContent = `
        <style>${css}</style>
        <div id="editor">
          ${html}
        </div>
      `;
      return combinedContent;
    };

    const handleExportEditorHTMLAndCSS = () => {
      const content = getEditorHTMLAndCSS();
      handleRenderImage(content);
    };

    const exportButton = document.getElementById("exportEditorHtmlCssButton");
    if (exportButton) {
      exportButton.addEventListener("click", handleExportEditorHTMLAndCSS);
    }

    if (!isCreateTemplate) {
      editor.on("load", () => {
        const panelManager = editor.Panels;
        panelManager.removeButton("views", "open-blocks");
        const blockPanel = document.querySelector(
          ".gjs-blocks-cs"
        ) as HTMLElement;
        if (blockPanel) {
          blockPanel.style.display = "none";
        }
      });
      editor.TraitManager.addType("live-input", {
        createInput({ trait }: any) {
          const el = document.createElement("input");
          el.type = "text";
          el.placeholder = trait.get("placeholder") || "";

          el.addEventListener("input", (event: Event) => {
            const value = (event.target as HTMLInputElement).value;
            trait.set("value", value);
          });

          el.addEventListener("keydown", async (event: KeyboardEvent) => {
            if (event.key === "Enter") {
              const selectedId = trait.get("selectedId");

              const wrapper = editor?.getWrapper();
              const tableId = wrapper?.find(`#${selectedId}`)[0];
              const res = await testRequest.getTest(trait.get("value"));
              const tmp = res?.data.data.first_name;
              const tmpData = {
                name: `${tmp}`,
                time: "September 7, 2022 at 10:58 AM",
                device: "Chrome on Mac OS X",
                location: "Upland, California, United States",
                ip: "47.149.53.167",
              };
              for (const [key, value] of Object.entries(tmpData)) {
                const spanComponents = tableId?.find(`[class="${key}"]`)[0];
                if (spanComponents) {
                  const currentContent = spanComponents.get("content");
                  spanComponents.components(`${currentContent} ${value}`);
                }
              }
              trait.set("value", "");
              el.value = "";
            }
          });

          return el;
        },
      });

      editor.on("component:selected", (component) => {
        const parentTable = findParentTable(component);

        if (parentTable) {
          component.set({
            traits: [
              {
                type: "live-input",
                name: "Input",
                label: "Input",
                placeholder: "Nhập...",
                selectedId: parentTable.getId(),
              },
            ],
          });
        }
      });
    }

    if (isCreateTemplate) {
      editor.BlockManager.add("section", {
        label: "Section",
        content: content(apiData),
        category: "Custom",
      });
      editor.BlockManager.add("Header", {
        label: "Header",
        content: header(),
        category: "Custom",
      });
      editor.BlockManager.add("heroSection", {
        label: "heroSection",
        content: heroSection(),
        category: "Custom",
      });
      editor.BlockManager.add("productSection", {
        label: "productSection",
        content: productSection(),
        category: "Custom",
      });
      editor.BlockManager.add("footer", {
        label: "footer",
        content: footer(),
        category: "Custom",
      });
      editor.BlockManager.add("templateCard1", {
        label: "templateCard1",
        content: templateCard1(cardContentTemplate),
        category: "Custom",
      });

      editor.BlockManager.add("layoutCard2", {
        label: "layoutCard2",
        content: layoutCard2(column1Props),
        category: "Custom",
      });
      editor.BlockManager.add("startNow", {
        label: "startNow",
        content: startNow(),
        category: "Custom",
      });
      editor.BlockManager.add("textDescription", {
        label: "textDescription",
        content: textDescription(),
        category: "Custom",
      });
      editor.BlockManager.add("imageText", {
        label: "imageText",
        content: imageText(),
        category: "Custom",
      });
      editor.BlockManager.add("templateFlight", {
        label: "templateFlight",
        content: templateFlight(flightData),
        category: "Custom",
      });
      editor.BlockManager.add("templateCredit", {
        label: "templateCredit",
        content: templateCredit(),
        category: "Custom",
      });

      editor.BlockManager.add("card-content", {
        label: "Card Content",
        content: cardContent(cardContentTemplate),
        category: "Custom",
        media: `<div style="display:flex; align-items:center; justify-content:center  ">
      <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 24 24" fill="none">
        <path d="M14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2.32803 6.01511 2.09185 7.22882 2.02572 9.25H21.9743C21.9082 7.22882 21.672 6.01511 20.8284 5.17157C19.6569 4 17.7712 4 14 4Z" fill="#B9A5A6"/>
        <path d="M10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 11.5581 22 11.142 21.9981 10.75H2.00189C2 11.142 2 11.5581 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20Z" fill="#B9A5A6"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H10C10.4142 15.25 10.75 15.5858 10.75 16C10.75 16.4142 10.4142 16.75 10 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.75 16C11.75 15.5858 12.0858 15.25 12.5 15.25H14C14.4142 15.25 14.75 15.5858 14.75 16C14.75 16.4142 14.4142 16.75 14 16.75H12.5C12.0858 16.75 11.75 16.4142 11.75 16Z" fill="white"/>
      </svg>
    </div>`,
      });

      editor.BlockManager.add("footer-content", {
        label: "Footer Content",
        content: footerContent(),
        category: "Custom",
        media: `<div style="display:flex; align-items:center; justify-content:center  ">
      <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 24 24" fill="#B9A5A6">
        <path d="M2 5h20v14H2V5zm2 2v6h16V7H4zm16 8H4v2h16v-2z" fill="#B9A5A6"/>
      </svg>
    </div>`,
      });
    } else {
      // editor.addComponents(`
      //   <div style="padding: 20px; background: #f0f0f0;">
      //     <h1>Hello, World!</h1>
      //     <p>This is a custom component.</p>
      //   </div>
      // `);
      editor.BlockManager.getAll().forEach((block: any) => {
        if (block) {
          if (block.changed.category.id === "Basic") {
            editor.BlockManager.remove(block.getId());
          }
        }
      });
      templateFakeAPI.forEach((item) => {
        editor.BlockManager.add(item.name, {
          label: item.label,
          content: item.content,
          category: item.category,
          media: `<div style="display:flex; align-items:center; justify-content:center  ">
      <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 24 24" fill="#B9A5A6">
        <path d="M2 5h20v14H2V5zm2 2v6h16V7H4zm16 8H4v2h16v-2z" fill="#B9A5A6"/>
      </svg>
    </div>`,
        });
      });
    }

    setEditor(editor);
    return () => {
      editor.destroy();
      document
        .getElementById("exportEditorHtmlCssButton")
        ?.removeEventListener("click", handleExportEditorHTMLAndCSS);
      if (nameInput) {
        nameInput.removeEventListener("keydown", () => {});
      }
    };
  }, [windowWidth]);

  return (
    <div>
      <div id="editor"></div>
      {isCreateTemplate && (
        <button id="exportEditorHtmlCssButton">Export HTML</button>
      )}
      <input
        type="text"
        id="nameInput"
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        placeholder="Nhập tên người và nhấn Enter"
      />
    </div>
  );
};
export default GrapeComponent;
