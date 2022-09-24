import Header from "./components/Header";
import './App.css';
import React, { useEffect, useState } from 'react';
import ImageList from "./components/ImageList"
import 'bootstrap/dist/css/bootstrap.min.css';
import Poupup from "./components/Popup";
import axios from 'axios';

function App() {
 
  const [showModal, setShowModal] = useState(false);
  const [imageList,setImageList] = useState([]);
  const [modalData, setModalData] = useState({});
  const [searchKey, setSearchKey] = useState("");
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    //console.log(searchKey);
    if(searchKey !== "") {
      axios.get(`https://api.unsplash.com/search/photos/?query=${searchKey}&per_page=21&client_id=${process.env.React_App_api_key}`)
    .then(response => setImageList(response.data.results));
   }
  },[searchKey])

  
  const openModal = id =>{
    const selected_image = imageList.find(single_elem => single_elem.id == id);
    setModalData(selected_image);
    // axios.get(`https://api.unsplash.com/photos/${id}?client_id=${process.env.React_App_api_key}`)
    // .then(response => console.log(response.data));
     setShowModal(true);
    }

  useEffect(() =>{
    axios.get(`https://api.unsplash.com/photos/?per_page=21&client_id=${process.env.React_App_api_key}`)
    .then(response => setImageList(response.data));
  },[])

  return (
    <div className="App">
     <Header setSearchKey = {setSearchKey}/>
    
      <ImageList  cardCLick={openModal} images = {imageList} />
      <Poupup showModal={showModal} closeModal = {closeModal}   modalData = {modalData}/>
     
    </div>
  );
}

export default App;
