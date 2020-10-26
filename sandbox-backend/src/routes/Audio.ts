import { Request, Response, Router } from "express";
import { BAD_REQUEST, CREATED, OK } from "http-status-codes";
import { ParamsDictionary } from "express-serve-static-core";

import { AudioDao } from "@daos/AudioDao";
import { paramMissingError } from "@shared/constants";

// Init shared
const router = Router();
const audioDao = new AudioDao();

/******************************************************************************
 *                      Get All Images - "GET /api/images/all"
 ******************************************************************************/

router.get("/", async (req: Request, res: Response) => {
  const audio = await audioDao.getAll();
  return res.status(OK).json({ audio });
});

/******************************************************************************
 *                      Get One Images - "GET /api/images/:id"
 ******************************************************************************/

router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params as ParamsDictionary;
  const audio = await audioDao.get(Number(id));
  return res.status(OK).json({ audio });
});

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;