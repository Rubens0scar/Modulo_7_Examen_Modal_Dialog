import React from 'react';
import './dialog.css';

interface DialogProps {
  /**
   * Color de toda la letra del modal
   */
  color?: string;
  /**
   * Color de l aletra.
   */
  backgroundColor?: string;
  /**
   * Titulo del mensaje modal.
   */
  titulo: string;
  /**
   * Que tipo de presentacion prefiere ?
   */
  animacion?: 'Deslizar' | 'Rotar';
}

/**
 * Primary UI component for user interaction
 */
export const Dialog = ({
  backgroundColor = '#fff',
  titulo = 'Ejemplo Modal',
  animacion = 'Deslizar',
  color = '#000',
  ...props//interpolando el valor props del buttonprops
}: DialogProps) => {
  const pres = animacion=='Deslizar'? 'movedown' : 'rotate';
  const contenido = animacion=='Deslizar'? 'La ventana modal aparece por arriba y se desliza hasta su posición.' : 'Usando la propiedad transform de CSS3, podemos hacer que las ventanas aparezcan rotando.';

  return (
    <>
    <ul>
			<li><a href="#modal1">Ejemplo Modal</a></li>
		</ul>
    <div id="modal1" className="modalmask">
      <div className={[`modalbox ${pres}`].join(' ')} style={{ backgroundColor, color}}>
		    <a href="#close" title="Close" className="close">X</a>
		    <h2>{titulo}</h2>
        <h5>Animacion: {animacion}</h5>
		    <p>{contenido}</p>
	      <p>Aquí puedes incluir cualquier cosa como vídeos, mapas, formularios, botones...</p>
		  </div>
    </div>
    </>
  );
};
