import {
  BackIcon,
  BellIcon,
  ChevronRightIcon,
  MediaIcon,
  MoreIcon,
  NoteIcon,
  PeopleIcon,
  PhoneIcon,
  VideoIcon,
  VolumeIcon,
} from "./Icons";
import { participants } from "../data/mockData";

function SettingRow({ icon, title, subtitle, onClick, highlight = false }) {
  return (
    <button
      className={`setting-row ${highlight ? "setting-row-highlight" : ""}`}
      onClick={onClick}
      type="button"
    >
      <div className="row-icon">{icon}</div>
      <div className="row-copy">
        <span>{title}</span>
        <small>{subtitle}</small>
      </div>
      <ChevronRightIcon className="row-chevron" size={18} />
    </button>
  );
}

export function GroupInfoScreen({ noteCount, onOpenNotes }) {
  const notesSubtitle = noteCount
    ? `${noteCount} saved ${noteCount === 1 ? "note" : "notes"}`
    : "Remember important details from this chat";

  return (
    <div className="screen-view">
      <div className="top-bar">
        <button
          aria-label="Go back"
          className="icon-button icon-button-muted"
          disabled
          type="button"
        >
          <BackIcon />
        </button>
        <span className="top-bar-label">Group info</span>
        <button
          aria-label="More options"
          className="icon-button icon-button-muted"
          type="button"
        >
          <MoreIcon />
        </button>
      </div>

      <section className="section-card hero-card">
        <div className="hero-avatar">
          <span>WT</span>
        </div>
        <h1 className="screen-title">WhatsApp test</h1>
        <p className="screen-subtitle">Group · 2 participants</p>

        <div className="action-strip">
          <button className="action-chip" type="button">
            <PhoneIcon size={18} />
            <span>Audio</span>
          </button>
          <button className="action-chip" type="button">
            <VideoIcon size={18} />
            <span>Video</span>
          </button>
        </div>
      </section>

      <section className="section-card">
        <div className="section-heading">Group details</div>
        <button className="description-row" type="button">
          <div className="row-copy">
            <span>Add group description</span>
            <small>Write context, reminders, or house rules.</small>
          </div>
          <ChevronRightIcon className="row-chevron" size={18} />
        </button>
      </section>

      <section className="section-card">
        <div className="section-heading">Preferences</div>
        <SettingRow
          icon={<VolumeIcon size={18} />}
          subtitle="Off"
          title="Mute notifications"
        />
        <SettingRow
          icon={<BellIcon size={18} />}
          subtitle="Default group behavior"
          title="Custom notifications"
        />
        <SettingRow
          highlight
          icon={<NoteIcon size={18} />}
          onClick={onOpenNotes}
          subtitle={notesSubtitle}
          title="Notes"
        />
        <SettingRow
          icon={<MediaIcon size={18} />}
          subtitle="Show media in your device gallery"
          title="Media visibility"
        />
      </section>

      <section className="section-card participants-card">
        <div className="section-heading participants-heading">
          <span>Participants</span>
          <span className="section-meta">2 people</span>
        </div>

        <div className="participant-intro">
          <div className="row-icon">
            <PeopleIcon size={18} />
          </div>
          <div className="row-copy">
            <span>Add participant</span>
            <small>Keep the circle small and intentional.</small>
          </div>
        </div>

        {participants.map((participant) => (
          <div className="participant-row" key={participant.id}>
            <div className="participant-avatar">{participant.initials}</div>
            <div className="row-copy">
              <span>{participant.name}</span>
              <small>{participant.subtitle}</small>
            </div>
            {participant.role ? (
              <span className="participant-role">{participant.role}</span>
            ) : null}
          </div>
        ))}
      </section>
    </div>
  );
}
