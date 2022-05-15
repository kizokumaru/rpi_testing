const getFotos = require('../../src/utils/getfotos')

test('Mostrar ficheros de la ruta base', () => {
    let list =[];
    list.push("/home/nestor/Imágenes/folder1");
    expect(getFotos.listOfFiles()).toStrictEqual(list);
  });