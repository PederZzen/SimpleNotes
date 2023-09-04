import getNote from "@/functions/getNote";
import Link from "next/link";

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);

  return (
    <>
      <h1>
        <Link href="/notes">Notes</Link> / {note.title}
      </h1>
      <div className="bg-yellow-300 w-60 shadow-md text-slate-800 flex flex-col justify-between p-2 h-60 rounded-sm">
        <div>
          <h2 className="font-bold mb-2">{note.title}</h2>
          <p>{note.content}</p>
        </div>
        <div>
          <h3>{note.created}</h3>
        </div>
      </div>
    </>
  );
}
