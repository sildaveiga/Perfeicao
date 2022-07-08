const express = require("express");
const controllerUser = require("../controllers/user");
const {
  verifyToken,
  verifyUser,
  verifyAdmin,
} = require("../utils/verifyToken");
const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Hello user, vous êtes connecté");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello user, vous êtes connecté et pouvez supprimer votre compte");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send(
//     "Hello admin, vous êtes connecté et pouvez supprimer tous les comptes"
//   );
// });

//UPATE
router.put("/:id", verifyUser, controllerUser.updateUser);

//DELETE
router.delete("/:id", verifyUser, controllerUser.deleteUser);

//GET
router.get("/:id", verifyUser, controllerUser.getUser);

//GET ALL
router.get("/", verifyAdmin, controllerUser.getUsers);

module.exports = router;
