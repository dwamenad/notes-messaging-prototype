import { useEffect, useState } from "react";
import { GroupInfoScreen } from "./components/GroupInfoScreen";
import { NoteEditorModal } from "./components/NoteEditorModal";
import { NotesScreen } from "./components/NotesScreen";
import { PhoneShell } from "./components/PhoneShell";
import { SaveToNotesDemo } from "./components/SaveToNotesDemo";
import { initialNotes } from "./data/mockData";

function normalizeDraft(text) {
  return text.trim().slice(0, 240);
}

export default function App() {
  const [screenStack, setScreenStack] = useState(["group"]);
  const [notes, setNotes] = useState(initialNotes);
  const [editorDraft, setEditorDraft] = useState(null);
  const [toast, setToast] = useState("");

  const currentScreen = screenStack[screenStack.length - 1];

  useEffect(() => {
    if (!toast) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => setToast(""), 2200);
    return () => window.clearTimeout(timeoutId);
  }, [toast]);

  function pushScreen(nextScreen) {
    setScreenStack((current) => {
      if (current[current.length - 1] === nextScreen) {
        return current;
      }

      return [...current, nextScreen];
    });
  }

  function goBack() {
    setScreenStack((current) =>
      current.length > 1 ? current.slice(0, -1) : current
    );
  }

  function openAddNote(text = "", origin = "manual") {
    const safeText = normalizeDraft(text);

    setEditorDraft({
      id: null,
      label: "Personal",
      origin,
      text: safeText,
    });

    if (text.trim().length > safeText.length) {
      setToast("Draft trimmed to 240 characters.");
    }
  }

  function openEditNote(note) {
    setEditorDraft({
      ...note,
      origin: "manual",
    });
  }

  function closeEditor() {
    setEditorDraft(null);
  }

  function saveNote(draft) {
    const updatedAt = new Date().toISOString();

    setNotes((current) => {
      if (draft.id) {
        return current.map((note) =>
          note.id === draft.id ? { ...note, ...draft, updatedAt } : note
        );
      }

      return [
        {
          id: crypto.randomUUID(),
          label: draft.label,
          text: draft.text,
          updatedAt,
        },
        ...current,
      ];
    });

    setEditorDraft(null);
    setToast(draft.id ? "Note updated." : "Note saved.");
  }

  function deleteNote(noteId) {
    setNotes((current) => current.filter((note) => note.id !== noteId));
    setToast("Note deleted.");
  }

  function handleSaveFromMessage(messageText) {
    setScreenStack((current) => {
      const notesIndex = current.lastIndexOf("notes");

      if (notesIndex >= 0) {
        return current.slice(0, notesIndex + 1);
      }

      return ["group", "notes"];
    });

    openAddNote(messageText, "message");
  }

  let screen = null;

  if (currentScreen === "group") {
    screen = (
      <GroupInfoScreen
        noteCount={notes.length}
        onOpenNotes={() => pushScreen("notes")}
      />
    );
  }

  if (currentScreen === "notes") {
    screen = (
      <NotesScreen
        notes={notes}
        onAdd={() => openAddNote()}
        onBack={goBack}
        onDelete={deleteNote}
        onEdit={openEditNote}
        onOpenDemo={() => pushScreen("capture")}
      />
    );
  }

  if (currentScreen === "capture") {
    screen = (
      <SaveToNotesDemo
        onBack={goBack}
        onSaveToNotes={handleSaveFromMessage}
      />
    );
  }

  return (
    <div className="app">
      <PhoneShell
        overlay={
          editorDraft ? (
            <NoteEditorModal
              draft={editorDraft}
              onClose={closeEditor}
              onSave={saveNote}
            />
          ) : null
        }
        toast={toast}
      >
        {screen}
      </PhoneShell>
    </div>
  );
}
