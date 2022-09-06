import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function SweetsEdit() {
    const navigate = useNavigate();
    let { id } = useParams();
    const [mini, setMini] = useState({
      name: '',
      price: 0,
      description: '',
      image: '',
    });

  const updateMini = (updatedMini) => {
    axios
      .put(`${API}/minis/${id}`, updatedMini)
      .then(
        () => {
          navigate(`/minis/${id}`);
        },
        (error) => console.error(error),
      )
      .catch((c) => console.warn('catch', c));
  };

  const handleTextChange = (event) => {
    setMini({ ...mini, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/minis/${id}`)
      .then((res) => {
        setMini(res.data.payload);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateMini(mini, id);
  };

  return (
    <div className='edit'>
      <h1 className='title'>Editar Entrada de La Tarta</h1>
      <form className='form' onSubmit={handleSubmit}>
      <div className='color2'>
        <label className='edit-label' htmlFor='name'>
          Nombre:
        </label>
        <input
          className='text'
          id='name'
          type='text'
          placeholder='Name Of Mini'
          required
          value={mini.name}
          onChange={handleTextChange}
        />
        <label className='edit-label' htmlFor='protein'>
        Precio:
        </label>
        <input
          className='text'
          id='price'
          type='number'
          name='price'
          value={mini.price}
          placeholder='0'
          onChange={handleTextChange}
        />
        <label className='edit-label' htmlFor='description'>
        Descripción:
        </label>
         <textarea
            rows="5"
            cols="20"
            className='text'
            id='description'
            value={mini.description}
            type='text'
            placeholder='words'
            onChange={handleTextChange}
            required
            />
        <label className='edit-label' htmlFor='image'>
           URL Imagen:
          </label>
          <input
            className='text'
            id='image'
            type='text'
            placeholder='https://www.image.com'
            required
            value={mini.image}
            onChange={handleTextChange}
          />
        <input type='submit' />
       
        </div>
        <Link to={`/minis/${id}`}>
          <button className='editmini-button'>Back</button>
        </Link>
        
      </form>
      
    </div>
  );
}
