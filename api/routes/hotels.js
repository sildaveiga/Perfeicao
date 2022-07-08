const express = require("express");
const Hotel = require("../models/Hotel");
const controllerHotel = require("../controllers/hotel");
const { verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, controllerHotel.createHotel);

//UPATE
router.put("/:id", verifyAdmin, controllerHotel.updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, controllerHotel.deleteHotel);

//GET
router.get("/find/:id", controllerHotel.getHotel);

//GET ALL
router.get("/", controllerHotel.getHotels);
router.get("/countByCity", controllerHotel.countByCity);
router.get("/countByType", controllerHotel.countByType);
router.get("/room/:id", controllerHotel.getHotelRooms);

module.exports = router;
