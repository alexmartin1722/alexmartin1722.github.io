"use client";
import ReadMoreComponent from "@/components/readmore";
import ListItem from "./Components/ListItem";
import { publication_list } from "../cv/Publication_updates/publication_json";

export default function Publications() {
  return (
    <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
      <h1 className="text-2xl mb-[15px] font-semibold"> Publications </h1>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {publication_list.map((paper, key) => (
          <ListItem key={key} item={paper} buttonName="Paper"/>
        ))}
      </ol>
    </main>
  );
}
