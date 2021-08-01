const express = require('express')
const app = express()
const port = 3001

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://admin:nindzya.13@cluster0.fral0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/";
const mongoClient = new MongoClient(url, { useUnifiedTopology: true });

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/api/create',function(req, res){
    console.log(req.body) 

    res.sendStatus(200)
    // async function run() {
    //     try {
    //         await mongoClient.connect();
    //         const database = mongoClient.db("FABRICA-CMS");
    //         const ingredients = database.collection("ingredients");          
    //         ingredients.insertMany(users, function(err, results){
              
    //         console.log(results);
            
    // });

    //     } finally {
    //         await mongoClient.close();
    //     }
    // }
    // run().catch(console.dir);


})
app.use(express.json())
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

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