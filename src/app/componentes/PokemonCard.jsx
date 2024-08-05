import React from 'react';

export const PokemonCard = ({ id, name, sprite = [] }) => {

     
  return (
    <section >
      <h2 >#{id} - { name } </h2>


      {/* Imágenes */}
      <div>
        {
       sprite.map( sprite => [
            <img key={ sprite } src={ sprite } alt={ name }  />
          ])
      } 
      </div>

    </section>
  )
}