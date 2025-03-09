import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "./MenuPosts";
import MenuCategories from "./MenuCategories";

const Menu = () => {
  return (
    <div className='flex-2 mt-16'>
      <h2 className='text-gray-100 text-xl font-bold'>"What's hot"</h2>
      <h1 className='text-2xl'>Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className='text-gray-100 text-xl font-bold'>Discover by topic</h2>
      <h1 className='text-2xl'>Categories</h1>
      <MenuCategories />
      <h2 className='text-gray-100 text-xl font-bold'>Chosen by the editor</h2>
      <h1 className='text-2xl'>Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;