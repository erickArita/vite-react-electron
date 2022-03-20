import { createJobOrder, getOrders } from "../controllers/jobOrder";
import { Router } from "../lib/router/router";

const router = new Router()

router
  .controller('/jobOrder')
  .get('/getAll', getOrders)
  .post('/', createJobOrder)

