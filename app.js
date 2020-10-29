const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('./lib/mongoose');
const config = require('./config');
const routes = require('./routes');
const response = require('./middleware/response');

const app = express();
app.use(helmet());
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(response);

mongoose.connectMongoDB();

const port = Number(process.env.PORT) || config.server.port;
routes.bindRoutes(app);
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
