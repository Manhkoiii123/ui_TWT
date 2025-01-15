import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

type Props = {
  handleBack: () => void;
  htmlContent: string;
};
const PreviewCampaign = ({ handleBack, htmlContent }: Props) => {
  const [doc, setDoc] = useState<Document>();
  const [styles, setStyles] = useState("");
  useEffect(() => {
    const decodedHtml = JSON.parse('"' + htmlContent + '"');
    const parser = new DOMParser();
    const doc = parser.parseFromString(decodedHtml, "text/html");
    setDoc(doc);

    const styleTags = doc.querySelectorAll("style");
    let styleContent = "";
    styleTags.forEach((tag) => {
      styleContent += tag.innerHTML;
    });

    setStyles(styleContent);
  }, [htmlContent]);
  return (
    <div>
      <>
        {doc?.body.innerHTML && (
          <>
            <style>{styles}</style>
            <div
              dangerouslySetInnerHTML={{
                __html: doc.body.innerHTML,
              }}
            />
          </>
        )}
      </>
      <div className="flex justify-between">
        <Button onClick={handleBack} variant={"outline"}>
          Previous
        </Button>
        <Button onClick={handleBack}>Submit</Button>
      </div>
    </div>
  );
};

export default PreviewCampaign;
