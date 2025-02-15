document.addEventListener("keyup", e => {
  if (e.target.matches("#buscador")) {
    const listaArticulos = document.getElementById("listaArticulos");
    
    if (e.key === "Escape") {
      e.target.value = "";
      listaArticulos.style.display = "block";
    }
    
    if (e.key === "click") {
      e.target.value = "";
      listaArticulos.style.display = "block";
    }
    
    if (buscador.value === "") {
      listaArticulos.style.display = "none";
      // Remove any "no results" message if it exists
      const noResultsMsg = document.getElementById("noResultsMessage");
      if (noResultsMsg) noResultsMsg.remove();
      return;
    }
    
    listaArticulos.style.display = "block";
    
    // Get all article items
    const articulos = document.querySelectorAll(".articulo");
    let matchFound = false;
    
    articulos.forEach(articulo => {
      if (articulo.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
        articulo.classList.remove("filtro");
        matchFound = true;
      } else {
        articulo.classList.add("filtro");
      }
    });
    
    // Handle no results
    let noResultsMsg = document.getElementById("noResultsMessage");
    
    if (!matchFound) {
      // Create message if it doesn't exist
      if (!noResultsMsg) {
        noResultsMsg = document.createElement("li");
        noResultsMsg.id = "noResultsMessage";
        noResultsMsg.style.textAlign = "center";
        noResultsMsg.style.padding = "15px 10px";
        noResultsMsg.style.color = "#c2bfbf";
        noResultsMsg.innerText = "No se ha encontrado el canal";
        listaArticulos.appendChild(noResultsMsg);
      }
    } else {
      // Remove message if results are found
      if (noResultsMsg) noResultsMsg.remove();
    }
  }
});


document.getElementById("listaArticulos").addEventListener("click", ocultar_buscador);

//ocultas lista de articulos

function ocultar_buscador(){
  listaArticulos.style.display = "none";
  buscador.value = "";
    
}
