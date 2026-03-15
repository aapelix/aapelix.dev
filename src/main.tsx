import { render } from "preact";
import "./index.css";
import { App } from "./app.tsx";
import "virtual:uno.css";

render(<App />, document.getElementById("app")!);
