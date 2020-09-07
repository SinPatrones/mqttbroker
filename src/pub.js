//MQTT Publisher
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://64.227.16.136:40001')
var topic = 'app/data/1/receive'
var lat = -16.399422; 
var message = ""
var i = 0;
client.on('connect',()=>{
	setInterval(()=>{
		lat += 0.0000001;
		message = lat+",-71.536648";
		client.publish(topic,message)
		i++;
		console.log(i+') Message Sent',message)
	},5000)
})