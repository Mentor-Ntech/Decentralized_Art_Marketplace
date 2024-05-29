import React, { useState, useEffect } from 'react';
import ArtLogo from '../../assets/orderImg.jpeg';
import './OrderCreation.css';
import { addArt, getAllArts } from '../../utils/db';

const OrderCreation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    image: null,
    title: '',
    description: '',
    price: ''
  });
  const [arts, setArts] = useState([]);

  useEffect(() => {
    const fetchArts = async () => {
      const savedArts = await getAllArts();
      setArts(savedArts);
    };

    fetchArts();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('image', formData.image);
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('price', formData.price);

    await addArt(data);
    const savedArts = await getAllArts();
    setArts(savedArts);
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
        {arts.map((art) => (
          <div key={art._id} className="artSection-one">
            <p>Unsold</p>
            <img src={`http://localhost:5000/${art.image}`} alt={art.title} />
            <div className="artTag">
              <div>
                <h2>{art.price}</h2>
              </div>
              <div>
                <h2>{art.title}</h2>
              </div>
            </div>
            <div className="artTag">
              <div>
                <h2>{art.description}</h2>
              </div>
              <button className="artTag-btn">Buy Art</button>
            </div>
          </div>
        ))}
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
