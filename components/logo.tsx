import Link from "next/link";

export const Logo = () => {
  return (
    <>
      {" "}
      <Link href="/">
        <div className="flex items-center gap-x-2 group">
          <span className="text-2xl bg-neutral-200 dark:bg-neutral-800 group-hover:bg-blue-500 transition rounded-full flex items-center justify-center px-2 group-hover:text-neutral-50 duration-500">
            Φ
          </span>
          <span className="italic text-xl group-hover:dark:text-blue-300  group-hover:text-blue-500 group-hover:translate-x-2 transition duration-500">
            flux
          </span>
        </div>
      </Link>
    </>
  );
};
