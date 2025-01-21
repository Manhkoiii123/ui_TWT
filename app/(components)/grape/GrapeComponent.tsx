/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import html2canvas from "html2canvas";
import { useEffect, useMemo, useRef } from "react";
import grapesjs, { Asset, Component, Editor } from "grapesjs";
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
  fakeTemplateHeader,
  footerGeneral,
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
import ImageCropModal, { ICroppedImageReturn } from "@/components/ImageCrop";
import {
  createCampaignState,
  useCreateCampaignZustand,
} from "@/zustands/createCampaignZustand";
type Props = {
  isCreateTemplate?: boolean;
  templateContent?: string;
  templateName?: string;
  idEdit?: string | null;
  trigger?: any;
  imageUrl?: string;
  templateHeader?: string;
  templateFooter?: string;
};
const GrapeComponent = ({
  isCreateTemplate = true,
  templateContent,
  templateName,
  idEdit,
  trigger,
  imageUrl,
  templateHeader,
  templateFooter,
}: Props) => {
  const templateCampaign = useCreateCampaignZustand(
    (state: createCampaignState) => state.templateCampaign
  );
  const router = useRouter();
  const { toast } = useToast();
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);
  const [editor, setEditor] = useState<Editor | null>();
  const [contentCreateOrEdit, setContentCreateOrEdit] = useState(
    templateContent || ""
  );
  const { images, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useQueryGetImages();
  const currentHeaderRef = useRef<Component | null>(null);
  const currentFooterRef = useRef<Component | null>(null);
  const [fileNameWithExtension, setFileNameWithExtension] = useState("");
  console.log("🚀 ~ contentCreateOrEdit:", JSON.stringify(contentCreateOrEdit));

  const [isChangeContent, setIsChangeContent] = useState(false);
  function captureHtmlToBlob(
    htmlContent: string
  ): Promise<{ width: number; height: number; blob: Blob }> {
    return new Promise((resolve, reject) => {
      const tempDiv = document.createElement("div");
      tempDiv.style.overflow = "hidden";
      tempDiv.style.position = "absolute";
      tempDiv.style.top = "-9999px";
      tempDiv.style.left = "-9999px";
      tempDiv.innerHTML = htmlContent;

      document.body.appendChild(tempDiv);

      const contentWidth = tempDiv.offsetWidth;
      const contentHeight = tempDiv.offsetHeight;

      html2canvas(tempDiv, {
        width: contentWidth,
        height: contentHeight,
        scale: window.devicePixelRatio,
        useCORS: true,
        logging: true,
      })
        .then((canvas) => {
          canvas.toBlob((blob) => {
            if (blob) {
              resolve({
                width: contentWidth,
                height: contentHeight,
                blob: blob,
              });
            } else {
              reject(new Error("Failed to create blob"));
            }
          }, "image/png");

          document.body.removeChild(tempDiv);
        })
        .catch((error) => {
          document.body.removeChild(tempDiv);
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

  const handleCropComplete = (croppedImage: ICroppedImageReturn) => {
    const formData = new FormData();
    const [name, extension] = fileNameWithExtension.split(".");
    formData.append("file", croppedImage.file);
    formData.append("name", name);
    formData.append("extension", extension);
    formData.append("type", "image");
    formData.append("width", String(croppedImage.width));
    formData.append("height", String(croppedImage.height));
    const selectedComponent = editor?.getSelected();
    mutateUploadImage(formData, {
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["images"] });
        if (selectedComponent) {
          selectedComponent.set(
            "src",
            `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.path}`
          );
          editor?.AssetManager?.close();
        }
        editor?.AssetManager.add([
          {
            src: `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.path}`,
            type: "image",
            height: data.height,
            width: data.width,
            name: data.name,
            id: data.id,
          },
        ]);
        setImageSrc(null);
      },
      onError: (error) => {
        console.error("Upload error:", error);
      },
    });
  };

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
          // assets: images
          //   ? images
          //       .reverse()
          //       .map(
          //         (item) => `${process.env.NEXT_PUBLIC_IMAGE_URL}${item.path}`
          //       )
          //   : [],
          uploadFile: function (e: Event) {
            const files = (e as DragEvent).dataTransfer
              ? (e as DragEvent).dataTransfer?.files
              : (e.target as HTMLInputElement).files;

            if (files && files.length > 0) {
              const file = files[0];
              setFileNameWithExtension(file.name);
              const reader = new FileReader();
              reader.onload = () => {
                setImageSrc(reader.result as string);
                setFileToUpload(file);
              };
              reader.readAsDataURL(file);
            }
          },
        },
      });

      const am = editor.AssetManager;

      let removedAsset: any = null;
      let removedAssetIndex: number | null = null;
      editor.on("asset:remove", (asset) => {
        const imageUrl = asset.get("id");
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
        editor.BlockManager.add("layoutCard2", {
          label: "2 column product",
          content: layoutCard2(column1Props),
          category: "Custom",
          media: `<div>
          <img style={ width:200px ;height:200px;object-fit:cover;} src="/images/2_column_product.jpg"/>
          </div>`,
        });

        editor.BlockManager.add("horizontalProduct", {
          label: "horizontalProduct",
          content: horizontalProduct({
            name: "3 Days Siem Reap Package (Pre Or Post Mekong River Cruise)",
          }),
          category: "Custom",
          media: `<div>
          <img style="width:200px ;height:auto;object-fit:fill;" src="/images/layout_template_1.jpg"/>
          </div>`,
        });
        editor.BlockManager.add("userProfile", {
          label: "userProfile",
          content: userProfile(dataUserProfile),
          category: "Custom",
          media: `<div>
          <img style="width:200px ;height:auto;object-fit:fill;" src="/images/user_profile.jpg"/>
          </div>`,
        });
        editor.BlockManager.add("productItemOneColumn", {
          label: "productItemOneColumn",
          content: productItemOneColumn(column1Props),
          category: "Custom",
          media: `<div>
          <img style="width:200px ;height:auto;object-fit:fill;" src="/images/one_product.jpg"/>
          </div>`,
        });
        editor.BlockManager.add("contactUs", {
          label: "contactUs",
          content: contactUs(),
          category: "Custom",
          media: `<div>
          <img style="width:200px ;height:auto;object-fit:fill;" src="/images/contact_us.jpg"/>
          </div>`,
        });
        editor.BlockManager.add("blog", {
          label: "blog",
          content: blog(),
          category: "Custom",
          media: `<div>
          <img style="width:200px ;height:auto;object-fit:fill;" src="/images/blog.jpg"/>
          </div>`,
        });
        editor.BlockManager.add("contentShowcase", {
          label: "contentShowcase",
          content: contentShowcase(),
          category: "Custom",
          media: `<div>
          <img style="width:200px ;height:auto;object-fit:fill;" src="/images/content_show_case.jpg"/>
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

        const addComponentPromise = new Promise<void>((resolve) => {
          editor.DomComponents.addComponent(
            `
              <style>${styleContent}</style>
              <div id="editor">
                ${doc.body.innerHTML}
              </div>
            `
          );

          resolve();
        });
        let previousHtml = editor.getHtml();

        addComponentPromise.then(() => {
          editor.on("component:update", () => {
            handleContentChange();
          });

          editor.on("component:add", () => {
            handleContentChange();
          });

          editor.on("component:remove", () => {
            handleContentChange();
          });
        });

        function handleContentChange() {
          const currentHtml = editor!.getHtml();
          if (currentHtml !== previousHtml) {
            setIsChangeContent(true);
            previousHtml = currentHtml;
          }
        }
      }
      if (templateCampaign && !isCreateTemplate) {
        const decodedHtml = JSON.parse('"' + templateCampaign + '"');
        const parser = new DOMParser();
        const doc = parser.parseFromString(decodedHtml, "text/html");
        const styleTags = doc.querySelectorAll("style");
        let styleContent = "";
        styleTags.forEach((tag) => {
          styleContent += tag.innerHTML;
        });

        const addComponentPromise = new Promise<void>((resolve) => {
          editor.DomComponents.addComponent(
            `
              <style>${styleContent}</style>
              <div id="editor">
                ${doc.body.innerHTML}
              </div>
            `
          );

          resolve();
        });
        let previousHtml = editor.getHtml();

        addComponentPromise.then(() => {
          editor.on("component:update", () => {
            handleContentChange();
          });

          editor.on("component:add", () => {
            handleContentChange();
          });

          editor.on("component:remove", () => {
            handleContentChange();
          });
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
    if (editor) {
      const handleLoad = () => {
        if (images && images.length > 0) {
          const formattedAssets = images.map((item) => ({
            src: `${process.env.NEXT_PUBLIC_IMAGE_URL}${item.path}`,
            type: "image",
            height: item.width,
            width: item.height,
            id: item.id,
            name: item.name,
          }));
          editor.AssetManager.render(formattedAssets as any);
        }
      };

      editor.on("load", handleLoad);

      return () => {
        editor.off("load", handleLoad);
      };
    }
  }, [editor, images]);
  useEffect(() => {
    if (editor && images) {
      const handleAssetOpen = () => {
        const assetManagerContainer = document.querySelector(".gjs-am-assets");
        if (assetManagerContainer) {
          let isFetching = false;
          const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } =
              assetManagerContainer;

            const isAtBottom = scrollTop + clientHeight >= scrollHeight;

            if (
              isAtBottom &&
              hasNextPage &&
              !isFetchingNextPage &&
              !isFetching
            ) {
              isFetching = true;
              fetchNextPage().finally(() => {
                isFetching = false;
              });
            }
          };
          assetManagerContainer.addEventListener("scroll", handleScroll);
          return () => {
            assetManagerContainer.removeEventListener("scroll", handleScroll);
          };
        }
      };

      editor.on("asset:open", handleAssetOpen);

      return () => {
        editor.off("asset:open", handleAssetOpen);
      };
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  useEffect(() => {
    if (editor && templateHeader) {
      if (currentHeaderRef.current) {
        currentHeaderRef.current.remove();
        currentHeaderRef.current = null;
      }
      const newHeader = editor.DomComponents.getWrapper()
        ?.components()
        .add(templateHeader, { at: 0 });
      (currentHeaderRef as any).current = newHeader;
    }
  }, [editor, templateHeader]);
  useEffect(() => {
    if (editor && templateFooter) {
      if (currentFooterRef.current) {
        const wrapper = editor.DomComponents.getWrapper();
        if (wrapper) {
          const components = wrapper.components();
          components.remove(currentFooterRef.current);
        }
      }

      const newFooter = editor.DomComponents.getWrapper()
        ?.components()
        .add(templateFooter);
      (currentFooterRef as any).current = newFooter;
    }
  }, [editor, templateFooter]);

  const handleCreateOrEditTemplate = async () => {
    if (trigger) {
      const isValid = await trigger();
      if (!isValid) return;

      const result = await captureHtmlToBlob(contentCreateOrEdit);
      const formData = new FormData();
      formData.append(
        "file",
        result.blob as Blob,
        `thumbnail.${result.blob.type.split("/")[1]}`
      );
      formData.append("name", "template");
      formData.append("type", "image");
      formData.append("extension", result.blob.type.split("/")[1]);
      formData.append("width", String(result.width));
      formData.append("height", String(result.height));

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
            processTemplate(`${process.env.NEXT_PUBLIC_IMAGE_URL}${data.path}`);
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
            processTemplate(`${process.env.NEXT_PUBLIC_IMAGE_URL}${data.path}`);
          },
        });
      }
    }
  };

  return (
    <div>
      <div id="editor" />
      {imageSrc && (
        <ImageCropModal
          loading={isPendingUploadImage}
          src={imageSrc}
          onCropComplete={handleCropComplete}
          onClose={() => setImageSrc(null)}
        />
      )}

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
      {/* {!isCreateTemplate && (
        <div className="flex items-center justify-end">
          <input
            type="text"
            id="nameInput"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none my-4 w-[600px]"
            placeholder="Nhập tên người và nhấn Enter"
          />
        </div>
      )} */}
    </div>
  );
};
export default GrapeComponent;
