import React from 'react';

function Receta(props){
    return (

<div className='contenedorpcpal'>

<p className='nombre-receta'> {props.nombre}</p>

<div className='ingredientes-receta'>
<img className='img1'
src={require (`../Imagenes/${props.imagen}`) }
alt= 'fotoreceta' />

<ul className= 'Ingredientes'>
    <p className='Ing'>Ingredientes:</p>
    <p>{props.ingredientes}</p>
    </ul>
    
</div>
<p className= 'pasos-receta'> {props.pasos}</p>
<br></br>

</div>
    );
};

export default Receta;
