function startAdventure(){

    const subject =
        document.getElementById("subject").value;

    localStorage.setItem(
        "subject",
        subject
    );

    window.location.href = "game.html";

}



function continueAdventure(){

    window.location.href = "game.html";

}



function openDashboard(){

    window.location.href = "dashboard.html";

}