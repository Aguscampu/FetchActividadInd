fetch(DATA_URL)
  .then(response => {
    
    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }
    return response.json(); 
  })
  .then(data => {
    
    showData(data.students);
  })
  .catch(error => {
    
    console.error('Hubo un problema con el fetch:', error);
  });
