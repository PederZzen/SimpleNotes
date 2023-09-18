import Note from "@/components/note/page";
import getNotes from "@/functions/getNotes";
import NewNote from "./NewNote";
import FilterNotes from "./FilterNotes";

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div>
      <section>
        <NewNote />
      </section>
      <section>{/* <FilterNotes /> */}</section>
      <section className="flex flex-wrap gap-2 mt-4">
        {notes.length != 0
          ? notes.map((note) => <Note key={note.id} note={note} />)
          : "No notes"}
      </section>
    </div>
  );
}
