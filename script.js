// Pasos para usar el script:
// 1. Click derecho en la página
// 2. Inspeccionar
// 3. Consola
// 4. Copiar y pegar el código
// 5. Presionar enter

for(const select of document.getElementsByTagName('select')){
    select.value=4;
    select.onchange()
}