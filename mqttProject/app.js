
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

// //client = new Paho.MQTT.Client('ws://iot.eclipse.org:80/ws', "naveenLaptop");
// //client = new Paho.MQTT.Client('ws://127.0.0.1:9001/ws', "naveenLaptop");
// client.onConnectionLost = onConnectionLost;
// client.onMessageArrived = onMessageArrived;
// client.connect({onSuccess:onConnect});


// public MQTT urls
// https://github.com/mqtt/mqtt.github.io/wiki/public_brokers
// https://iot.eclipse.org/getting-started#sandboxes
// https://test.mosquitto.org/
// config - https://mosquitto.org/man/mosquitto-conf-5.html
// http://www.eclipse.org/paho/clients/js/
// ws://iot.eclipse.org:80/ws
//ws://test.mosquitto.org:8080/ws

// ############################################################################################################

var connection = new Mosquitto();
// http://67.207.95.103/
// //connection.connect('ws://test.mosquitto.org:8080', true); - NOT WORKING
// //connection.connect('ws://test.mosquitto.org:8080/mqtt', true); - NOT WORKING
// connection.connect('wss://mqtt.iotbeans.com:8083/mqtt', true); - NOT WORKING

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
  
  connection.connect('ws://127.0.0.1:9001/ws', true);




