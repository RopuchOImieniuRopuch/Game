function KeyboardHandling()
{
   var Action = {"A": "a"};
   var Actions = [];
   
   if(Keyboard.up.isDown)
   {
      Actions.push({"A": "u"});
   }

   if(Keyboard.down.isDown)
   {
      Actions.push({"A": "d"});
   }

   if(Keyboard.left.isDown)
   {
      Actions.push({"A": "l"});
   }

   if(Keyboard.right.isDown)
   {
      Actions.push({"A": "r"});
   }

   if(Actions.length != 0)
   {
      Packet = JSON.stringify(Actions);
      SendSocket.send(Packet);  
   }
}

