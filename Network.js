var ReceiveSocket = new WebSocket("ws://192.166.219.203:4440");
var SendSocket = new WebSocket("ws://192.166.219.203:4441");

var ReceivedPacket;


function ReceivePacket()
{
   ReceiveSocket.onmessage = function(event)
   {
      ReceivedPacket = JSON.parse(event.data);
   }
}


function SendPacket(Packet)
{
   SendSocket.send(Packet);
}
