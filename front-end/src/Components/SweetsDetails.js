import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import gluten from './assets/gluten.png'
import eggs from './assets/eggs.png'
import milk from './assets/milk.png'
import treenuts from './assets/treenuts.png'
import thc from './assets/thc.png'


const API = process.env.REACT_APP_API_URL;

export default function SweetDetails() {
  const [mini, setMinis] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();
  
  const formatter = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 })


  useEffect(() => {
    axios
      .get(`${API}/minis/${id}`)
      .then((res) => {
        setMinis(res.data.payload);
      })

      .catch(() => {
        navigate('/not found');
      });
  }, [id, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/minis/${id}`)
      .then(() => {
        navigate('/minis');
      })
      .catch(() => {
        console.warn('error');
      });
  };
  return (
    <div className='mini-show'>
         <div className='miniinfo'>
        <h2 className='show_name'>
         {mini.name}
      </h2>
      <hr></hr>
      <h3 className='price-details'>
      {formatter.format(mini.price)}
      </h3>
      <p className='show_p'>
        {mini.description}
      </p>
      <div>
      <img className='contains' style={{ width: '275px', height: '255px' }} src={eggs} alt=""></img>
      <img className='contains' style={{ width: '275px', height: '255px' }} src={gluten} alt=""></img>
      <img className='contains' 
      style={{ width: '275px', height: '255px' }}src={milk} alt=""></img>
      <img className='contains' style={{ width: '275px', height: '255px' }} src={treenuts} alt=""></img>
      <img className='contains' style={{ width: '275px', height: '255px' }} src={thc} alt=""></img>
      </div>
      </div>
      <div className='mini-image'>
      <img className='details_mini' alt='' src={mini.image}></img>
      </div>
      <div className='showNavigation'>
        <div>
          <Link to={`/minis`}>
            <button className='mini_show_button'>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/minis/${mini.id}/edit`}>
            <button className='mini_show_button'>Edit</button>
          </Link>
        </div>
        <div>
          <button className='mini_show_button' onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
