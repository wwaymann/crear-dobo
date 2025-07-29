function loadProducts() {
  const output = document.getElementById('output');
  output.textContent = "Simulando carga de productos...\n";

  setTimeout(() => {
    const exampleProducts = [
      { nombre: "Maceta DOBO 1", precio: "$5.000" },
      { nombre: "Maceta DOBO 2", precio: "$6.500" },
      { nombre: "Maceta DOBO Edición Especial", precio: "$7.200" }
    ];
    output.textContent = exampleProducts.map(p => `• ${p.nombre} - ${p.precio}`).join('\n');
  }, 1000);
}
