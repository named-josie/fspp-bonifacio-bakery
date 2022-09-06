import { useState, useEffect } from 'react';
import Sweet from './Sweet';
import axios from 'axios';


const API = process.env.REACT_APP_API_URL;

const formatter = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 })

 

export default function Sweets({setItem}) {
  const [minis, setMinis] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/minis`)
      .then((res) => {
        setMinis(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [minis]);
 
//  const handleCheckbox = () => {
//     setMinis({ ...minis, isFavorite: !minis.isFavorite });
//    };  

  return (
    <div className='minis'>
      <section className='all-minis'>
        {minis?.map((mini) => {
          return <Sweet key={mini.id} setItem={setItem} mini={mini} formatter={formatter}/>;
        })}
      </section>
      <br />
     
    </div>
  );
}
