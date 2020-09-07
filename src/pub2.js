//MQTT Publisher
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://64.227.16.136:40001')
var topic = 'cvd/unsa/1/temp'
var temp = 35;
var i = 0;
client.on('connect',()=>{
	setInterval(()=>{
        temp += 1;
        if(temp>38){
            temp = 35;
        }
		client.publish(topic,temp+"");
		i++;
		console.log(i+') Message Sent',temp);
	})
})