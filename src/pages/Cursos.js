import React from 'react';

function Curso() {
  return (
      <h1 className='cursos'>Cursos</h1>
  );
}

export default Curso;

export const Graduacao = () => {
    return (
      <div className='cursos'>
        <h1>Graduação</h1>
      </div>
    );
  };
  
  export const PosGraduacao = () => {
    return (
      <div className='cursos'>
        <h1>Pos-Graduação</h1>
      </div>
    );
  };

  export const Mba = () => {
    return (
      <div className='cursos'>
        <h1>MBA</h1>
      </div>
    );
  };

  export const Mestrado = () => {
    return (
      <div className='cursos'>
        <h1>Mestrado</h1>
      </div>
    );
  };

  export const CursosLivres = () => {
    return (
      <div className='cursos'>
        <h1>Cursos Livres</h1>
      </div>
    );
  };