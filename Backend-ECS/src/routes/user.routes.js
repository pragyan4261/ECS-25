<<<<<<< HEAD
import {Router} from "express";

import { registerUser,loginUser,logoutuser, updateAccountDetails, changeCurrentPassword,dashboard } from "../controllers/user.controller.js";

import { verifyJWT } from "../Middlewares/auth.middlewares.js";

import {upload} from "../Middlewares/multer.middleware.js"

const router=Router()

router.route("/register").post(registerUser)


router.route("/login").post(loginUser)

//secured routes
router.route("/logout").post(verifyJWT,logoutuser)
router.route("/updateAccountDetails").patch(verifyJWT,updateAccountDetails)
router.route("/changePassword").patch(verifyJWT,changeCurrentPassword)
// router.route("/updateAvatar").patch(verifyJWT,upload.single([
//     "avatar"
// ]),updateAvatar)
router.route("/dashboard").get(verifyJWT,dashboard)
=======
import {Router} from "express";

import { registerUser,loginUser,logoutuser, updateAccountDetails, changeCurrentPassword,dashboard } from "../controllers/user.controller.js";

import { verifyJWT } from "../Middlewares/auth.middlewares.js";

import {upload} from "../Middlewares/multer.middleware.js"

const router=Router()

router.route("/register").post(registerUser)


router.route("/login").post(loginUser)

//secured routes
router.route("/logout").post(verifyJWT,logoutuser)
router.route("/updateAccountDetails").patch(verifyJWT,updateAccountDetails)
router.route("/changePassword").patch(verifyJWT,changeCurrentPassword)
// router.route("/updateAvatar").patch(verifyJWT,upload.single([
//     "avatar"
// ]),updateAvatar)
router.route("/dashboard").get(verifyJWT,dashboard)
>>>>>>> d7aa76d64fe0b6d3299a44becd680ebf0512e45f
export default router