import { useWidgetStore } from "../store/globalState";

export const WidgetButton = () => {
  const setOpen = useWidgetStore((state) => state.setOpen);

  const openWidget = () => {
    setOpen(true);
  };
  return (
    <button className="widget-button" onClick={openWidget}>
      WidgetButton
    </button>
  );
};
