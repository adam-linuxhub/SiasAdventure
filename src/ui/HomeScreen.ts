export class HomeScreen {
    render(): void {
        const app = document.getElementById("app");

        if (!app) {
            return;
        }

        app.innerHTML = `
            <h1>✨ Sia's Adventure ✨</h1>
            <p>Academy of Knowledge</p>

            <button id="startButton">
                ▶ Start Adventure
            </button>
        `;
    }
}