"use client";
import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@radix-ui/react-dialog";
import { Hint } from "@/components/hint";

export const NewButton = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className="aspect-square">
            <Hint
              label="Create Organisation"
              side="right"
              align="start"
              alignOffset={18}
            >
              <button className="h-full w-full rounded-full  flex items-center justify-center bg-blue-500 opacity-80 hover:opacity-100 transition duration-200">
                <Plus className="text-neutral-50 h-5 w-5" />
              </button>
            </Hint>
          </div>
        </DialogTrigger>
        <DialogContent className="p-0 bg-transparent border-none max-w-[350px]">
          <div className="absolute left-full top-5">
            <CreateOrganization />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
