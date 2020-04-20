//MQTT broker
var mosca = require('mosca')
var settings = {
	http: {
	    port: 40002,
	    bundle: true,
	    static: './'
	  }
}
var broker = new mosca.Server(settings)

broker.on('ready',()=>{
	console.log('Broker websocket')
})
broker.on('published',(packet)=>{
	console.log(packet.payload.toString())
})

