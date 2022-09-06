import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Pages/Home';
import New from './Components/Pages/New';
import NewSweets from './Components/Pages/NewCakes';
import Show from './Components/Pages/Show';
import ShowSweets from './Components/Pages/ShowCake'
import Edit from './Components/Pages/Edit';
import EditSweets from './Components/Pages/EditCakes'
import FourOFour from './Components/Pages/FourOFour';
// import About from './Components/Pages/About'
import IndexSweets from './Components/Pages/IndexSweets';
import Index from './Components/Pages/Index';
import {useState} from 'react';



export default function App() {
  const [item, setItem] = useState(0);


  return (
    <div className='App'>
      <Router>
        <NavBar item={item} />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/minis' element={<IndexSweets setItem={setItem} />} />
            <Route path='/cakes' element={<Index setItem={setItem}/>} />
            <Route path='/minis/new' element={<NewSweets />} />
            <Route path='/cakes/new' element={<New />} />
            <Route path='/minis/:id' element={<ShowSweets />} />
            <Route path='/cakes/:id' element={<Show />} />
            <Route path='/minis/:id/edit' element={<EditSweets />} />
            <Route path='/cakes/:id/edit' element={<Edit />} />
            <Route path='*' element={<FourOFour />} />
            {/* <Route path='/about' element={<About />} /> */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}