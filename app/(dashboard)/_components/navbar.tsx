"use client";

import { ModeToggle } from "@/components/mode-toggle";
import {
  OrganizationSwitcher,
  UserButton,
  useOrganization,
} from "@clerk/nextjs";
import { SearchInput } from "./search-input";
import { InviteButton } from "./invite-button";

export const Navbar = () => {
  const { organization } = useOrganization();

  return (
    <>
      <div className="flex items-center gap-x-4 p-5">
        <div className="hidden lg:flex lg:flex-1">
          <SearchInput />
        </div>
        <div className="block lg:hidden flex-1">
          <OrganizationSwitcher
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  maxWidth: "400px",
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
        </div>
        {organization && <InviteButton />}
        <UserButton />
        <ModeToggle />
      </div>
    </>
  );
};
