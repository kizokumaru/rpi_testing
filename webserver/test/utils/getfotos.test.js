const listfiles = require('../../src/utils/listfiles.mjs');

/*test('Mostrar ficheros de la ruta base', () => {
  let list = [];
  list.push("/home/nestor/Imágenes/folder1");
  expect(getFotos.listOfFiles()).toStrictEqual(list);
});*/

test('Recorremos una carpeta y mostramos los elementos internos identificando si es carpeta o fichero, si es carpeta llamamos a la misma funcion.',() => {
  let lf = new listfiles();
  let list = lf.getFilesInFolder("/home/nestor/Imágenes", 0);
  console.log(list)
  expect(list.length>0).toStrictEqual(true);
  expect(list.includes("lasers.jpg")).toStrictEqual(true);
  expect(list.includes("road.jpg")).toStrictEqual(true);
})
