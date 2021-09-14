const express = require('express')
const mongoose = require('mongoose')
const router = require("express")
const app = express()

const authRouter = require('./authRouter')

app.use(express.json())
app.use(express.urlencoded())
app.use('/auth', authRouter)

//Включение сервера
const port = process.env.port || 3002
const path = __dirname + '/dist/'
const webport = 3001

const start = async () => {
    try{
        await mongoose.connect('mongodb://node:nindzya.13@cluster0-shard-00-00.fral0.mongodb.net:27017,cluster0-shard-00-01.fral0.mongodb.net:27017,cluster0-shard-00-02.fral0.mongodb.net:27017/FABRICA-CMS?ssl=true&replicaSet=atlas-1zb0kr-shard-0&authSource=admin&retryWrites=true&w=majority')
        app.listen(port, () => console.log(`Приложение запустилось и слушает порт ${port}!`))
    } catch(e){
        console.log(e)
    }
}

start()

// Подключение сайта к серверу

  app.use(function (req,res,next) {
    console.log('/' + req.method);
    next(); });
  app.get('/', function(req,res){
    res.sendFile(path + 'index.html');  });
  app.use(express.static(path));
  app.use('/', router);
  app.listen(webport, function () {
    console.log('Example app listening on port 8080!') })




const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb+srv://admin:nindzya.13@cluster0.fral0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/";
// const mongoClient = new MongoClient(url, { useUnifiedTopology: true });



const uri = "mongodb://node:nindzya.13@cluster0-shard-00-00.fral0.mongodb.net:27017,cluster0-shard-00-01.fral0.mongodb.net:27017,cluster0-shard-00-02.fral0.mongodb.net:27017/FABRICA-CMS?ssl=true&replicaSet=atlas-1zb0kr-shard-0&authSource=admin&retryWrites=true&w=majority";
const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));



// Parse JSON bodies (as sent by API clients)


app.post('/api/create', function(req, res) {
    console.log(req.body)

    async function run() {
        try {
            await mongoClient.connect();
            const database = mongoClient.db("FABRICA-CMS");
            const ingredients = database.collection("ingredients");
            ingredients.insertOne(req.body, function(err, results) {

                console.log(err);

            });

        } finally {

            res.sendStatus(200)
        }
    }
    run().catch(console.dir);


})
app.get('/api/getorderin', function(req, res) {
    async function run() {
        try {

            await mongoClient.connect();
            const database = mongoClient.db("FABRICA-CMS");
            const order_in = database.collection("order_in");
            order_in.find().toArray(function(err, results) {

                res.send(results)
            });


        } finally {

        }
    }
    run().catch(console.dir);


})
app.get('/api/users', function(req, res) {
    async function run() {
        try {

            await mongoClient.connect();
            const database = mongoClient.db("FABRICA-CMS");
            const order_in = database.collection("users");
            order_in.find().toArray(function(err, results) {

                res.send(results)
            });


        } finally {

        }
    }
    run().catch(console.dir);


})
app.post('/api/users', function(req, res) {
    //{ name: data.name, count: data.count, price: data.price, amount: data.amount, date: new Date() }
    //console.log(schema)
    async function run() {
        try {
            schema = {}
            schema.array = req.body
            await mongoClient.connect();
            const database = mongoClient.db("FABRICA-CMS");
            const order_in = database.collection("users");
            order_in.insertOne(schema)
            res.sendStatus(200)

        } finally {

        }
    }
    run().catch(console.dir);




})
app.post('/api/addorderin', function(req, res) {
    //{ name: data.name, count: data.count, price: data.price, amount: data.amount, date: new Date() }
    //console.log(schema)
    async function run() {
        try {
            schema = {}
            schema.array = req.body
            await mongoClient.connect();
            const database = mongoClient.db("FABRICA-CMS");
            const order_in = database.collection("order_in");
            order_in.insertOne(schema)
            res.sendStatus(200)

        } finally {

        }
    }
    run().catch(console.dir);




})
app.get('/api/test', function(req, res) {

    async function run() {
        try {
            await mongoClient.connect();
            const database = mongoClient.db("FABRICA-CMS");
            const ingredients = database.collection("ingredients");
            ingredients.find().toArray(function(err, results) {

                res.send(results)
            });

        } finally {

        }
    }
    run().catch(console.dir);

})
app.get('/api/fetchitems', function(req, res) {

    async function run() {
        try {
            await mongoClient.connect();
            const database = mongoClient.db("FABRICA-CMS");
            const ingredients = database.collection("ingredients");
            ingredients.find().toArray(function(err, results) {

                res.send(results)
            });

        } finally {

        }
    }
    run().catch(console.dir);


})

