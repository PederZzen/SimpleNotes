"use client";

import Link from "next/link";

export default function Note({ note }: any) {
  const { id, title, content, created } = note || {};

  return (
    <div className="relative">
      <Link href={`/${id}`}>
        <div className="bg-yellow-300 relative w-60 shadow-md text-slate-800 flex flex-col justify-between p-2 h-60 rounded-sm">
          <div>
            <h2 className="font-bold mb-2">{title}</h2>
            <p>{content}</p>
          </div>
          <div>
            <h3>{created}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}
