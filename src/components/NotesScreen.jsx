import {
  BackIcon,
  EditIcon,
  MoreIcon,
  NoteIcon,
  PlusIcon,
  TrashIcon,
} from "./Icons";

function formatEditedAt(isoString) {
  const date = new Date(isoString);
  const now = new Date();
  const sameDay =
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate();
  const time = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  if (sameDay) {
    return `Edited today, ${time}`;
  }

  const day = date.toLocaleDateString([], {
    month: "short",
    day: "numeric",
  });

  return `Edited ${day}, ${time}`;
}

function NoteCard({ note, onDelete, onEdit }) {
  return (
    <article className="note-card">
      <div className="note-card-top">
        <span className="note-label">{note.label}</span>
        <div className="note-actions">
          <button
            aria-label={`Edit ${note.label} note`}
            className="icon-button icon-button-soft"
            onClick={() => onEdit(note)}
            type="button"
          >
            <EditIcon size={16} />
          </button>
          <button
            aria-label={`${note.label} note options`}
            className="icon-button icon-button-soft"
            type="button"
          >
            <MoreIcon size={16} />
          </button>
        </div>
      </div>
      <p className="note-text">{note.text}</p>
      <div className="note-card-bottom">
        <small>{formatEditedAt(note.updatedAt)}</small>
        <button
          className="text-action text-action-danger"
          onClick={() => onDelete(note.id)}
          type="button"
        >
          <TrashIcon size={14} />
          <span>Delete</span>
        </button>
      </div>
    </article>
  );
}

export function NotesScreen({
  notes,
  onAdd,
  onBack,
  onDelete,
  onEdit,
  onOpenDemo,
}) {
  return (
    <div className="screen-view">
      <div className="top-bar">
        <button
          aria-label="Back to group info"
          className="icon-button"
          onClick={onBack}
          type="button"
        >
          <BackIcon />
        </button>
        <span className="top-bar-label">Notes</span>
        <button
          aria-label="Create note"
          className="icon-button"
          onClick={onAdd}
          type="button"
        >
          <PlusIcon />
        </button>
      </div>

      <section className="screen-header">
        <div className="header-badge">
          <NoteIcon size={16} />
          <span>Private to you</span>
        </div>
        <h1 className="screen-title screen-title-left">Notes</h1>
        <p className="screen-subtitle screen-subtitle-left">
          Save short details you want to remember from this chat.
        </p>
      </section>

      <section className="section-card shortcut-card">
        <div>
          <small className="eyebrow">Future shortcut</small>
          <h2 className="card-title">Save a message directly into Notes</h2>
          <p className="card-copy">
            Long-press a message bubble, choose Save to Notes, and start from a
            ready-made draft.
          </p>
        </div>
        <button className="ghost-button" onClick={onOpenDemo} type="button">
          Open demo
        </button>
      </section>

      <section className="notes-list">
        {notes.length ? (
          notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))
        ) : (
          <div className="section-card empty-card">
            <div className="empty-icon">
              <NoteIcon size={18} />
            </div>
            <h2 className="card-title">No notes yet</h2>
            <p className="card-copy">
              Save birthdays, favorite things, and other details you want to
              remember from this chat.
            </p>
          </div>
        )}
      </section>

      <button className="fab" onClick={onAdd} type="button">
        <PlusIcon size={18} />
        <span>Add note</span>
      </button>
    </div>
  );
}
