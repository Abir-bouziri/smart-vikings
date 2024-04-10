const mqtt = require('mqtt');
const performAction = require('./test');

const mqtt_server = "127.0.0.1";
const mqtt_port = 1883;

const topic_i = "your_mqtt_topic/i";   //robots ID  
const topic_z = "your_mqtt_topic/z";   //Total Points
const topic_y = "your_mqtt_topic/y";   //Number of challanges    
const topic_te = "your_mqtt_topic/te";   //time to the finish line 
const topic_y1 = "your_mqtt_topic/y1";   //Challange 1 
const topic_y2 = "your_mqtt_topic/y2";   //Challange 2 
const topic_y3 = "your_mqtt_topic/y3";   //Challange 3
const topic_y4 = "your_mqtt_topic/y4";   //Challange 4 
const topic_y5 = "your_mqtt_topic/y5";   //Challange 5 
const topic_y6 = "your_mqtt_topic/y6";   //Challange 6 
const topic_y7 = "your_mqtt_topic/y7";   //Challange 7 
const topic_y8 = "your_mqtt_topic/y8";   //Challange 8 
const topic_y9 = "your_mqtt_topic/y9";   //Challange 9 
const topic_y10 = "your_mqtt_topic/y10";   //Challange 10
const topic_f = "your_mqtt_topic/f";   //descalification

// Create an MQTT client
const client = mqtt.connect(`mqtt://${mqtt_server}:${mqtt_port}`);


var robot_id = 0;
let t_points = 0;
let numofchallanges = 0;
let time = 0;
let y1,y2,y3,y4,y5,y6,y7,y8,y9 = 0;
let descalified=0;

// Function to handle incoming MQTT messages
function handleMqttMessage(topic, message) {
  console.log(`Received message on topic ${topic}: ${message.toString()}`);
  // Update corresponding variable based on topic
  if (topic === topic_i) {
    robot_id = parseInt(message.toString());
    console.log(robot_id);
  } else if (topic === topic_z) {
    t_points = parseInt(message.toString());
    performAction.performAction(robot_id,t_points,"Score");
   // console.log(robot_id);
  } else if (topic === topic_y) {
    numofchallanges = parseInt(message.toString());
    performAction.performAction(robot_id,numofchallanges,"y");
    console.log(numofchallanges);
  } else if (topic === topic_te) {
    time = parseInt(message.toString());
    performAction.performAction(robot_id,numofchallanges,"end");
  } else if (topic === topic_y1) {
    y1 = parseInt(message.toString());
    performAction.performAction(robot_id,y1,"ch1");
  } else if (topic === topic_y2) {
    y2 = parseInt(message.toString());
    performAction.performAction(robot_id,y2,"ch2");
  } else if (topic === topic_y3) {
    y3 = parseInt(message.toString());
    performAction.performAction(robot_id,y3,"ch3");
  } else if (topic === topic_y4) {
    y4 = parseInt(message.toString());
    performAction.performAction(robot_id,y4,"ch4");
  } else if (topic === topic_y5) {
    y5 = parseInt(message.toString());
    performAction.performAction(robot_id,y5,"ch5");
  } else if (topic === topic_y6) {
    y6 = parseInt(message.toString());
    performAction.performAction(robot_id,y6,"ch6");
  } else if (topic === topic_y7) {
    y7 = parseInt(message.toString());
    performAction.performAction(robot_id,y7,"ch7");
  } else if (topic === topic_y8) {
    y8 = parseInt(message.toString());
    performAction.performAction(robot_id,y8,"ch8");
  } else if (topic === topic_y9) {
    y9 = parseInt(message.toString());
    performAction.performAction(robot_id,y9,"ch9");
  }  else if (topic === topic_y10) {
    y10 = parseInt(message.toString());
    performAction.performAction(robot_id,y10,"ch10");
  }else if (topic === topic_f) {
    descalified = parseInt(message.toString());
    performAction.performAction(robot_id,descalified,"disqualification");
  }
}

// Connect to the MQTT broker
client.on('connect', () => {
  console.log('Connected to MQTT broker');
  // Subscribe to desired topics
  client.subscribe(topic_i, { qos: 1 });
  client.subscribe(topic_z, { qos: 1 });
  client.subscribe(topic_y, { qos: 1 });
  client.subscribe(topic_te, { qos: 1 });
  client.subscribe(topic_y1, { qos: 1 });
  client.subscribe(topic_y2, { qos: 1 });
  client.subscribe(topic_y3, { qos: 1 });
  client.subscribe(topic_y4, { qos: 1 });
  client.subscribe(topic_y5, { qos: 1 });
  client.subscribe(topic_y6, { qos: 1 });
  client.subscribe(topic_y7, { qos: 1 });
  client.subscribe(topic_y8, { qos: 1 });
  client.subscribe(topic_y9, { qos: 1 });
  client.subscribe(topic_y10, { qos: 1 });
  client.subscribe(topic_f, { qos: 1 });
});

// Handle incoming messages
client.on('message', handleMqttMessage);
//data exportation
module.exports = { topic_i , topic_z,topic_y,topic_te,topic_y1,topic_y2,topic_y3,topic_y4,topic_y5,topic_y6,topic_y7,topic_y8,topic_y9,topic_f};

process.on('SIGINT', () => {
  console.log('Gracefully shutting down...');
  client.end();
  process.exit();
});
