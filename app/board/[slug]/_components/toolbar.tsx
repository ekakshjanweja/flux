export const Toolbar = () => {
  return (
    <>
      <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
        <div className="bg-neutral-50 dark:bg-neutral-950 rounded-md p-1.5 float-start gap-y-1 flex flex-col items-center shadow-md">
          <div>Pencil</div>
          <div>Square</div>
          <div>Circle</div>
        </div>
        <div className="bg-neutral-50 dark:bg-neutral-950 rounded-md p-1.5 flex flex-col items-center shadow-md">
          <div>Undo</div>
          <div>Redo</div>
        </div>
      </div>
    </>
  );
};
