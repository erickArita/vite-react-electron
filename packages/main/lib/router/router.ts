import { ipcMain, IpcMainInvokeEvent } from 'electron'

enum Method {
  post = 'post',
  get = 'get',
  put = 'put',
  delete = 'delete',
}

export type TListener = (event: IpcMainInvokeEvent, ...args: any[]) => void


class Route {
  #controllerName: string;
  constructor(controllerName: string) {
    this.#controllerName = controllerName
  }


  private handler(endpointName: string = '/', method: Method, listener: TListener): void {
    const end = `${method}${this.#controllerName}${endpointName}`

    const replyFrontend = (event: IpcMainInvokeEvent, endpoint: string) => (...args: any[]) => {
      event.sender.send(endpoint, args)
    }

    ipcMain.handle(end, (e, args) => listener(e, args, replyFrontend(e, end)))
  }

  get(endpointName: string, listener: TListener) {
    this.handler(endpointName, Method.get, listener)
    return this
  }

  post(endpointName: string, listener: TListener) {
    this.handler(endpointName, Method.post, listener)
    return this
  }

  put(endpointName: string, listener: TListener) {
    this.handler(endpointName, Method.put, listener)
    return this
  }

  delete(endpointName: string, listener: TListener) {
    this.handler(endpointName, Method.delete, listener)
    return this
  }
}

export class Router {
  controller(controller: string): Route {

    return new Route(controller)
  }
}




