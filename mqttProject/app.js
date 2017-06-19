// location = {
//     hostname: 'test.mosquitto.org',
//     port: 8080
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


// public MQTT urls
// https://github.com/mqtt/mqtt.github.io/wiki/public_brokers
// https://iot.eclipse.org/getting-started#sandboxes
// https://test.mosquitto.org/
// config - https://mosquitto.org/man/mosquitto-conf-5.html
// http://www.eclipse.org/paho/clients/js/
// ws://iot.eclipse.org:80/ws

//ws://test.mosquitto.org:8080/ws


var connection = new Mosquitto();
console.log('Created a object dude');
// mosq.connect('ws://localhost:1883/mqtt', true);

//connection.connect('ws://iot.eclipse.org:80/ws', true); - WORKING
//connection.connect('ws://test.mosquitto.org:8080', true); - NOT WORKING
connection.connect('ws://test.mosquitto.org:8080/mqtt', true);
//connection.connect('ws://192.168.99.100:8080', true);


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




