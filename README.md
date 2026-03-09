# Notes Messaging Prototype

React prototype for a private "Chat Notes" feature presented inside an original dark-mode messaging app mockup. This repository is intended as a product, design, and engineering review artifact rather than a production messaging client.

## Repository Scope

- Original UI implementation built for feature exploration and internal review.
- Mobile-sized prototype focused on a chat relationship memory feature.
- Includes a group info entry point, notes list, add/edit note flow, and a future-facing "Save to Notes" interaction demo.
- Does not use or claim to use WhatsApp source code.

## Run Locally

```bash
npm install
npm run dev
```

Open the local Vite URL printed in the terminal, typically `http://127.0.0.1:5173/`.

## Build for Review

```bash
npm run build
```

## Component Structure

- `src/App.jsx` keeps screen navigation, note CRUD state, and the shared modal and toast behavior.
- `src/components/GroupInfoScreen.jsx` renders the info page with the inserted `Notes` row between custom notifications and media visibility.
- `src/components/NotesScreen.jsx` shows the dedicated notes list, add button, and editable note cards.
- `src/components/NoteEditorModal.jsx` handles add and edit note entry with label chips and the 240-character limit.
- `src/components/SaveToNotesDemo.jsx` demonstrates the future long-press "Save to Notes" chat action.
