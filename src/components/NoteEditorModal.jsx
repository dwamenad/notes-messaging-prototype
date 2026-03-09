import { useEffect, useState } from "react";
import { labels } from "../data/mockData";

export function NoteEditorModal({ draft, onClose, onSave }) {
  const [selectedLabel, setSelectedLabel] = useState("Personal");
  const [text, setText] = useState("");

  useEffect(() => {
    setSelectedLabel(draft?.label || "Personal");
    setText(draft?.text || "");
  }, [draft]);

  const trimmedText = text.trim();
  const charCount = text.length;
  const canSave = trimmedText.length > 0 && charCount <= 240;

  function handleSubmit(event) {
    event.preventDefault();

    if (!canSave) {
      return;
    }

    onSave({
      id: draft?.id,
      label: selectedLabel,
      text: trimmedText,
    });
  }

  return (
    <div className="modal-layer" role="presentation">
      <button
        aria-label="Close note editor"
        className="modal-backdrop"
        onClick={onClose}
        type="button"
      />

      <form className="note-modal" onSubmit={handleSubmit}>
        <div className="modal-handle" />
        <div className="modal-header">
          <div>
            <small className="eyebrow">
              {draft?.origin === "message" ? "Drafted from message" : "Private"}
            </small>
            <h2>{draft?.id ? "Edit note" : "Add note"}</h2>
          </div>
          <span className="counter">{charCount}/240</span>
        </div>

        {draft?.origin === "message" ? (
          <div className="origin-banner">
            Start with the message content, then trim it into a clean personal
            reminder.
          </div>
        ) : null}

        <label className="field">
          <span>Note</span>
          <textarea
            maxLength={240}
            onChange={(event) => setText(event.target.value)}
            placeholder="Keep it short: birthdays, favorites, anniversaries, family details..."
            rows={5}
            value={text}
          />
        </label>

        <div className="field">
          <span>Label</span>
          <div className="tag-grid">
            {labels.map((label) => (
              <button
                className={`tag-pill ${
                  selectedLabel === label ? "tag-pill-active" : ""
                }`}
                key={label}
                onClick={() => setSelectedLabel(label)}
                type="button"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="modal-actions">
          <button className="secondary-button" onClick={onClose} type="button">
            Cancel
          </button>
          <button className="primary-button" disabled={!canSave} type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
