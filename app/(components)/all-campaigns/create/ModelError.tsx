import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CircleX } from "lucide-react";
import { Button } from "@/components/ui/button";
type Props = {
  messageError: string;
  isOpenModalError: boolean;
  setIsOpenModalError: (value: boolean) => void;
};
const ModelError = ({
  isOpenModalError,
  messageError,
  setIsOpenModalError,
}: Props) => {
  return (
    <>
      <Dialog open={isOpenModalError} onOpenChange={setIsOpenModalError}>
        <DialogContent className="sm:max-w-[425px]">
          <div className="flex items-center justify-center gap-8 flex-col">
            <CircleX className="h-20 w-20 text-red-500" />
            <div className="flex flex-col gap-4 items-center justify-center">
              <span className="text-[1.875em] font-semibold">Error</span>
              <span className="text-xl font-thin">{messageError}</span>
            </div>
            <Button onClick={() => setIsOpenModalError(false)}>OK</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ModelError;
