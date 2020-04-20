//MQTT Subscriber
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:40001')
var topic = 'presence'


client.on('connect',()=>{
	client.subscribe(topic)
})
client.on('message',(topic,message)=>{
	message = message.toString()
	console.log(message)
})