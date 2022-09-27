import mongoose from 'mongoose';
import pino from 'pino';


const logger = pino();

const database = () => {
    mongoose.connect(process.env.MONGO_URI).then((value) => logger.info('database connected')).catch((e) => logger.error(e));
  };

 export default database;