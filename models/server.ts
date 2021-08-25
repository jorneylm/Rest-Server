import express, { Application } from "express";

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8080';
  }

  listen() {
      this.app.listen(this.port, ()=>{
          console.log('Servidor corriendo'+this.port);
          
      })
  }

}

export default Server;
