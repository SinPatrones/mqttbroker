//MQTT broker
var mosca = require('mosca');
var settings = {
	port: 40001,
	http:{
		port:40002,
		bundle:true,
		static:'./'
	}
}
var broker = new mosca.Server(settings)

broker.on('ready',()=>{
	console.log('Broker is ready!')
})
broker.on('published',(packet)=>{
	console.log(packet.topic);
	
})
