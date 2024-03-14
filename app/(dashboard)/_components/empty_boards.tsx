"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useOrganization } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const EmptyBoards = () => {
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const router = useRouter();

  const onClick = async () => {
    if (!organization) return;

    mutate({
      orgId: organization.id,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board Created");

        router.push(`/board/${id}`);
      })
      .catch((error) => {
        toast.error("Failed to create board");
      });
  };

  return (
    <>
      <div className="flex flex-col h-full items-center justify-center">
        <Image src={"/note.svg"} alt="Empty Favs" height={140} width={140} />
        <h2 className="text-2xl font-semibold mt-6">
          Create Your First Board!
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Start by creating a board for your organization.
        </p>
        <div className="mt-6">
          <Button onClick={onClick} size="lg" disabled={pending}>
            Create Board
          </Button>
        </div>
      </div>
    </>
  );
};
