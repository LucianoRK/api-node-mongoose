import mongoose from 'mongoose';

class Database {
    constructor () {
        mongoose.connect('mongodb://localhost:27017/lrdev');
    }
}

export default new Database();