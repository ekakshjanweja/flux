import { List } from "./list";
import { NewButton } from "./new-button";

export const Sidebar = () => {
  return (
    <>
      <aside className="fixed z-[1] left-0 bg-neutral-900 h-full w-[60px] flex flex-col p-3 gap-y-6">
        <List />
        <NewButton />
      </aside>
    </>
  );
};
