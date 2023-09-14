import getNote from "@/functions/getNote";
import Link from "next/link";
import Options from "./options/page";
import dayjs from "dayjs";

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);

  const formattedDate = dayjs(note.created).format("MMM DD YYYY");

  return (
    <>
      <h1>
        <Link href="/">Back</Link>
      </h1>
      <div
        style={{ backgroundColor: note.color }}
        className="w-60 shadow-md text-slate-800 flex flex-col justify-between p-2 h-60 rounded-sm"
      >
        <div>
          <h2 className="font-bold mb-2">{note.title}</h2>
          <p>{note.content}</p>
        </div>
        <div>
          <h3>{formattedDate}</h3>
        </div>
      </div>
      <Options note={note} />
    </>
  );
}
