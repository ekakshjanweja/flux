"use client";

import { useOrganization } from "@clerk/nextjs";
import { EmptyOrganisation } from "./_components/empty-organisation";
import { BoardList } from "./_components/board-list";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}

const DashboardPage = ({ searchParams }: DashboardPageProps) => {
  const { organization } = useOrganization();

  return (
    <>
      <div className="flex-1 p-6 h-full">
        {!organization ? (
          <EmptyOrganisation />
        ) : (
          <>
            <BoardList orgId={organization.id} query={searchParams} />
          </>
        )}
      </div>
    </>
  );
};

export default DashboardPage;
