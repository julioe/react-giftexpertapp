import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
export const GiftExpertApp = () => {
  //const categorias = ['One punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['One punch']);

  // const handleAdd = () => {
  //   //   setCategories([...categories, 'HunerXhunter']);
  //   setCategories((cats) => [...cats, 'hunterXhunter']);
  // };

  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
