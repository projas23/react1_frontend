import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import House from './components/House';
import SearchFilter from './components/SearchFilter';
import { Route, Routes } from 'react-router-dom';
import SearchResults from './components/SearchResults';
import SearchedHouse from './components/SearchedHouse';
import Login from './components/Login';
import SignUp from './components/SignUp';
import axios from 'axios';
import Enquiries from './components/Enquiries';
import PageNotFound from './components/PageNotFound';


function App() {

  let [housesData,setHousesData] = useState([]);


  useEffect(  ()=>{
      let fetchData = async () => {
       
       let response = await axios.get(process.env.REACT_APP_BACKEND_URL+"houses");
    //  console.log(response);
    setHousesData(response.data);
      //  let data = await response.json();
      //  setHousesData(data);
      }
      fetchData();    
    }
  ,[]);

  return (
    <div className='container-fluid'>
      <Header/>
      <SearchFilter allhouses = {housesData}/>        
      <Routes>
        
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<House houseInfo={housesData[2]} />} />
        <Route path="/searchresults/:county" element={<SearchResults allhouses={housesData}/>}/>
        <Route path='/enquiries' element={<Enquiries/>}/>
        <Route path="/searchedhouse/:id" element={<SearchedHouse allhouses={housesData}/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path='*' element={<PageNotFound/>}/>

      </Routes>
      {/* <Footer/> */}

   
    </div>
  );
}


export default App;
