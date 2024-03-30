"use client";
import ReadMoreComponent from "@/components/readmore";
import ListItem from "../publications/Components/ListItem";
import { talks_list } from "../cv/Publication_updates/talks";

export default function Talks() {
  return (
    <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
      <h1 className="text-2xl mb-[15px] font-semibold"> Publications </h1>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {talks_list.map((paper, key) => (
          <ListItem key={key} item={paper} buttonName="Slides"/>
        ))}
      </ol>
    </main>
  );
}
