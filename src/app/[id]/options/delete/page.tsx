"use client";

import { Button } from "@/components/ui/button";
import { BASE_URL } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";

export default function DeleteComponent({ id }: any) {
  const router = useRouter();
  const deleteNote = async () => {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    router.push("/");
    router.refresh();
  };
  return <Button onClick={deleteNote}>Delete</Button>;
}
