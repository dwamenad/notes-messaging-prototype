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

## Developer Handoff Brief

### Feature Summary

- Feature: Chat Notes
- Product Area: Chat, Contact Info, Group Info
- Platform: iOS and Android with parity expected across both
- Visibility: Private to the current user only

### Overview

Users often want to remember small personal details about contacts or groups, such as birthdays, anniversaries, milestones, preferences, and family facts. In current messaging behavior, people usually work around this by starring messages or sending reminders to themselves, but those patterns do not attach the information to the specific relationship context.

The proposed Notes feature allows users to save short private notes tied to a specific chat or group. These notes are intended for lightweight reminders such as birthdays, anniversaries, graduation dates, favorite things, and other meaningful details.

### Product Goals

#### Primary Goal

Allow users to store small contextual facts about people or groups directly within the chat relationship layer.

#### Secondary Goals

- Reduce friction when recalling personal details.
- Provide a lightweight memory tool without turning the product into a full note-taking app.
- Improve relationship continuity across long chat histories.

### Non-Goals

The Notes feature will not:

- Replace full note-taking apps.
- Allow collaborative note editing.
- Be visible to other chat participants.
- Store large content such as images, files, or long-form text.
- Replace starred messages.
