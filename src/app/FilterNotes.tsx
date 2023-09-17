"use client";

import { Input } from "@/components/ui/input";
import getNotes from "@/functions/getNotes";
import React, { useState } from "react";

export default function FilterNotes() {
  const [search, setSearch] = useState("");

  // const filteredNotes = notes.filter((note) => {
  //   return note.title.toLowerCase().includes(search.toLowerCase());
  // });

  return (
    <Input
      placeholder="Search..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
