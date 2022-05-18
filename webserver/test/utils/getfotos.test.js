const listfiles = require('../../backend/src/utils/listfiles.js');

/*test('Mostrar ficheros de la ruta base', () => {
  let list = [];
  list.push("/home/nestor/Imágenes/folder1");
  expect(getFotos.listOfFiles()).toStrictEqual(list);
});*/

test('Recorremos una carpeta y mostramos los elementos internos identificando si es carpeta o fichero, si es carpeta llamamos a la misma funcion.',() => {
  let lf = new listfiles();
  let list = lf.getFilesInFolder("/home/nestor/Imágenes", 0);
  let listOfName = list.map(f =>{return f.name});
  console.log(listOfName)
  console.log(list[0]);
  expect(listOfName.length>0).toStrictEqual(true);
  expect(listOfName.includes("lasers.jpg")).toStrictEqual(true);
  expect(listOfName.includes("road.jpg")).toStrictEqual(true);
  expect(list[0].name).toStrictEqual('RPiSystem.png');
})


test('Obtenemos una foto de la lista.',() => {
  console.log('Test Obtenemos una foto de la lista');
  let id = 45826392993;
  let lf = new listfiles();
  let list = lf.getFilesInFolder("/home/nestor/Imágenes", 0);
  let foto = list.find(foto => foto._id === id.toString());
  console.log(foto);
})
