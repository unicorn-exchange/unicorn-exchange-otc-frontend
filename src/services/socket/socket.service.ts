import {Injectable} from "@angular/core";
import io from "socket.io-client";
import {createMockSocket} from "./socket-mock";
import Socket = SocketIOClient.Socket;
import Emitter = SocketIOClient.Emitter;


@Injectable({
  providedIn: "root"
})
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io.connect("ws://localhost:3000", {autoConnect: false});
  }

  connect(isFakeNetwork = false, url = "ws://localhost:3000") {
    if (isFakeNetwork || !this.socket) {
      this.socket = createMockSocket(url);
      return;
    }
    if (!this.socket || !this.socket.connected) {
      this.socket = io.connect(url);
    }
  }

  on(event: string, fn: (msg: any) => void): Emitter {
    console.log(this.socket);
    return this.socket.on(event, fn);
  }

  emit(event: string, ...args: any[]): Socket {
    return this.socket.emit(event, ...args);
  }
}
