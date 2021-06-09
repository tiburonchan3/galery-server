const Photo = require("../models/Photo");
const path = require("path");
const fs = require("fs");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dev59v5xp",
  api_key: "554774327432143",
  api_secret: "QVozTTAaK9ZvB4uXt3Hkjuq6Iks",
});

async function addPhoto(req, res) {
  if (req.file) {
    cloudinary.uploader.upload(req.file.path, { folder: "photos" }, function (
      err,
      result
    ) {
      if (err) {
        return res.send({ message: "error al subir imagen", ok: false });
      }
      const name = result.original_filename;
      const imgdir = path.resolve(__dirname, `../src/photo/${name}`);
      try {
        if (fs.existsSync(imgdir)) {
          fs.unlinkSync(imgdir);
          const photo = new Photo({
            title: req.body.title,
            photo: result.secure_url,
          });
          photo.save();
          res.send({ message: "created", ok: true, photo });
        }
      } catch (error) {
        console.log(error);
        res.send({ message: "some errors" });
      }
    });
  } else {
    console.log(null);
    res.send({ message: "null" });
  }
}
async function getPhotos(_, res) {
  const photos = await Photo.find();
  res.send({ photos });
}
module.exports = { addPhoto, getPhotos };
