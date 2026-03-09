import { BatteryIcon, SignalIcon, WifiIcon } from "./Icons";

export function PhoneShell({ children, overlay, toast }) {
  return (
    <div className="app-shell">
      <div className="phone-frame">
        <div className="phone-screen">
          <div className="status-bar">
            <span>9:41</span>
            <div className="status-icons">
              <SignalIcon />
              <WifiIcon />
              <BatteryIcon />
            </div>
          </div>
          <div className="screen-scroll">{children}</div>
          {overlay}
          {toast ? <div className="toast">{toast}</div> : null}
          <div className="gesture-bar" />
        </div>
      </div>
    </div>
  );
}
