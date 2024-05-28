import React, { useState } from "react";
import ArtLogo from "../../assets/orderImg.jpeg";
import ArtOne from "../../assets/artContentTwo.jpeg";
import ArtTwo from "../../assets/artContentThree.webp";
import ArtThree from "../../assets/artContentFour.webp";
import "./OrderCreation.css";

const OrderCreation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    image: null,
    title: "",
    description: "",
    price: ""
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add logic to handle form submission
    closeModal();
  };

  return (
    <div className="--orderCreation-header">
      <div className="orderCreation">
        <div className="orderCreation-img">
          <img src={ArtLogo} alt="" />
        </div>
        <div className="orderCreation-secong">
          <h1>
            Extraordinary <br /> <span>Art</span> you'll love
          </h1>
          <button className="button" onClick={openModal}>Create Art</button>
        </div>
      </div>

      <div className="marketplace">
        <h1>ART MARKETPLACE</h1>
      </div>

      <section className="artSection">
        {/* Art Items */}
        <div className="artSection-one">
            <p>Unsold</p>
            <img src={ArtOne} alt="" />
            <div className="artTag">
                <div>
                    <h2>#Price</h2>
                </div>
                <div>
                    <h2>Title</h2>
                </div>
            </div>
            <div className="artTag">
                <div>
                    <h2>View Des..</h2>
                </div>
                <button className="artTag-btn">
                    Buy Art
                </button>
            </div>
        </div>

        <div className="artSection-one">
        <p>Unsold</p>
            <img src={ArtTwo} alt="" />
            <div className="artTag">
                <div>
                    <h2>#Price</h2>
                </div>
                <div>
                    <h2>Title</h2>
                </div>
            </div>
            <div className="artTag">
                <div>
                    <h2>View Des..</h2>
                </div>
                <button className="artTag-btn">
                    Buy Art
                </button>
            </div>
        </div>

        <div className="artSection-one">
        <p>Unsold</p>
            <img src={ArtThree} alt="" />
            <div className="artTag">
                <div>
                    <h2>#Price</h2>
                </div>
                <div>
                    <h2>Title</h2>
                </div>
            </div>
            <div className="artTag">
                <div>
                    <h2>View Des..</h2>
                </div>
                <button className="artTag-btn">
                    Buy Art
                </button>
            </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Create New Art</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Image:
                <input type="file" name="image" onChange={handleFileChange} required />
              </label>
              <label>
                Title:
                <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />
              </label>
              <label>
                Description:
                <textarea name="description" value={formData.description} onChange={handleInputChange} required />
              </label>
              <label>
                Price:
                <input type="number" name="price" value={formData.price} onChange={handleInputChange} required />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderCreation;
