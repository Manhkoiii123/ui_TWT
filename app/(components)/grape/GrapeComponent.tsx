/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import juice from "juice";
import html2canvas from "html2canvas";
import { useEffect, useRef } from "react";
import grapesjs, { Component, Editor } from "grapesjs";
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
  footerGeneral,
  header2,
  headerGeneral,
  menuHeader,
  footerBlock,
  footerContact,
  threeProduct,
  intro,
  // purchaseTemplate,
  haveAQuestion,
  footer_contact,
  blog_1,
  blog_2,
  header_contact,
  footer_full,
  listBlog,
  template_purchase,
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
  useMutationCreateMasterTemplate,
  useMutationEditMasterTemplate,
} from "@/api/master-templates/masterTemplatesApi";
import {
  useMutationCreateCampain,
  useMutationCreateTemplateCampaign,
  useMutationEditCampain,
  useMutationEditTemplateCampaign,
} from "@/api/campains/campainsApi";
type Props = {
  isCreateTemplate?: boolean;
  isCreateFooterHeader?: boolean;
  templateContent?: string;
  templateName?: string;
  templatePosition?: string;
  idEdit?: string | null;
  trigger?: any;
  imageUrl?: string;
  templateHeader?: string;
  templateFooter?: string;
  isCreateCampaign?: boolean;
  handleBackStepOne?: () => void;
  templateCampaign?: string;
  is_manual?: boolean;
  group?: string;
  dataCreate?: {
    campaignName: string;
    audience: {
      id: number;
      label: string;
    }[];
    hostEmail: string;
    releaseDate: Date;
  } | null;
  isEditCampaign?: boolean;
};
const GrapeComponent = ({
  isCreateFooterHeader = false,
  isCreateTemplate = true,
  templateContent,
  templateCampaign,
  templateName,
  idEdit,
  trigger,
  imageUrl,
  templateHeader,
  templateFooter,
  templatePosition,
  isCreateCampaign = false,
  handleBackStepOne,
  dataCreate,
  is_manual,
  group,
  isEditCampaign = false,
}: Props) => {
  const router = useRouter();
  const { toast } = useToast();
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);
  const [editor, setEditor] = useState<Editor | null>();
  const [contentCreateOrEdit, setContentCreateOrEdit] = useState(
    templateContent || templateCampaign || ""
  );
  const { images, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useQueryGetImages();
  const currentHeaderRef = useRef<Component | null>(null);
  const currentFooterRef = useRef<Component | null>(null);
  const [fileNameWithExtension, setFileNameWithExtension] = useState("");

  // phần gửi email
  // useEffect(() => {
  //   const decodedHtml = JSON.parse(
  //     '"' + JSON.stringify(contentCreateOrEdit).slice(1, -1) + '"'
  //   );
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(decodedHtml, "text/html");
  //   const styleTags = doc.querySelectorAll("style");
  //   let styleContent = "";
  //   styleTags.forEach((tag) => {
  //     styleContent += tag.innerHTML;
  //   });
  //   const template = `<style>${styleContent}</style>
  //             <div id="editor">
  //               ${doc.body.innerHTML}
  //             </div>`;
  //   console.log("🚀 ~ contentCreateOrEdit:", JSON.stringify(template));
  // }, [contentCreateOrEdit]);

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
  const { mutate: mutateEditCampaign, isPending: isPendingEditCampaign } =
    useMutationEditCampain();
  const {
    mutate: mutateCreateCampainTemplate,
    isPending: isPendingCreateCampainTemplate,
  } = useMutationCreateTemplateCampaign();
  const { mutate: mutateCreateTemplate, isPending: isPendingCreateTemplate } =
    useMutationCreateTemplate();
  const {
    mutate: mutateCreateMasterTemplate,
    isPending: isPendingCreateMasterTemplate,
  } = useMutationCreateMasterTemplate();
  const {
    mutate: mutateEditMasterTemplate,
    isPending: isPendingEditMasterTemplate,
  } = useMutationEditMasterTemplate();
  const { mutate: mutateEditTemplate, isPending: isPendingEditTemplate } =
    useMutationEditTemplate();
  const { mutate: mutateCreateCampain, isPending: isPendingCreateCampain } =
    useMutationCreateCampain();
  const {
    mutate: mutateEditTemplateCampain,
    isPending: isPendingEditTemplateCampain,
  } = useMutationEditTemplateCampaign();

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

  const handleSave = () => {
    const convertData = {
      group: group as string,
      title: dataCreate!.campaignName,
      audiences: Number(dataCreate!.audience.map((item) => String(item.id))[0]),
      schedule_send_at: new Date(dataCreate!.releaseDate).toISOString(),
      mail_setting_id: Number(dataCreate!.hostEmail),
      is_manual: is_manual as boolean,
    };
    if (isEditCampaign) {
      mutateEditCampaign(
        {
          id: Number(localStorage.getItem("idEditCampaign")),
          data: convertData,
        },
        {
          onSuccess: (data) => {
            const dataEditCampaignTemplate = {
              campaign_id: Number(localStorage.getItem("idEditCampaign")),
              body_builder: contentCreateOrEdit,
              body_html: contentCreateOrEdit,
            };
            mutateEditTemplateCampain(
              {
                id: data.template_body.id,
                data: dataEditCampaignTemplate,
              },
              {
                onSuccess: () => {
                  router.push(
                    `/all-campaigns/preview/${Number(
                      localStorage.getItem("idEditCampaign")
                    )}`
                  );
                  queryClient.invalidateQueries({ queryKey: ["campaign"] });
                },
              }
            );
          },
        }
      );
    } else if (isCreateCampaign) {
      mutateCreateCampain(convertData, {
        onSuccess: (data: { id: number }) => {
          const dataCreateCampaignTemplate = {
            campaign_id: data.id,
            body_builder: contentCreateOrEdit,
            body_html: contentCreateOrEdit,
          };
          mutateCreateCampainTemplate(dataCreateCampaignTemplate, {
            onSuccess: () => {
              router.push(`/all-campaigns/preview/${data.id}`);
              queryClient.invalidateQueries({ queryKey: ["campaign"] });
            },
          });
        },
      });
    }
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
        const inlinedContent = juice(combinedContent);
        return inlinedContent;
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

      if (isCreateTemplate && !isCreateFooterHeader) {
        editor.BlockManager.add("layoutCard2", {
          label: "2 column product",
          content: layoutCard2(column1Props),
          category: "Custom",
          media: `<div>
          <img style="width:200px ;height:50px;object-fit:contain;" src="/images/2_column_product.jpg"/>
          </div>`,
        });

        editor.BlockManager.add("horizontalProduct", {
          label: "Horizontal Product",
          content: horizontalProduct({
            name: "3 Days Siem Reap Package (Pre Or Post Mekong River Cruise)",
          }),
          category: "Custom",
          media: `<div>
          <img style="width:200px ;height:50px;object-fit:contain;" src="/images/layout_template_1.jpg"/>
          </div>`,
        });
        editor.BlockManager.add("userProfile", {
          label: "User Profile",
          content: userProfile(dataUserProfile),
          category: "Custom",
          media: `<div>
          <img style="width:200px ;height:50px;object-fit:contain;" src="/images/user_profile.jpg"/>
          </div>`,
        });
        editor.BlockManager.add("productItemOneColumn", {
          label: "Product Item One Column",
          content: productItemOneColumn(column1Props),
          category: "Custom",
          media: `<div>
          <img style="width:200px ;height:50px;object-fit:contain;" src="/images/one_product.jpg"/>
          </div>`,
        });
        editor.BlockManager.add("contactUs", {
          label: "Contact Us",
          content: contactUs(),
          category: "Custom",
          media: `<div>
          <img style="width:200px ;height:50px;object-fit:contain;" src="/images/contact_us.jpg"/>
          </div>`,
        });
        editor.BlockManager.add("blog", {
          label: "Blog",
          content: blog(),
          category: "Custom",
          media: `<div>
          <img style="width:200px ;height:50px;object-fit:contain;" src="/images/blog.jpg"/>
          </div>`,
        });
        editor.BlockManager.add("contentShowcase", {
          label: "Content Showcase",
          content: contentShowcase(),
          category: "Custom",
          media: `<div>
          <img style="width:200px ;height:50px;object-fit:contain;" src="/images/content_show_case.jpg"/>
          </div>`,
        });
        editor.BlockManager.add("threeProduct", {
          label: "Three product horizontal",
          content: threeProduct(),
          category: "Custom",
          media: `<div>
          <img style="width:200px ;height:50px;object-fit:contain;" src="/images/three.jpg"/>
          </div>`,
        });
        editor.BlockManager.add("intro", {
          label: "Introduction",
          content: intro(),
          category: "Custom",
          media: `<div>
          <img style="width:200px ;height:50px;object-fit:contain;" src="/images/intro.jpg"/>
          </div>`,
        });
       
        editor.BlockManager.add("haveAQuestion", {
          label: "Have a question",
          content: haveAQuestion(),
          category: "Custom",
          media: `<div>
          <img style="width:200px ;height:50px;object-fit:contain;" src="/images/have_a_question.jpg"/>
          </div>`,
        });
        editor.BlockManager.add("blog_1", {
          label: "Blog template 1",
          content: blog_1(),
          category: "Custom",
          media: `<div>
          <img style="width:200px ;height:50px;object-fit:contain;" src="/images/blog_1.jpg"/>
          </div>`,
        });
        editor.BlockManager.add("blog_2", {
          label: "Blog template 2",
          content: blog_2(),
          category: "Custom",
          media: `<div>
          <img style="width:200px ;height:50px;object-fit:contain;" src="/images/blog_2.jpg"/>
          </div>`,
        });
        editor.BlockManager.add("listBlog", {
          label: "List blog",
          content: listBlog(),
          category: "Custom",
          media: `<div>
          <img style="width:200px ;height:50px;object-fit:contain;" src="/images/listBlog.jpg"/>
          </div>`,
        });
        editor.BlockManager.add("template_purchase", {
          label: "Template purchase",
          content: template_purchase(),
          category: "Custom",
          media: `<div>
          <img style="width:200px ;height:50px;object-fit:contain;" src="/images/template_purchase.jpg"/>
          </div>`,
        });
       
      }
      if (isCreateFooterHeader) {
        editor.BlockManager.add("header1", {
          label: "Header basic",
          content: header(),
          category: "Custom",
          media: `<div>
          <img style="width:200px ;height:50px;object-fit:contain;" src="/images/header_basic.jpg"/>
          </div>`,
        });
        editor.BlockManager.add("header2", {
          label: "Header basic 2",
          content: header2(),
          category: "Custom",
          media: `<div>
          <img style="width:200px ;height:50px;object-fit:contain;" src="/images/header_basic_2.jpg"/>
          </div>`,
        });
        editor.BlockManager.add("headerGeneral", {
          label: "Header General",
          content: headerGeneral(),
          category: "Custom",
          media: `<div>
          <img style="width:200px ;height:50px;object-fit:contain;" src="/images/header_general.jpg"/>
          </div>`,
        });
        editor.BlockManager.add("menuHeader", {
          label: "Header menu",
          content: menuHeader(),
          category: "Custom",
          media: `<div>
          <img style="width:200px ;height:50px;object-fit:contain;" src="/images/menu.jpg"/>
          </div>`,
        });
        editor.BlockManager.add("header_contact", {
          label: "Header contact",
          content: header_contact(),
          category: "Custom",
          media: `<div>
          <img style="width:200px ;height:50px;object-fit:contain;" src="/images/header_contact.jpg"/>
          </div>`,
        });
        editor.BlockManager.add("footer", {
          label: "Footer 1",
          content: footer(),
          category: "Custom",
          media: `<div>
          <img style="width:200px ;height:50px;object-fit:contain;" src="/images/footer_1.jpg"/>
          </div>`,
        });
        editor.BlockManager.add("footerBlock", {
          label: "Footer 2",
          content: footerBlock(),
          category: "Custom",
          media: `<div>
          <img style="width:200px ;height:50px;object-fit:contain;" src="/images/footer_2.jpg"/>
          </div>`,
        });
        editor.BlockManager.add("footerContact", {
          label: "Contact",
          content: footerContact(),
          category: "Custom",
          media: `<div>
          <img style="width:200px ;height:50px;object-fit:contain;" src="/images/footer_contact.jpg"/>
          </div>`,
        });
        editor.BlockManager.add("footer_contact", {
          label: "Footer social",
          content: footer_contact(),
          category: "Custom",
          media: `<div>
          <img style="width:200px ;height:50px;object-fit:contain;" src="/images/footer_social.jpg"/>
          </div>`,
        });
        editor.BlockManager.add("footer_full", {
          label: "Footer template",
          content: footer_full(),
          category: "Custom",
          media: `<div>
          <img style="width:200px ;height:50px;object-fit:contain;" src="/images/footer_full.jpg"/>
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
    if (editor && images && images.length > 0) {
      const formattedAssets = images.map((item) => ({
        src: `${process.env.NEXT_PUBLIC_IMAGE_URL}${item.path}`,
        type: "image",
        height: item.width,
        width: item.height,
        id: item.id,
        name: item.name,
      }));
      const currentAssets = editor.AssetManager.getAll();
      const updatedAssets = [...currentAssets, ...formattedAssets];
      editor.AssetManager.add(updatedAssets);
      // editor.AssetManager.render(formattedAssets as any);
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
  const handleCreateOrEditMasterTemplate = async () => {
    if (trigger) {
      const isValid = await trigger();
      if (!isValid) return;
      const payload = {
        name: templateName as string,
        position: templatePosition as string,
        content: JSON.stringify(contentCreateOrEdit).slice(1, -1),
      };
      if (!templateContent) {
        mutateCreateMasterTemplate(payload, {
          onSuccess: () => {
            toast({ title: "Create master template successfully" });
            router.push("/header-footer");
          },
        });
      } else {
        mutateEditMasterTemplate(
          { id: Number(idEdit), data: payload },
          {
            onSuccess: () => {
              toast({ title: "Edit master template successfully" });
              router.push("/header-footer");
            },
          }
        );
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
          disabled={
            isPendingCreateTemplate ||
            isPendingUploadImage ||
            isPendingCreateMasterTemplate
          }
          id="exportEditorHtmlCssButton"
          className="mt-4 block ml-auto w-[120px]"
          onClick={
            isCreateFooterHeader
              ? handleCreateOrEditMasterTemplate
              : handleCreateOrEditTemplate
          }
        >
          {isPendingCreateTemplate ||
          isPendingEditTemplate ||
          isPendingCreateMasterTemplate ? (
            <Loading />
          ) : templateContent ? (
            "Edit"
          ) : (
            "Create"
          )}
        </Button>
      )}
      {(isCreateCampaign || isEditCampaign) && (
        <div className="flex justify-between mt-4">
          <Button onClick={handleBackStepOne} variant={"outline"}>
            Previous
          </Button>
          <Button
            id="exportEditorHtmlCssButton"
            disabled={
              isPendingCreateCampainTemplate ||
              isPendingCreateCampain ||
              isPendingEditTemplateCampain
            }
            onClick={handleSave}
          >
            {isEditCampaign && "Save Campain"}
            {isCreateCampaign && "Create Campain"}
          </Button>
        </div>
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
