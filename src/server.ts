import mongoose from 'mongoose';
import app from './app';
import config from './config';

async function main() {
    try {
        await mongoose.connect(config.db_rul as string);
        app.listen(config.port, () => {
            console.log(`Book Management server is running on port ${config.port}`);
        })
    } catch (err) {
        console.log(err)
    }

}

main();