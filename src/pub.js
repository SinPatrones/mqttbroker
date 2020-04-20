//MQTT Publisher
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://192.168.0.16:40001')
var topic = 'unsa/bus1/gps'
var message = "Hola,prueba"

client.on('connect',()=>{
	setInterval(()=>{
		client.publish(topic,message)
		console.log('Message Sent',message)
	},300)
})