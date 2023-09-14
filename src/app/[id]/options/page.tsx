"use client";

import React from "react";
import UpdateComponent from "./update/page";
import DeleteComponent from "./delete/page";

export default function Options({ note }: any) {
  return (
    <>
      <UpdateComponent note={note} />
      <DeleteComponent id={note.id} />
    </>
  );
}
