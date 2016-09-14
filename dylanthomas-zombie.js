//Setup for scenerio
alert("WNZAPA III: Wizard Ninja Zombie Action Packed Adventure 3- Wrath of Master Zogado");
var weapon = prompt("Swirling blue and green smoke disapates from around thee as thou seest the rocky seashore thou have teleported to,   GGRRAAhhhh!!! A zombie pops out from the cove south of thee. What weapon in thy magic satchal will thou defend thyself with? a bowstaff, a magic rune, mystical nunchucks,  or a wizard-beard katana" );
//* allows the computer to have 3 chooses
var randomNumber = Math.round(Math.random() *2 )
//var randomNumber = 1
alert("Thou raineth down the pain with thy" + " " + weapon);

if(randomNumber === 0){
 alert("The zombie overpowers thy weak ninja wizard butt, and kills thee with thy " + weapon + ", You lose.")
}else if(randomNumber === 1){
    alert("The zombie was no match for thy manly ninja wizard skills, progress to the next level!")
}else if(randomNumber){
    alert("Thy brain musteth been too tiny, the zombie strolls past thee for a chicken by the sea, progess to the next level doofus!")
} 