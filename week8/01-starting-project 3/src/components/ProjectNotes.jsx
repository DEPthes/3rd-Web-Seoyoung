import { useState } from "react";

export default function ProjectNotes({ onSaveNote, initialNote }) {
  const [note, setNote] = useState(initialNote || "");

  function handleChange(event) {
    setNote(event.target.value);
  }

  function handleSave() {
    onSaveNote(note);
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-stone-600 mb-2">Project Notes</h3>
      <textarea
        className="w-full h-32 p-2 rounded-sm bg-stone-200"
        value={note}
        onChange={handleChange}
      />
      <button
        className="mt-2 px-4 py-2 rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        onClick={handleSave}
      >
        Save Note
      </button>
    </div>
  );
}
