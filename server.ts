import * as express from 'express';
import { Application } from 'express';
import { getBranchById, getCart, getProducts } from './server/get-data.route';
// import { saveCourse } from './server/save-course.route';

const bodyParser = require('body-parser');
const app: Application = express();

app.use(bodyParser.json());

app.route('/api/cart').get(getCart);
app.route('/api/products').get(getProducts);
app.route('/api/branches').get(getBranchById);

// app.route('/api/courses/:id').put(saveCourse);

const httpServer = app.listen(9000, () => {
    console.log('HTTP REST API Server running at http://localhost:' + httpServer.address().port);
});
