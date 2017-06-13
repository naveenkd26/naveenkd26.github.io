// location = {
//     hostname: 'localhost',
//     port: 1883
// };
// client = new Paho.MQTT.Client(location.hostname, Number(location.port), "naveenLaptop");
// client.onConnectionLost = onConnectionLost;
// client.onMessageArrived = onMessageArrived;
// client.connect({onSuccess:onConnect});s

// function onConnect() {
//   // Once a connection has been made, make a subscription and send a message.
//   console.log("onConnect");
//   client.subscribe("/World");
//   message = new Paho.MQTT.Message("Hello");
//   message.destinationName = "/World";
//   client.send(message); 
// };
// function onConnectionLost(responseObject) {
//   if (responseObject.errorCode !== 0)
// 	console.log("onConnectionLost:"+responseObject.errorMessage);
// };
// function onMessageArrived(message) {
//   console.log("onMessageArrived:"+message.payloadString);
//   client.disconnect(); 
// };

var connection = new Mosquitto();
console.log('Created a object dude');
// mosq.connect('ws://localhost:1883/mqtt', true);

connection.connect('ws://localhost:9001/mqtt', true);


	// this.onconnect = null;
	// this.ondisconnect = null;
	// this.onmessage = null;


  connection.onconnect = function(msg){
      console.log('On CONNECT Handler ' + msg);

      connection.subscribe('hoffmanWeather', 2);
  };

 connection.ondisconnect = function(msg){
      console.log('On ondisconnect Handler ' + msg);
  };

   connection.onmessage = function(msg){
      console.log('On onmessage Handler ' + msg);
  };




