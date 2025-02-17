import { createRoot } from "react-dom/client";
import { WIdgetWrapper } from "./components/WIdgetWrapper";

function init() {
  if (document.readyState !== "loading") {
    onReady();
  } else {
    document.addEventListener("DOMContentLoaded", onReady);
  }
}

function onReady() {
  try {
    const element = document.createElement("div");
    const shadow = element.attachShadow({ mode: "open" });
    const shadowRoot = document.createElement("div");

    const component = <WIdgetWrapper />;

    shadow.appendChild(shadowRoot);
    const root = createRoot(shadowRoot);
    root.render(component);
    document.body.appendChild(element);
  } catch (error) {
    console.warn("init not possible: ", error);
  }
}

init();
