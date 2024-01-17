import { Router } from "express";

const router = Router();

router.route("/new").post();
router.route("/gets").get();
router.route("/:id").get().patch().delete();
