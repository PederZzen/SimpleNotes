import { BASE_URL } from "@/lib/utils";

export default async function getNotes() {
  const res = await fetch(`${BASE_URL}?page=1&perPage=30`, {
    cache: "no-store",
  });
  const data = await res.json();

  return data?.items as any[];
}
