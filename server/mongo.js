const mongoose = require('mongoose');
const env = require('./env/environment');

mongoose.Promise = global.Promise;

const mongoUri = `mongodb://cosmo-limitd:1ucTvssvrmgTZk4Y2XlTazV6gqLzg8XIEgEmEemaGq0xgBz0f7TjdGC5RfB5jpC24gpbA8xlDsxy7GP6Shf4Fg%3D%3D@cosmo-limitd.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@cosmo-limitd@`;

function connect() {
  return mongoose.connect(mongoUri, { auth: { user: env.dbName, password: env.key }});
  
}

module.exports = {
  connect,
  mongoose
};
