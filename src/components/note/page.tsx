"use client";

import Link from "next/link";
import dayjs from "dayjs";
import AddToFavorites from "../addToFavorites/page";

export default function Note({ note }: any) {
  const { id, title, color, content, created } = note || {};

  const formattedDate = dayjs(created).format("MMM DD YYYY");

  return (
    <div className="relative">
      <Link href={`/${id}`}>
        <div
          style={{ backgroundColor: color, minHeight: "15rem" }}
          className={`relative w-60 shadow-md text-slate-800 flex flex-col justify-between p-2 rounded-sm`}
        >
          <div className="mb-2">
            <h2 className="font-bold mb-2">{title}</h2>
            <p>{content}</p>
          </div>
          <div>
            <h3>{formattedDate}</h3>
          </div>
        </div>
      </Link>
      <AddToFavorites />
    </div>
  );
}
