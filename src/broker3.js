//MQTT broker
var mosca = require('mosca')
var settingsws = {
	http: {
	    port: 40002,
	    bundle: true,
	    static: './'
	  }
}
var settingsmqtt = {port: 40001}
var brokermqtt = new mosca.Server(settingsmqtt)
var brokerws = new mosca.Server(settingsws)

//configurando publicador de mqtt a ws
var mqtt = require('mqtt')
var client = mqtt.connect('ws://64.227.16.136:40002')
var topic = 'unsa/bus1/gps'

brokermqtt.on('ready',()=>{
	console.log('Broker MQTT')
})
brokerws.on('ready',()=>{
	console.log('Broker websocket')
})
client.on('connect',()=>{
	console.log('conectado a ws');
})

brokermqtt.on('published',(packet)=>{
	client.publish(topic,"Desde MQTT a WS:"+packet.payload.toString());
	console.log("MQTT://"+packet.payload.toString())
})
brokerws.on('published',(packet)=>{
	console.log("WS://"+packet.payload.toString())
})
