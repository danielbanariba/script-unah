// Pasos para usar el script:
// 1. Click derecho en la página
// 2. Inspeccionar
// 3. Consola
// 4. Poner a mano el codigo, ya que no permite copiar y pegar el codigo por la consola

for(const select of document.getElementsByTagName('select')){
    select.value=4;
    select.onchange()
}
