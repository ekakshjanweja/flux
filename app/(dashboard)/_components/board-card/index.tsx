"use client";

import Image from "next/image";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { useAuth } from "@clerk/nextjs";
import { Footer } from "./footer";
import { Skeleton } from "@/components/ui/skeleton";

interface BoardCardProps {
  id: string;
  title: string;
  authorName: string;
  imageUrl: string;
  authorId: string;
  orgId: string;
  isFavorite: boolean;
  createdAt: number;
}

export const BoardCard = ({
  authorId,
  authorName,
  createdAt,
  id,
  imageUrl,
  isFavorite,
  orgId,
  title,
}: BoardCardProps) => {
  const { userId } = useAuth();

  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, {
    addSuffix: true,
  });

  return (
    <>
      <Link href={`/board/${id}`}>
        <div className="group aspect-square border rounded-lg flex flex-col justify-between overflow-hidden">
          <div className="relative flex-1 bg-neutral-100 dark:bg-neutral-900 group-hover:bg-neutral-200 group-hover:dark:bg-neutral-800 transition duration-500">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-fit scale-50 group-hover:scale-100 transition duration-500 group-hover:hue-rotate-90 group-hover:-rotate-12"
            />
          </div>
          <Footer
            isFavorite={isFavorite}
            title={title}
            authorLabel={authorLabel}
            createdAtLabel={createdAtLabel}
            onClick={() => {}}
            disabled={false}
          />
        </div>
      </Link>
    </>
  );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="aspect-square rounded-lg overflow-hidden">
      <Skeleton className="h-full w-full" />
    </div>
  );
};
