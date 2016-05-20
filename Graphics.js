var CreaturesSprite = [];


function LoadSprites()
{
   Game.load.image('bezok', 'Game/Sprite/bezok.png');

}


function SpritesUpdate()
{
   for(var i=0; i<Creatures.length; i++)
   {
      CreaturesSprite.destroy();
   }

   for(var i=0; i<Creatures.length; i++)
   {
      CreaturesSprite[i] = Game.add.sprite(Creatures[i].x, Creatures[i].y, "bezok");
      CreaturesSprite[i].scale.setTo(0.1, 0.1);
   }
}
