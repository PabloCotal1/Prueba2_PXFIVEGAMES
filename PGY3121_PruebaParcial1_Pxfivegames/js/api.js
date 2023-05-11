fetch('https://api.rawg.io/api/games?key=${apiKey}&ordering=-added&page_size=20%27')
  .then(response => response.json())
  .then(data => {
    // maneja la respuesta de la API
    console.log(data);
  })
  .catch(error => {
    // maneja cualquier error
    console.error(error);
  });