import { Express, Request, Response } from "express";

const express = require('express')

export default class Server {


    readonly port: number


    constructor( port:  number) {
    
        this.port = port;
    
    }

    start() {
    
        const app = express()

        app.get("/", function(req: Request, res: Response) {
            res.send('Salut les zigotos')
        })
        app.listen( this.port, () => {
            console.log("[server] Server is running at https://localhost:"+ this.port)
        })
    }
}