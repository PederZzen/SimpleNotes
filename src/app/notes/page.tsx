import Note from "@/components/note/page";
import getNotes from "@/functions/getNotes";
import NewNote from "./NewNote";

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div>
      <h1>Notes</h1>
      <section>
        <NewNote />
      </section>
      <section className="flex flex-wrap gap-2 mt-4">
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </section>
    </div>
  );
}
