const express = require("express");
const controllerRoom = require("../controllers/room");
const { verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();
//CREATE
router.post("/:hotelid", verifyAdmin, controllerRoom.createRoom);

//UPATE
router.put("/availability/:id", controllerRoom.updateRoomAvailability);
router.put("/:id", verifyAdmin, controllerRoom.updateRoom);

//DELETE
router.delete("/:id/:hotelid", verifyAdmin, controllerRoom.deleteRoom);

//GET
router.get("/:id", controllerRoom.getRoom);

//GET ALL
router.get("/", controllerRoom.getRooms);

module.exports = router;
