/* eslint-disable @typescript-eslint/no-require-imports */
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
  content,
  layoutCard2,
  column1Props,
  horizontalProduct,
  userProfile,
  dataUserProfile,
  productItemOneColumn,
  contactUs,
  blog,
  contentShowcase,
  header,
  footer,
  divider,
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
  useQueryGetImages,
} from "@/api/upload/uploadApi";
import { useQueryClient } from "@tanstack/react-query";
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
  const [enableImages, setEnableImages] = useState(false);
  const { data: images } = useQueryGetImages(enableImages);

  console.log("🚀 ~ contentCreateOrEdit:", JSON.stringify(contentCreateOrEdit));

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
  const queryClient = useQueryClient();
  const { mutate: mutateCreateTemplate, isPending: isPendingCreateTemplate } =
    useMutationCreateTemplate();
  const { mutate: mutateEditTemplate, isPending: isPendingEditTemplate } =
    useMutationEditTemplate();

  const { mutate: mutateUploadImage, isPending: isPendingUploadImage } =
    useMutationUploadImage();
  const { mutate: mutateRemoveImage } = useMutationRemoveImage();

  useEffect(() => {
    if (typeof window !== "undefined") {
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
          assets: images
            ? images.map(
                (item: string) => `${process.env.NEXT_PUBLIC_IMAGE_URL}${item}`
              )
            : [],
          uploadFile: function (e: Event) {
            const files = (e as DragEvent).dataTransfer
              ? (e as DragEvent).dataTransfer?.files
              : (e.target as HTMLInputElement).files;

            if (files && files.length > 0) {
              const formData = new FormData();
              formData.append("file", files[0]);

              mutateUploadImage(formData, {
                onSuccess: (data) => {
                  queryClient.invalidateQueries({
                    queryKey: ["images"],
                  });
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

      const am = editor.AssetManager;

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
      if (am.isOpen()) {
        am.open({
          types: ["image"],

          select(asset, complete) {
            const selected = editor.getSelected();

            if (selected && selected.is("image")) {
              selected.addAttributes({ src: asset.getSrc() });
              if (complete) {
                am.close();
              }
            }
          },
        });
      }
      editor.on("asset:open", () => {
        setEnableImages(true);
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
        const compClass = comp.getClasses();
        if (!comp) return null;
        if (compClass.includes("wrapper_content")) return comp;
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
        editor.BlockManager.add("header", {
          label: "header",
          content: header(),
          category: "Custom",
        });
        editor.BlockManager.add("footer", {
          label: "footer",
          content: footer(),
          category: "Custom",
        });
        editor.BlockManager.add("divider", {
          label: "divider",
          content: divider(),
          category: "Custom",
        });
        editor.BlockManager.add("layoutCard2", {
          label: "layoutCard2",
          content: layoutCard2(column1Props),
          category: "Custom",
        });

        editor.BlockManager.add("horizontalProduct", {
          label: "horizontalProduct",
          content: horizontalProduct({
            name: "3 Days Siem Reap Package (Pre Or Post Mekong River Cruise)",
          }),
          category: "Custom",
        });
        editor.BlockManager.add("userProfile", {
          label: "userProfile",
          content: userProfile(dataUserProfile),
          category: "Custom",
        });
        editor.BlockManager.add("productItemOneColumn", {
          label: "productItemOneColumn",
          content: productItemOneColumn(column1Props),
          category: "Custom",
        });
        editor.BlockManager.add("contactUs", {
          label: "contactUs",
          content: contactUs(),
          category: "Custom",
        });
        editor.BlockManager.add("blog", {
          label: "blog",
          content: blog(),
          category: "Custom",
        });
        editor.BlockManager.add("contentShowcase", {
          label: "contentShowcase",
          content: contentShowcase(),
          category: "Custom",
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
    }
  }, [templateContent, isCreateTemplate]);
  useEffect(() => {
    if (editor && images) {
      const formattedAssets = images.map(
        (item) => `${process.env.NEXT_PUBLIC_IMAGE_URL}${item}`
      );
      editor.AssetManager.add(formattedAssets);
    }
  }, [images]);

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
            queryClient.invalidateQueries({
              queryKey: ["images"],
            });
            processTemplate(data.url);
          },
        });
      } else if (templateContent) {
        processTemplate(imageUrl as string);
      }
      if (!templateContent) {
        mutateUploadImage(formData, {
          onSuccess: (data) => {
            queryClient.invalidateQueries({
              queryKey: ["images"],
            });
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
