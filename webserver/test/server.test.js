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
  