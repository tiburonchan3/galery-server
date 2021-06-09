const express = require("express");
const router = express.Router();
const upload = require("../utils/multer");
const {
  addPhoto,
  getPhotos,
  deletePhoto,
} = require("../controllers/PhotoController");

router.post("/add-photo", upload.single("photo"), addPhoto);
router.post("/delete", deletePhoto);
router.get("/", getPhotos);

module.exports = router;
