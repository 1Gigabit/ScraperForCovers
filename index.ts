import { NFL } from './networking/api/NFL';
import { MongoClient } from 'mongodb';
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
    for (let i = 0; i < 1000; i++) {
        game_ids.push(`${parseInt("244412") - 1}`);
    }
    let results = await NFL.getNFLModels(game_ids,50);
    let insertResult = await collection.insertMany(results);
})();
