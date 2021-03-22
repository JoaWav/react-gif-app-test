import React, { useState } from 'react'

import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {


    // HANDLE INPUT CHANGE : Aqui estamos maniuplando el valor recibido
    // por el input de tipo texto, a traves del estado.
    // Su estado por default es el de 'Agregue una categoria'
    // Cuando es modificado, utilizamos el handleInputChange para tomar
    // el nuevo valor, seteandolo con el setInputValue.



    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }



    // HANDLE SUBMIT : Los formularios por defecto, al ser enviados
    // refrescan la pagina completa, con el e.preventDefault() 
    // estamos evitando eso. El (e) toma el evento recibido por el onSubmit.

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {

            setCategories(cats => [inputValue, ...cats]);
            setinputValue('');

        }


        // console.log('Submit hecho')
    }




    return (

        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
                placeholder='Search category'
            />


        </form>






    )
}



AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
AddCategory.defaultProps = {
    setCategories: 'Add Categorie'
}