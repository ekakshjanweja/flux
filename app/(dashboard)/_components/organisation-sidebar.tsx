"use client";

import { Button } from "@/components/ui/button";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { LayoutDashboard, Star } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const OrganisationSidebar = () => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");

  return (
    <>
      <div className="hidden lg:flex flex-col space-y-6 w-[200px] pl-5 pt-5">
        <Link href="/">
          <div className="flex items-center gap-x-2 group">
            <span className="text-2xl bg-neutral-800 group-hover:bg-violet-500 transition rounded-full flex items-center justify-center px-2">
              Φ
            </span>
            <span className="italic text-xl group-hover:text-violet-300 group-hover:translate-x-2 transition">
              flux
            </span>
          </div>
        </Link>
        <OrganizationSwitcher
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              },
              organizationSwitcherTrigger: {
                padding: "6px",
                width: "100%",
                borderRadius: "8px",
                border: "1px solid #404040",
                justifyContent: "space-between",
              },
            },
          }}
        />
        <div className="space-y-1 w-full">
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="font-normal justify-start gap-x-2 px-2 w-full"
          >
            <Link href="/">
              <LayoutDashboard className="h-4 w-4" />
              Team Boards
            </Link>
          </Button>
        </div>
        <div className="space-y-1 w-full">
          <Button
            asChild
            variant={favorites ? "secondary" : "ghost"}
            size="lg"
            className="font-normal justify-start gap-x-2 px-2 w-full"
          >
            <Link
              href={{
                pathname: "/",
                query: { favorites: true },
              }}
            >
              <Star className="h-4 w-4" />
              Favorite Boards
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};
