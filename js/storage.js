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

        name:"Sia",

        xp:0,

        stars:0,

        level:1,

        levelName:"Explorer",

        treasureChests:0,

        badges:[],

        questionsAnswered:0,

        correct:0,

        incorrect:0

    };

},



save(player){

    localStorage.setItem(
        "siasAdventure",
        JSON.stringify(player)
    );

}


};