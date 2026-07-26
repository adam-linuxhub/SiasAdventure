const Levels = {


levels:[

{
level:1,
name:"Explorer",
xp:0
},

{
level:2,
name:"Apprentice",
xp:100
},

{
level:3,
name:"Pathfinder",
xp:250
},

{
level:4,
name:"Spell Finder",
xp:500
},

{
level:5,
name:"Wizard Friend",
xp:1000
}

],



checkLevel(player){


let newLevel =
player.level;



this.levels.forEach(
(level)=>{


if(player.xp >= level.xp){

    newLevel = level.level;

    player.levelName =
    level.name;

}


});



if(newLevel > player.level){

    player.level =
    newLevel;


    return true;

}


return false;


}


};