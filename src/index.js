import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';
import promiseRouter from 'express-promise-router';
import routes from './routes';

require('dotenv').config();

import knexConfig from '../knexfile.js';
import Knex from 'knex';
import { Model } from 'objection';

// Initialize knex.
const knex = Knex(knexConfig.development);

// Bind all Models to a knex instance. If you only have one database in
// your server this is all you have to do. For multi database systems, see
// the Model.bindKnex method.
Model.knex(knex);

const router = promiseRouter();

const app = express()
  .use(bodyParser.json())
  .use(morgan('dev'))
  .use(router)
  .set('json spaces', 2);

// Register our REST API.
routes(router);

// Error handling. The `ValidationError` instances thrown by objection.js have a `statusCode`
// property that is sent as the status code of the response.
//
// NOTE: This is not a good error handler, this is the simplest one. See the error handing
//       recipe for a better handler: http://vincit.github.io/objection.js/#error-handling
app.use((err, req, res, next) => {
  if (err) {
    res
      .status(err.statusCode || err.status || 500)
      .send(err.data || err.message || {});
  } else {
    next();
  }
});

const server = app.listen(4000, () => {
  console.log('Example app listening at port %s', server.address().port);
});
