"use client";

import { Input } from "@/components/ui/input";
import React, { useState } from "react";

export default function FilterNotes() {
  const [search, setSearch] = useState("");

  return (
    <Input
      placeholder="Search..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
