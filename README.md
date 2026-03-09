# Notes Messaging Prototype

React prototype for a private "Notes" feature presented inside an original dark-mode messaging app mockup.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Component Structure

- `src/App.jsx` keeps screen navigation, note CRUD state, and the shared modal/toast behavior.
- `src/components/GroupInfoScreen.jsx` renders the info page with the inserted `Notes` row between custom notifications and media visibility.
- `src/components/NotesScreen.jsx` shows the dedicated notes list, add button, and editable note cards.
- `src/components/NoteEditorModal.jsx` handles add/edit note entry with label chips and the 240-character limit.
- `src/components/SaveToNotesDemo.jsx` demonstrates the future long-press "Save to Notes" chat action.
