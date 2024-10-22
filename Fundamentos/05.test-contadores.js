//Crear benchmarks rápidos
//Contadores

//console.countReset()
for (let i = 0; i < 5; i++) {
    console.count("test-loop");
  }
  console.countEnd("test-loop");
  
//Test de velocidad
console.time("test1");
for (let i = 0; i < 10; i++) {
  /* Operación costosa */
  console.timeLog("test1", i);
}
console.timeEnd("test1");

//Test de rendimiento
