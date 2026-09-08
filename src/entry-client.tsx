import { mount, StartClient } from "@solidjs/start/client";

document.getElementById("static-shell")?.remove();

mount(() => <StartClient />, document.getElementById("root")!);
