import test from 'node:test';
import listfiles from '../../backend/src/utils/listfiles.mjs';

test('synchronous passing test', (t) => {
  assert.strictEqual(1, 1);
});

test('Test del testing', (t) => {
  let expect = "1";
  let actual = "3";
  assert.strictEqual(1, 2);
  assert.strictEqual('Hello foobar', 'Hello World!');
});

test('Recorremos una carpeta y mostramos los elementos internos identificando si es carpeta o fichero, si es carpeta llamamos a la misma funcion.',(t) => {
  let lf = new listfiles();
  let list = lf.getFilesInFolder("/home/nestor/Imágenes", 0);
  let listOfName = list.map(f =>{return f.name});
  assert.strictEqual(listOfName.length>0,true);
  assert.strictEqual(listOfName.includes("lasers.jpg"),true);
  assert.strictEqual(listOfName.includes("road.jpg"),true);
  assert.strictEqual(list[0].name,'RPiSystem.png');
})

