"use client";

import Link from "next/link";
import dayjs from "dayjs";

export default function Note({ note }: any) {
  const { id, title, color, content, created } = note || {};

  const formattedDate = dayjs(created).format("MMM DD YYYY");

  return (
    <div className="relative">
      <Link href={`/${id}`}>
        <div
          style={{ backgroundColor: color }}
          className={`relative w-60 shadow-md text-slate-800 flex flex-col justify-between p-2 h-60 rounded-sm`}
        >
          <div>
            <h2 className="font-bold mb-2">{title}</h2>
            <p>{content}</p>
          </div>
          <div>
            <h3>{formattedDate}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}
