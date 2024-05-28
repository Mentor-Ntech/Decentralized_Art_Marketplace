const express = require("express");
const router = express.Router();
const {
  createArtwork,
  getAllArtworks,
  getArtworkById,
  updateArtworkById,
  deleteArtworkById,
} = require("../controllers/artworkController");

router.post("/create", createArtwork);

router.get("/artwork", getAllArtworks);

router.get("/:id", getArtworkById);

router.put("/artwork/:id", updateArtworkById);

router.delete("/:id", deleteArtworkById);

module.exports = router;
