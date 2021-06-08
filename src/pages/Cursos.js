import React from 'react';

function Curso() {
  return (
      <h1>Cursos</h1>
  );
}

export default Curso;

export const Graduacao = () => {
    return (
      <div className='Graduacao'>
        <h1>Graduação</h1>
      </div>
    );
  };
  
  export const PosGraduacao = () => {
    return (
      <div className='PosGraduacao'>
        <h1>Pos-Graduação</h1>
      </div>
    );
  };

  export const mba = () => {
    return (
      <div className='mba'>
        <h1>MBA</h1>
      </div>
    );
  };

  export const mestrado = () => {
    return (
      <div className='mestrado'>
        <h1>Mestrado</h1>
      </div>
    );
  };

  export const cursosLivres = () => {
    return (
      <div className='cursosLivres'>
        <h1>Cursos Livres</h1>
      </div>
    );
  };