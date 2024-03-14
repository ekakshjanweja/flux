"use client";

import Image from "next/image";
import Spline from "@splinetool/react-spline";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CreateOrganization } from "@clerk/nextjs";

export const EmptyOrganisation = () => {
  return (
    <>
      <div className="h-full w-full flex flex-col items-center justify-center group">
        <Image
          src="/elements.svg"
          alt="Empty"
          width={200}
          height={200}
          className="group-hover:scale-105 scale-90 transition duration-500"
        />

        <div className="flex items-center justify-start text-2xl font-semibold ">
          Welcome to
          <div className="flex items-center gap-x-2 pl-1">
            <span className="italic group-hover:dark:text-blue-400  group-hover:text-blue-500 group-hover:translate-x-2 transition duration-500">
              flux Φ
            </span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mt-2">
          Create an Organisation to get started.
        </p>

        <div className="mt-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg">Create Organisation</Button>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
              <CreateOrganization />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default function Test() {
  // https://prod.spline.design/dp3byx-2EHPz9iu6/scene.splinecode
  return (
    <Spline scene="https://prod.spline.design/5gix3r2M0q5h2H03/scene.splinecode" />
  );
}
