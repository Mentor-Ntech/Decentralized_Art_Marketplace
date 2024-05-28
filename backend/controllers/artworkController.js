const Artwork = require("../models/Artwork");
const User = require("../models/User");

const createArtwork = async (req, res) => {
  const { title, description, artist, imageUrl, price, categories } =
    req.body;

  try {
    const artistId = await User.findById(artist);
    if (!artistId) {
      return res.status(404).json({ message: "Artist not found" });
    }

    const newArtwork = new Artwork({
      title,
      description,
      artist: artistId,
      imageUrl,
      price,
      categories,
    });

    await newArtwork.save();

    res.status(201).json(newArtwork);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const getAllArtworks = async (req, res) => {
  try {
    const artworks = await Artwork.find().populate("artist", "username");
    res.status(200).json(artworks);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
const getArtworkById = async (req, res) => {
  try {
    const artwork = await Artwork.findById(req.params.id).populate(
      "artist",
      "username"
    );
    if (!artwork) {
      return res.status(404).json({ message: "Artwork not found" });
    }
    res.status(200).json(artwork);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const updateArtworkById = async (req, res) => {
  const { title, description, imageUrl, price, categories } = req.body;

  try {
    const artwork = await Artwork.findById(req.params.id);
    if (!artwork) {
      return res.status(404).json({ message: "Artwork not found" });
    }

    artwork.title = title || artwork.title;
    artwork.description = description || artwork.description;
    artwork.imageUrl = imageUrl || artwork.imageUrl;
    artwork.price = price || artwork.price;
    artwork.categories = categories || artwork.categories;
    artwork.updatedAt = Date.now();

    await artwork.save();

    res.status(200).json(artwork);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const deleteArtworkById = async (req, res) => {
  try {
    const artwork = await Artwork.findById(req.params.id);
    if (!artwork) {
      return res.status(404).json({ message: "Artwork not found" });
    }

    await artwork.deleteOne();
    res.status(200).json({ message: "Artwork deleted successfully" });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = {
  createArtwork,
  getAllArtworks,
  updateArtworkById,
  getArtworkById,
  deleteArtworkById,
};
