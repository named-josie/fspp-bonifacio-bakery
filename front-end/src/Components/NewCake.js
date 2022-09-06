import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function NewCake() {
  const navigate = useNavigate();
  const [cake, setCake] = useState({
    name: '',
    price: 0,
    description: '',
    image: '',
  });

  const handleTextChange = (event) => {
    setCake({ ...cake, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/cakes/new`, cake)
      .then((res) => {
        navigate('/cakes');
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <div className='new'>
      <h1 className='title'>New Entry</h1>
      <form onSubmit={handleSubmit}>
        <div className='color1'>
          <label className='new-label1' htmlFor='name'>
          Nombre:
          </label>
          <input
            className='text'
            id='name'
            type='text'
            placeholder='Name Of Cake'
            required
            value={cake.name}
            onChange={handleTextChange}
          />
          <label className='new-label1' htmlFor='protein'>
          Precio:
          </label>
          <input
            className='text'
            id='price'
            type='number'
            name='price'
            value={cake.price}
            placeholder='0'
            onChange={handleTextChange}
          />
          <label className='new-label1' htmlFor='description'>
          Descripción:
          </label>
          <textarea
            rows="5"
            cols="20"
            className='text'
            id='description'
            value={cake.description}
            type='text'
            placeholder='words'
            onChange={handleTextChange}
            required
            />
          <label className='new-label1' htmlFor='image'>
          Imagen:
          </label>
          <input
            className='text'
            id='image'
            type='text'
            placeholder='https://www.image.com'
            required
            value={cake.image}
            onChange={handleTextChange}
          />
          <br />
          <input className='button' type='submit' />
        </div>
      </form>
    </div>
  );
}
