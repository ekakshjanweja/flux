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
              <button className="h-full w-full rounded-md  flex items-center justify-center bg-violet-500 opacity-60 hover:opacity-100 transition duration-200">
                <Plus className="text-foreground" />
              </button>
            </Hint>
          </div>
        </DialogTrigger>
        <DialogContent>
          <CreateOrganization />
        </DialogContent>
      </Dialog>
    </>
  );
};
