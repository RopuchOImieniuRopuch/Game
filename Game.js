var Game / new Phaser.Game("99%", "99%", Phaser.AUTO, "Bezoka", {preload: Preload, create: Create, update: Update});


function Preload()
{
   ReceivePacket();
//   KeyboardHandling();
}


function Create()
{
   LoadSprites()
}


function Update()
{
//   KeyboardHandling();
   SpritesUpdate();
}
