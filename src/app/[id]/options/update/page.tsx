"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { BASE_URL } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function UpdateComponent({ note }: any) {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [color, setColor] = useState(note.color);

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
        color,
      }),
    });

    router.push("/");
    router.refresh();
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Update</Button>
        </DialogTrigger>
        <DialogContent>
          <form onSubmit={updateNote}>
            <div>
              <label htmlFor="title">Title</label>
              <Input
                type="text"
                name="title"
                id="title"
                defaultValue={note.title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="title">Content</label>
              <Input
                className="my-2"
                type="text"
                name="content"
                id="content"
                defaultValue={note.content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div>
              <input
                type="color"
                name="color"
                id="color"
                defaultValue={note.color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
            <Button>Update</Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
