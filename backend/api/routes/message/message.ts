declare const Buffer;

// Logic
import * as Grid from "gridfs-stream";
import * as mongoose from "mongoose";
import { Request, Response } from "express";

//models
import MessageModel from "../../model/message";

export class Message {
  public routes(router): void {
    const conn = mongoose.connection;
    Grid.mongo = mongoose.mongo;
    let gfs;

    conn.once("open", () => {
      gfs = Grid(conn.db);
      router.get("/submit-message", (req: Request, res: Response) => {
        // let { errors, isValid } = validateMessage(req.body);
        // if (!isValid) {
        //   return res.status(400).json(errors);
        // }
        const message = new MessageModel({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          phone_no: req.body.phone_no,
          message: req.body.message
        });
        if (!message) {
          console.log("fill the form");
        }
        //   let product = new Product(req.body);
        message
          .save()
          .then(message => {
            res
              .status(200)
              .json({ message: "message has been added successfully" });
          })
          .catch(err => {
            res.status(400).send("unable to save to database");
          });
      });
    });
  }
}
