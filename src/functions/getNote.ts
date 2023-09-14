import { BASE_URL } from "@/lib/utils";

export default async function getNote(id: string) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    // next: { revalidate: 1 },
    cache: "no-store",
  });
  const data = res.json();
  return data;
}
