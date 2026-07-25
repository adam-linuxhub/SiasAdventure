const PlayerStorage = {


load(){

    const saved =
        localStorage.getItem(
            "siasAdventure"
        );


    if(saved){

        return JSON.parse(saved);

    }


    return {

        stars:0,

        xp:0,

        level:"Explorer",

        questionsAnswered:0,

        correct:0

    };

},



save(player){

    localStorage.setItem(
        "siasAdventure",
        JSON.stringify(player)
    );

}


};