app.get('/api/fetchrequests', function(req, res) {

    data = []
    let myFirstPromise = new Promise((resolve, reject) => {
        // Мы вызываем resolve(...), когда асинхронная операция завершилась успешно, и reject(...), когда она не удалась.
        // В этом примере мы используем setTimeout(...), чтобы симулировать асинхронный код.
        // В реальности вы, скорее всего, будете использовать XHR, HTML5 API или что-то подобное.
        async function run() {
            try {

                await mongoClient.connect();
                const database = mongoClient.db("FABRICA-CMS");
                const request_in = database.collection("request_in");
                request_in.find().toArray(function(err, results) {
                    data.push(results)

                    const request_out = database.collection("request_out");
                    request_out.find().toArray(function(err, results) {
                        data.push(results)

                        resolve(dat)


                    });
                });

            } finally {

            }



        }
        run().catch(console.dir);
    });

    myFirstPromise.then((data) => {
        // successMessage - это что угодно, что мы передали в функцию resolve(...) выше.
        // Это необязательно строка, но если это всего лишь сообщение об успешном завершении, это наверняка будет она.
        res.send(data)

    });




})





///////SOME EXAMPLES/////

/* 
app.get('/computer/:id', function(req, res) {
    async function run() {
        try {

            await mongoClient.connect();
            const database = mongoClient.db("ic");
            const computers = database.collection("computers");
            console.log(req.params)
                // Query for a movie that has the title 'The Room'
            console.log(req.params)

            const q = await computers.findOne(req.params);
            // since this method returns the matched document, not a cursor, print it directly

            res.send(q)


        } finally {
            await mongoClient.close();
        }
    }
    run().catch(console.dir);


})


app.get('/search', function(req, res) {
    async function run() {
        try {
            await mongoClient.connect();
            const database = mongoClient.db("ic");
            const computers = database.collection("computers");
            const query = { CPU: "AMD" };
            const q = await computers.findOne(query);
            res.send(q)

        } finally {
            await mongoClient.close();
        }
    }
    run().catch(console.dir);
});

app.get('/products', (req, res) => {

      
        mongoClient.connect(function(err, client) {
            const db = client.db("IC-COMPUTERS");
            const collection = db.collection("computers");
            collection.find({ color: '*' }).toArray(function(err, results) {
                if (err) {
                    return console.log(err);
                }


                client.close();
            });
        });
    

    let parse = new Promise((resolve, reject) => {
        let computer = {
            Computer: "",
            CPU: "",
            CPUclock: "",
            Motherboard: "",
            BIOS: "",
            Chipset: "",
            Memory: "",
            RamSlots: [],
            GpuSlots: [],
            Drives: [],
            SoundCards: [],
            NetworkCards: [],
        }
        let buff
        const rl = readline.createInterface({ input: fs.createReadStream("../giga.txt"), crlfDelay: Infinity });
        rl.on('line', (line) => {
                var line = line.replace(/\s{2,}/g, ' ');
                line = line.replace(" - ", '');
                line = line.trim();
                line = line.split(": ")
                switch (line[0]) {
                    case "Computer":
                        computer.Computer = line[1]
                        break;

                    case "CPU":
                        computer.CPU = line[1]
                        buff = "CPU"
                        break;

                    case "Motherboard":
                        computer.Motherboard = line[1]
                        break;

                    case "BIOS":
                        computer.BIOS = line[1]
                        break;

                    case "Chipset":
                        computer.Chipset = line[1]
                        break;

                    case "Network":
                        computer.NetworkCards.push(line[1])
                        break;

                    case "OS":
                        computer.OS = line[1]
                        break;

                    case "Memory":
                        computer.Memory = line[1]
                        buff = "Memory"
                        break;

                    case "Graphics":
                        buff = "Graphics"
                        break;
                    case "Drive":

                        computer.Drives.push([line[1]])
                        break;

                    case "Sound":
                        computer.SoundCards.push([line[1]])
                        break;

                    default:
                        if (buff == "Memory") {
                            computer.RamSlots.push(line[0])

                        }
                        if (buff == "Graphics") {
                            computer.GpuSlots.push(line[0])
                        }
                        if (buff == "CPU") {
                            computer.CPUclock = line[0]
                        }
                        break;
                }

            },

            rl.on('close', function() {
                buff = "";
                ramSlotCount = 0;
                gpu = 0;
                drive = 0;
                sound = 0;
                network = 0;

                resolve(computer)
            })

        );

    });

    parse.then((successMessage) => {
        mongoClient.connect(function(err, client) {
            const db = client.db("ic");
            const collection = db.collection("computers");
            //collection.insertOne(successMessage)
            collection.findOne({ "CPU": "AMD" })

        });


    });


})

//app.use(express.static(path.resolve(__dirname, '../client')))


// app.get('*', (req, res) => {
//     res.sendFile(path.resolve('../client/index.html'))
//     console.log(req.params)
// })

*/