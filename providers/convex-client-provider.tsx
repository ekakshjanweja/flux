"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";
import { dark } from "@clerk/themes";
import { Loading } from "@/components/auth/loading";
import { useTheme } from "next-themes";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({
  children,
}: ConvexClientProviderProps) => {
  const { theme } = useTheme();

  return (
    <>
      <ClerkProvider
        // appearance={{
        //   baseTheme: theme === "dark" ? dark : undefined,

        //   signIn: { baseTheme: theme === "dark" ? dark : undefined },
        //   organizationProfile: {
        //     baseTheme: theme === "dark" ? dark : undefined,
        //   },
        //   organizationSwitcher: {
        //     baseTheme: theme === "dark" ? dark : undefined,
        //   },
        // }}
        appearance={{ baseTheme: dark }}
      >
        <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
          <Authenticated>{children}</Authenticated>
          <AuthLoading>
            <Loading />
          </AuthLoading>
        </ConvexProviderWithClerk>
      </ClerkProvider>
    </>
  );
};
