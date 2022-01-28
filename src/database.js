import mongoose from 'mongoose';

class Database {
    constructor() {
        mongoose.connect('mongodb://localhost:27017/lrdev', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
}

export default new Database();