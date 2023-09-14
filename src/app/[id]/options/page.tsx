"use client";

import React from "react";
import UpdateComponent from "./update/page";
import DeleteComponent from "./delete/page";

export default function Options({ note }: any) {
  return (
    <div className="flex mt-2 gap-2">
      <UpdateComponent note={note} />
      <DeleteComponent id={note.id} />
    </div>
  );
}
