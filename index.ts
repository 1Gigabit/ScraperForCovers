import { NFL } from './networking/api/NFL';
import { MongoClient } from 'mongodb';
import { createWriteStream } from 'fs';

import * as tsNode from 'ts-node'
tsNode.register();
(async () => {

    // Connection URL
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    const dbName = 'myProject';
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('documents');

    // the following code examples can be pasted here...
    let game_ids = []
    let x = 244412
    for (let i = 0; i < 100000; i++) {
        game_ids.push(`${x--}`);
    }
    
    let writeableStream = createWriteStream("./cache/bodies",{
        'flags':"a"
    });
    NFL.getNFLModelsStream(game_ids,50,writeableStream);
    // let insertResult = await collection.insertMany(results);
})();
