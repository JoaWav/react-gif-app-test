//import React, { useState, useEffect } from 'react'
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


const GifGrid = ({ category }) => {


    const { data: images, loading } = useFetchGifs(category);











    return (
        <>
            <h3 className='animate__animated animate__flipInX'>{category}</h3>
            <hr />
            {loading && <p>Loading</p>}
            <div className='card-grid'>



                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div >
        </>

    )
}

export default GifGrid;