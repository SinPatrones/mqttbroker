//MQTT broker
var mosca = require('mosca')
var settings = {
	port: 40001
}
var broker = new mosca.Server(settings)

var mqtt = require('mqtt')
var client = mqtt.connect('ws://64.227.16.136:40002')
var topic = 'unsa/bus1/gps'
var message = "Hola,ws desde mqtt"


client.on('connect',()=>{
	console.log('conectado a ws');
})

broker.on('ready',()=>{
	console.log('Broker MQTT');
})
broker.on('published',(packet)=>{
	client.publish(topic,packet.payload.toString());
	console.log(packet.payload.toString());
})
