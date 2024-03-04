"use client";

import { Search } from "lucide-react";
import qs from "query-string";
import { useDebounceValue, useDebounceCallback } from "usehooks-ts";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { ChangeEvent, use, useEffect, useState } from "react";

export const SearchInput = () => {
  const router = useRouter();

  const [value, setValue] = useState("");

  const debouncedValue = useDebounceValue(value, 500);
  const debouncedCallback = useDebounceCallback(setValue, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          search: debouncedValue[0],
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <>
      <div className="w-full relative flex items-center justify-start gap-x-6 group">
        <Search className="absolute h-4 w-4 my-auto text-muted-foreground left-3 group-hover:text-foreground transition" />
        <Input
          className="max-w-2xl pl-10 text-muted-foreground group-hover:text-foreground transition"
          type="text"
          placeholder="Search boards"
          onChange={handleChange}
          value={value}
        />
      </div>
    </>
  );
};
