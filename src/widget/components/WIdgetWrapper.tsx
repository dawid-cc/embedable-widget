import { useWidgetStore } from "../store/globalState";
import { ChatLog } from "./ChatLog";
import { WidgetButton } from "./WidgetButton";
import styles from "../styles/styles.css?inline";

export const WIdgetWrapper = () => {
  const open = useWidgetStore((state) => state.open);
  return (
    <>
      <style> {styles}</style>
      {open ? <ChatLog /> : <WidgetButton />}
    </>
  );
};
