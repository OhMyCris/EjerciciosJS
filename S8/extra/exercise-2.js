// Obtener datos del servidor JSON usando fetch
fetch('http://localhost:3000/diary')
  .then(response => response.json())
  .then(data => {
    // Ordenar las notas por fecha de menor a mayor
    data.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Crear y mostrar las notas en el HTML
    data.forEach(note => {
      // Crear un div para cada nota
      const noteDiv = document.createElement('div');
      
      // Crear elementos HTML para la nota (h3, h5, p, botón)
      const titleHeader = document.createElement('h3');
      const dateHeader = document.createElement('h5');
      const descriptionPara = document.createElement('p');
      const deleteButton = document.createElement('button');

      // Asignar valores a los elementos creados
      titleHeader.textContent = note.title;
      dateHeader.textContent = note.date;
      descriptionPara.textContent = note.description;
      deleteButton.textContent = 'Eliminar';

      // Añadir evento de clic al botón de eliminar
      deleteButton.addEventListener('click', () => {
        fetch(`http://localhost:3000/diary/${note.id}`, {
          method: 'DELETE'
         }).then((response) => {
            if (response.ok) {
                noteDiv.remove();
            } else {
                console.error('No se ha podido eliminar.');
            }
         });
      });

      // Agregar elementos creados al div de la nota
      noteDiv.appendChild(titleHeader);
      noteDiv.appendChild(dateHeader);
      noteDiv.appendChild(descriptionPara);
      noteDiv.appendChild(deleteButton);

      // Agregar el div de la nota al documento HTML
      document.body.appendChild(noteDiv);
    });
  })
  .catch(error => {
    // Manejo de errores en la solicitud fetch
    console.error('Ha ocurrido un error:', error);
  });

  //Se me ha borrado todo lo del .json y no se ha recuperado al refreshear
