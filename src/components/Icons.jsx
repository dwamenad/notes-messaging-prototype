function SvgIcon({
  children,
  size = 20,
  className = "",
  strokeWidth = 1.9,
  ...props
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
      width={size}
      {...props}
    >
      {children}
    </svg>
  );
}

export function BackIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M15 18l-6-6 6-6" />
    </SvgIcon>
  );
}

export function ChevronRightIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M9 6l6 6-6 6" />
    </SvgIcon>
  );
}

export function PhoneIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M6.8 3.5h2.7l1.2 4.1-2.1 1.8a15 15 0 0 0 6 6l1.8-2.1 4.1 1.2v2.7a2 2 0 0 1-2 2A16.3 16.3 0 0 1 4.8 5.5a2 2 0 0 1 2-2Z" />
    </SvgIcon>
  );
}

export function VideoIcon(props) {
  return (
    <SvgIcon {...props}>
      <rect height="10" rx="2.5" width="12" x="3" y="7" />
      <path d="M15 10.6l4.5-2.7v8.2L15 13.4" />
    </SvgIcon>
  );
}

export function VolumeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M5 10h3l4-4v12l-4-4H5z" />
      <path d="M16 9.2a4.8 4.8 0 0 1 0 5.6" />
      <path d="M18.8 6.8a8 8 0 0 1 0 10.4" />
    </SvgIcon>
  );
}

export function BellIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M7 9a5 5 0 1 1 10 0v3.2l1.3 2.4a1 1 0 0 1-.9 1.4H6.6a1 1 0 0 1-.9-1.4L7 12.2Z" />
      <path d="M10 18a2 2 0 0 0 4 0" />
    </SvgIcon>
  );
}

export function NoteIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M7 4.8h8.8l3.2 3.3v10.1A1.8 1.8 0 0 1 17.2 20H7a2 2 0 0 1-2-2V6.8a2 2 0 0 1 2-2Z" />
      <path d="M15.8 4.8V8H19" />
      <path d="M8.7 12h6.6" />
      <path d="M8.7 15.6h4.7" />
    </SvgIcon>
  );
}

export function MediaIcon(props) {
  return (
    <SvgIcon {...props}>
      <rect height="14" rx="3" width="16" x="4" y="5" />
      <circle cx="9" cy="10" r="1.3" />
      <path d="M8 17l3.4-3.5a1 1 0 0 1 1.4 0L16 17" />
    </SvgIcon>
  );
}

export function PeopleIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M9.4 12.6a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2Z" />
      <path d="M4.8 18.3a4.8 4.8 0 0 1 9.2 0" />
      <path d="M16.3 12.1a2.5 2.5 0 1 0 0-5" />
      <path d="M15.5 14.7a4 4 0 0 1 3.7 3.6" />
    </SvgIcon>
  );
}

export function PlusIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </SvgIcon>
  );
}

export function EditIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M4.8 19.2l3.6-.6 8.2-8.2a2 2 0 0 0-2.9-2.9l-8.2 8.2-.7 3.5Z" />
      <path d="M12.8 7.2l4 4" />
    </SvgIcon>
  );
}

export function TrashIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M4.8 7.2h14.4" />
      <path d="M9.5 4.8h5l.8 2.4H8.7z" />
      <path d="M8 7.2v10a1.8 1.8 0 0 0 1.8 1.8h4.4A1.8 1.8 0 0 0 16 17.2v-10" />
      <path d="M10.3 10.3v5" />
      <path d="M13.7 10.3v5" />
    </SvgIcon>
  );
}

export function MoreIcon(props) {
  return (
    <SvgIcon {...props}>
      <circle cx="6" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="18" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </SvgIcon>
  );
}

export function BookmarkIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M7 4.8h10a1.7 1.7 0 0 1 1.7 1.7v12.7L12 15.8l-6.7 3.4V6.5A1.7 1.7 0 0 1 7 4.8Z" />
    </SvgIcon>
  );
}

export function ReplyIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 8 5 12l5 4" />
      <path d="M6 12h7a5 5 0 0 1 5 5" />
    </SvgIcon>
  );
}

export function StarIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="m12 4.9 2.1 4.3 4.8.7-3.4 3.3.8 4.7-4.3-2.3-4.3 2.3.8-4.7-3.4-3.3 4.8-.7Z" />
    </SvgIcon>
  );
}

export function ForwardIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="m14 8 5 4-5 4" />
      <path d="M18 12H6a3 3 0 0 0-3 3" />
    </SvgIcon>
  );
}

export function SignalIcon(props) {
  return (
    <SvgIcon size={16} strokeWidth={2} {...props}>
      <path d="M4 18h1.8" />
      <path d="M8 15.5h1.8" />
      <path d="M12 12.8h1.8" />
      <path d="M16 10h1.8" />
    </SvgIcon>
  );
}

export function WifiIcon(props) {
  return (
    <SvgIcon size={16} strokeWidth={2} {...props}>
      <path d="M4.5 9.8a10 10 0 0 1 15 0" />
      <path d="M7.4 12.4a6 6 0 0 1 9.2 0" />
      <path d="M10.3 15a2.2 2.2 0 0 1 3.4 0" />
      <path d="M12 18h0" />
    </SvgIcon>
  );
}

export function BatteryIcon(props) {
  return (
    <SvgIcon size={18} strokeWidth={1.8} {...props}>
      <rect height="8" rx="2" width="13" x="4" y="8" />
      <path d="M17 10h2v4h-2" />
      <rect fill="currentColor" height="4" rx="1" stroke="none" width="7" x="6" y="10" />
    </SvgIcon>
  );
}
