export default async function getNote(id: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${id}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = res.json();
  return data;
}
