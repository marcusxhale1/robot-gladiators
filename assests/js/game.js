// this creates a function named "flight"
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can also log multiple vailues at once like this 
console.log(playerName, playerAttack, playerHealth)

var enemyName = "This Fool";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(){
    window.alert ("Welcome to the Robot Gladiators!");
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

var promptFight = window.prompt("Would you like to FIGHT or SKIP this round? Enter 'FIGHT' or 'SKIP'to choose.");

//if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemt's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaning."
    );

    //check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    //remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyHealth;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    // check players health 
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    // if player chooses to skip
} else if (promptFight === "skip" || promptFight === "SKIP"){
 // confirm player wants to skip
 var confirmSkip = window.confirm("Are you sure you'd like to quit?");
 //if yes(true), leave fight 
 if (confirmSkip){
     window.alert(playerName + " has decided to skip this fight. Peace!");
     // subtract money from playerMoney by skipping
     playerMoney = playerMoney - 2;
 }
 // if no (false), ask question again by running fight( again)
} else {
    fight();
}
}


fight();