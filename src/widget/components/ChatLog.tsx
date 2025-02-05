import { useWidgetStore } from "../store/globalState";

export const ChatLog = () => {
  const setOpen = useWidgetStore((state) => state.setOpen);
  const closeWidget = () => {
    setOpen(false);
  };

  return (
    <div className="widget-container">
      <div className="widget-header">
        Siema <button onClick={closeWidget}>X</button>
      </div>
      <div className="widget-content">content goes here</div>
    </div>
  );
};
