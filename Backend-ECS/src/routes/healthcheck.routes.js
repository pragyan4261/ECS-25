<<<<<<< HEAD
import {Router} from "express";

import {healthCheck} from "../controllers/healthController.js"


const router=Router()

router.route("/").get(healthCheck)


=======
import {Router} from "express";

import {healthCheck} from "../controllers/healthController.js"


const router=Router()

router.route("/").get(healthCheck)


>>>>>>> d7aa76d64fe0b6d3299a44becd680ebf0512e45f
export default router