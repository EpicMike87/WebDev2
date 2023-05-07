const nedb = require('nedb');

class GoalList {
    constructor(dbFilePath) {
        if (dbFilePath) {
            this.db = new nedb({ filename: dbFilePath, autoload: true });
            console.log('DB connected to ' + dbFilePath);
        } else {
            this.db = new nedb();
        }
    }
    // Some premade data for demo purposes
    init() {
        this.db.insert({
            goal: 'Sleep',
            contents: 'Get least 8 hours sleep per day',
            published: '2020-02-16',
            author: 'Peter'
        });
        this.db.insert({
            goal: 'Fitness',
            contents: 'Perform 25 consecutive press ups',
            published: '2020-02-23',
            author: 'Peter'
        });
        this.db.insert({
            goal: 'Nutrition',
            contents: 'Eat 30 grams of protein a day',
            published: '2020-02-29',
            author: 'Peter'
        });
        this.db.insert({
            goal: "Nutrition",
            contents: 'Consume 1500-1600 calories per day',
            published: '2020-02-18',
            author: 'Ann'
        });
        } 
    
    addEntry(author, goal, contents) {
        var entry = {
                author: author,
                goal: goal,
                contents: contents,
                published: new Date().toISOString().split('T')[0]
                }
        console.log('entry created', entry);
        this.db.insert(entry, function(err, doc) {
                if (err) {
                    console.log('Error inserting document', subject);
                    } else {
                    console.log('document inserted into the database', doc);
                }
        }) 
     }
    
     getEntriesByUser(authorName) {
        return new Promise((resolve, reject) => {
            this.db.find({ 'author': authorName }, function(err, entries) {
            if (err) {
                reject(err);
            } else {
                resolve(entries);
        }
    })
})
}

}
//make the module visible outside
module.exports = GoalList;