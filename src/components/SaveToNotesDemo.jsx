import { useEffect, useRef, useState } from "react";
import { messageThread } from "../data/mockData";
import {
  BackIcon,
  BookmarkIcon,
  ForwardIcon,
  ReplyIcon,
  StarIcon,
} from "./Icons";

const actionItems = [
  { id: "reply", label: "Reply", icon: ReplyIcon },
  { id: "star", label: "Star", icon: StarIcon },
  { id: "notes", label: "Save to Notes", icon: BookmarkIcon, primary: true },
  { id: "forward", label: "Forward", icon: ForwardIcon },
];

export function SaveToNotesDemo({ onBack, onSaveToNotes }) {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const holdTimerRef = useRef(null);

  useEffect(() => {
    return () => window.clearTimeout(holdTimerRef.current);
  }, []);

  function clearHold() {
    window.clearTimeout(holdTimerRef.current);
  }

  function openMenu(message) {
    setSelectedMessage(message);
  }

  function startHold(message) {
    clearHold();
    holdTimerRef.current = window.setTimeout(() => openMenu(message), 360);
  }

  return (
    <div className="screen-view">
      <div className="top-bar">
        <button
          aria-label="Back to notes"
          className="icon-button"
          onClick={onBack}
          type="button"
        >
          <BackIcon />
        </button>
        <span className="top-bar-label">Save to Notes</span>
        <div className="top-bar-spacer" />
      </div>

      <section className="screen-header">
        <div className="header-badge">
          <BookmarkIcon size={16} />
          <span>Interaction demo</span>
        </div>
        <h1 className="screen-title screen-title-left">Message long-press menu</h1>
        <p className="screen-subtitle screen-subtitle-left">
          Long-press any bubble to reveal a future Save to Notes shortcut. A
          single tap also opens it for desktop demos.
        </p>
      </section>

      <section className="chat-demo">
        {messageThread.map((message) => (
          <button
            className={`message-bubble ${
              message.outgoing ? "message-bubble-outgoing" : "message-bubble-incoming"
            } ${message.id === "message-2" ? "message-bubble-pulse" : ""}`}
            key={message.id}
            onClick={() => openMenu(message)}
            onContextMenu={(event) => {
              event.preventDefault();
              openMenu(message);
            }}
            onPointerDown={() => startHold(message)}
            onPointerLeave={clearHold}
            onPointerUp={clearHold}
            type="button"
          >
            <span>{message.text}</span>
            <small>{message.time}</small>
          </button>
        ))}
      </section>

      <section className="section-card hint-card">
        <small className="eyebrow">Prototype behavior</small>
        <p className="card-copy">
          Choosing <strong>Save to Notes</strong> opens the add-note composer
          with the message content prefilled so it can be shortened or tagged.
        </p>
      </section>

      {selectedMessage ? (
        <div className="sheet-layer" role="presentation">
          <button
            aria-label="Close action sheet"
            className="modal-backdrop"
            onClick={() => setSelectedMessage(null)}
            type="button"
          />
          <div className="action-sheet">
            <div className="modal-handle" />
            <div className="sheet-preview">{selectedMessage.text}</div>
            <div className="sheet-actions">
              {actionItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    className={`sheet-action ${
                      item.primary ? "sheet-action-primary" : ""
                    }`}
                    key={item.id}
                    onClick={() => {
                      if (item.id === "notes") {
                        onSaveToNotes(selectedMessage.text);
                      }
                      setSelectedMessage(null);
                    }}
                    type="button"
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
