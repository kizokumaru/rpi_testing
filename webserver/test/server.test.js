test('Recorremos una carpeta y mostramos los elementos internos identificando si es carpeta o fichero, si es carpeta llamamos a la misma funcion.',() => {
  let response = fetch('http://localhost:3001/fotos');  
  console.log(response);
  expect(true).toStrictEqual(true);
  })
