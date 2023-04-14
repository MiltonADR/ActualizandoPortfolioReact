import * as React from 'react';

export const AcercaDe = (props) => {
  return (
    <>
      <div className="container">
        <div className="contenido_perfil row p-2">
          <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
            <img
              src="https://i.blogs.es/66b2a4/photo-1511367461989-f85a21fda167/1366_2000.webp"
              alt=""
              class="img-fluid"
              id="fotoPerfil"
            />
          </div>
          <div className="perfil_izquierdo col-xs-12 col-sm-2 col-md-2 col-lg-2 text-center">
            <h3>{props.nombre}</h3>
            <p>{props.titulo}</p>
          </div>
          <div className="perfil_derecho col-xs-12 col-sm-8 col-md-8 col-lg-8">
            <span>
              <h3>Acerca de Mi</h3>
              <p>
                Soy una persona creativa, proactiva, disciplinada,y con mucho
                amor por la programacion. Manejo las siguientes tecnologias:
                HTML, CSS, JavaScript, Angular, TypeScript, Bootstrap, Git y
                GitHub Actualmente me estoy formando en #YoProgramo de Argentina
                programa para desempeñarme como un desarrollador FULL-STACK
                Estoy interesado por conseguir mi primer empleo como aprendiz en
                alguna empresa tecnologica.
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
