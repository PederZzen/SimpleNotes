"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BASE_URL } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function UpdateComponent({ note }: any) {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const router = useRouter();

  const updateNote = async (e: any) => {
    e.preventDefault();

    await fetch(`${BASE_URL}/${note.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    router.push("/");
    router.refresh();
  };

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button>Update</Button>
        </PopoverTrigger>
        <PopoverContent>
          <form onSubmit={updateNote}>
            <label htmlFor="title">Title</label>
            <Input
              type="text"
              name="title"
              id="title"
              defaultValue={note.title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="title">Content</label>
            <Input
              className="mb-2"
              type="text"
              name="content"
              id="content"
              defaultValue={note.content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Button>Update</Button>
          </form>
        </PopoverContent>
      </Popover>
    </>
  );
}
