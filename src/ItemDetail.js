import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

function ItemDetail({match}) {

  useEffect(() => {
    fetchItem();
  },[]);
  const [item, setItem] = useState({});
  const fetchItems = async () => {
    const fetchItem = await fetch('');
    const item = await fetchItem.json();
  }
  return (
    <div>
      <h1>Item</h1>
    </div>
  );
}

export default ItemDetail;
