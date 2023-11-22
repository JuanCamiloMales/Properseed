var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://test.mosquitto.org')
var topic = "test_properseed"

const { MongoClient, ServerApiVersion } = require('mongodb');
const url = "mongodb+srv://yo:admin@cluster0.wue71.mongodb.net/?retryWrites=true&w=majority";
const mongoClient = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// on mqtt conect subscribe on topic test 
client.on('connect', function () {
  console.log('conectando');
  client.subscribe(topic, function (err) {
      if(err)
      console.log(err)
  })
})

 //whn receive message 
client.on('message', function (topic, message) {
  console.log('mensaje recibido')
  json_check(message)
})

//check if data json or not
function json_check(data) {
    try {
        JSON.parse(data.toString('utf8'));
    } catch (e) {
        console.log(e)
        console.log(data.toString('utf8'))
        return false;
    }
    Mongo_insert(JSON.parse(data.toString('utf8')))
}

//insert data in mongodb
function Mongo_insert(data){
  console.log('conectando a mongo');
  mongoClient.connect();
  console.log('intentando guardar en mongo')
  var db = mongoClient.db("mydb");
  db.collection("users").insertOne(data, function(err, res) {
    if (err) throw err;
    db.close();
  }); 
  console.log('mensaje guardado');
}
