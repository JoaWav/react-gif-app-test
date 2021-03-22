import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';



const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);

    /*const handleArr = () => {
        const newCategorie = 'One Piece';
        //setCategories([...categories, newCategorie]);
        //setCategories([newCategorie, ...categories,]);
        setCategories(cats => [...cats, newCategorie]);
    }
    */



    return (
        <>
            <h2>Gif App</h2>
            <AddCategory setCategories={setCategories} />
            <hr />



            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                            key={category}
                            category={category} />
                    )
                }
            </ol>


        </>









    )
}


export default GifExpertApp;

