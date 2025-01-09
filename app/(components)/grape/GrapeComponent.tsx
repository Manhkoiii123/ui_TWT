/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import html2canvas from "html2canvas";
import { useEffect } from "react";
import grapesjs, { Editor } from "grapesjs";
import { useState } from "react";
import grapesjsPresetWebpage from "grapesjs-preset-webpage";
import grapesjsBlocksBasic from "grapesjs-blocks-basic";
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
} from "@/app/(components)/grape/content";
import { Button } from "@/components/ui/button";
import {
  useMutationCreateTemplate,
  useMutationEditTemplate,
} from "@/api/templates/templatesApi";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import Loading from "@/components/Loading";
import {
  useMutationRemoveImage,
  useMutationUploadImage,
} from "@/api/upload/uploadApi";
type Props = {
  isCreateTemplate?: boolean;
  templateContent?: string;
  templateName?: string;
  idEdit?: string | null;
  trigger?: any;
  imageUrl?: string;
};
const GrapeComponent = ({
  isCreateTemplate = true,
  templateContent,
  templateName,
  idEdit,
  trigger,
  imageUrl,
}: Props) => {
  const router = useRouter();
  const { toast } = useToast();
  const [editor, setEditor] = useState<Editor | null>();
  const [contentCreateOrEdit, setContentCreateOrEdit] = useState(
    templateContent || ""
  );

  const [isChangeContent, setIsChangeContent] = useState(false);
  function captureHtmlToBlob(htmlContent: string): Promise<Blob> {
    return new Promise((resolve, reject) => {
      const tempDiv = document.createElement("div");
      tempDiv.style.overflow = "hidden";
      tempDiv.style.width = "500px";
      tempDiv.style.height = "500px";
      tempDiv.innerHTML = htmlContent;

      document.body.appendChild(tempDiv);

      html2canvas(tempDiv, {
        scale: window.devicePixelRatio,
        useCORS: true,
        logging: true,
      })
        .then((canvas) => {
          const originalWidth = canvas.width;
          const originalHeight = canvas.height;

          const newWidth = 800;
          const newHeight = (newWidth / originalWidth) * originalHeight;

          const resizedCanvas = document.createElement("canvas");
          resizedCanvas.width = newWidth;
          resizedCanvas.height = newHeight;

          const ctx = resizedCanvas.getContext("2d");
          ctx?.drawImage(canvas, 0, 0, newWidth, newHeight);

          resizedCanvas.toBlob((blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error("Failed to create blob"));
            }
          }, "image/png");

          document.body.removeChild(tempDiv);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  const { mutate: mutateCreateTemplate, isPending: isPendingCreateTemplate } =
    useMutationCreateTemplate();
  const { mutate: mutateEditTemplate, isPending: isPendingEditTemplate } =
    useMutationEditTemplate();

  const { mutate: mutateUploadImage, isPending: isPendingUploadImage } =
    useMutationUploadImage();
  const { mutate: mutateRemoveImage } = useMutationRemoveImage();

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      width: "100%",
      height: String(window.innerHeight * 0.8),
      plugins: isCreateTemplate
        ? [grapesjsPresetWebpage, grapesjsBlocksBasic]
        : [grapesjsPresetWebpage],

      storageManager: false,
      assetManager: {
        upload: isPendingUploadImage ? false : "/api/upload",
        uploadName: "file",
        assets: [],
        uploadFile: function (e: Event) {
          const files = (e as DragEvent).dataTransfer
            ? (e as DragEvent).dataTransfer?.files
            : (e.target as HTMLInputElement).files;

          if (files && files.length > 0) {
            const formData = new FormData();
            formData.append("file", files[0]);

            mutateUploadImage(formData, {
              onSuccess: (data) => {
                editor.AssetManager.add([
                  {
                    src: data.url,
                    type: "image",
                    height: 300,
                    width: 400,
                    name: files[0].name,
                  },
                ]);
              },
              onError: (error) => {
                console.error("Upload error:", error);
              },
            });
          }
        },
      },
    });
    let removedAsset: any = null;
    let removedAssetIndex: number | null = null;
    editor.on("asset:remove", (asset) => {
      const imageUrl = asset.get("src");

      removedAsset = asset;
      removedAssetIndex = editor.AssetManager.getAll().indexOf(asset);
      mutateRemoveImage(imageUrl, {
        onSuccess: () => {
          editor.AssetManager.remove(asset);
        },
        onError: (error) => {
          if (removedAsset && removedAssetIndex !== null) {
            editor.AssetManager.add(removedAsset);
          }
          toast({
            variant: "destructive",
            title: "Error",
            description: "Delete image failed",
          });
        },
      });
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
      setContentCreateOrEdit(content);
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
        media: `
    <div style="display: flex; align-items: center; justify-content: center;">
      <img src="/images/layout_template_1.jpg" alt="Card Content" style="width: 80px; height: 40px;object-fit:cover" />
    </div>
  `,
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
    }
    if (templateContent) {
      const decodedHtml = JSON.parse('"' + templateContent + '"');
      const parser = new DOMParser();
      const doc = parser.parseFromString(decodedHtml, "text/html");
      const styleTags = doc.querySelectorAll("style");
      let styleContent = "";
      styleTags.forEach((tag) => {
        styleContent += tag.innerHTML;
      });
      editor.DomComponents.addComponent(
        `
                <style>${styleContent}</style>
                <div id="editor">
                  ${doc.body.innerHTML}
                </div>
              `
      );
      let previousHtml = editor.getHtml();

      editor.on("component:update", () => {
        handleContentChange();
      });

      editor.on("component:add", () => {
        handleContentChange();
      });

      editor.on("component:remove", () => {
        handleContentChange();
      });

      function handleContentChange() {
        const currentHtml = editor!.getHtml();
        if (currentHtml !== previousHtml) {
          setIsChangeContent(true);
          previousHtml = currentHtml;
        }
      }
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
  }, [templateContent, isCreateTemplate]);

  const handleCreateOrEditTemplate = async () => {
    if (trigger) {
      const isValid = await trigger();
      if (!isValid) return;

      const blob = await captureHtmlToBlob(contentCreateOrEdit);
      const formData = new FormData();
      formData.append(
        "file",
        blob as Blob,
        `thumbnail.${blob.type.split("/")[1]}`
      );

      const payload = {
        name: templateName as string,
        label: templateName as string,
        content: JSON.stringify(contentCreateOrEdit).slice(1, -1),
        category: "Custom",
      };

      const processTemplate = (imageUrl: string) => {
        const finalPayload = { ...payload, thumbnail: imageUrl };

        if (templateContent) {
          mutateEditTemplate(
            { id: Number(idEdit), data: finalPayload },
            {
              onSuccess: () => {
                toast({ title: "Edit template successfully" });
                router.push("/templates");
              },
            }
          );
        } else {
          mutateCreateTemplate(finalPayload, {
            onSuccess: () => {
              toast({ title: "Create template successfully" });
              router.push("/templates");
            },
          });
        }
      };

      if (isChangeContent) {
        mutateUploadImage(formData, {
          onSuccess: (data) => {
            processTemplate(data.url);
          },
        });
      } else if (templateContent) {
        processTemplate(imageUrl as string);
      }
      if (!templateContent) {
        mutateUploadImage(formData, {
          onSuccess: (data) => {
            processTemplate(data.url);
          },
        });
      }
    }
  };

  return (
    <div>
      <div id="editor" />
      {isCreateTemplate && (
        <Button
          disabled={isPendingCreateTemplate || isPendingUploadImage}
          id="exportEditorHtmlCssButton"
          className="mt-4 block ml-auto w-[120px]"
          onClick={handleCreateOrEditTemplate}
        >
          {isPendingCreateTemplate || isPendingEditTemplate ? (
            <Loading />
          ) : templateContent ? (
            "Edit"
          ) : (
            "Create"
          )}
        </Button>
      )}
      {!isCreateTemplate && (
        <input
          type="text"
          id="nameInput"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
          placeholder="Nhập tên người và nhấn Enter"
        />
      )}
    </div>
  );
};
export default GrapeComponent;
