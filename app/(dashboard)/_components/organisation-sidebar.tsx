"use client";

import { Logo } from "@/components/logo";
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
      <div className="bg-white dark:bg-neutral-950 h-full px-6 hidden lg:flex flex-col space-y-6 w-[200px] pl-5 pt-5">
        <Logo />
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

                color: "#71717a",
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
