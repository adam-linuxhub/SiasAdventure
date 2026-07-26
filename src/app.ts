console.log("✨ Sia's Adventure loaded");

function startAdventure(): void {
  window.location.href = "game.html";
}

function continueAdventure(): void {
  window.location.href = "game.html";
}

function openDashboard(): void {
  window.location.href = "dashboard.html";
}

// Make the functions available to the existing HTML
(window as any).startAdventure = startAdventure;
(window as any).continueAdventure = continueAdventure;
(window as any).openDashboard = openDashboard;