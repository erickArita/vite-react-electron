import { db } from '../data/connection/connection'
import { TListener } from '../lib/router/router'
import { OrderJob } from '../models/OrderJob'

const createJobOrder: TListener = async (event, args, reply) => {
  const res = await db.insert(args)

  // retorna el valor a un eventListener en el frontend
  // con esto no bloqueamos el hilo el frontend
  reply(res)
}

const getOrders: TListener = async (_e, _arg, reply) => {
  const res = await db.find<OrderJob[]>({})

  console.log(res);
  // retorna el valor directamente
  
  return res
}

export {
  createJobOrder,
  getOrders
}
