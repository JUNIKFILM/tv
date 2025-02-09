document.addEventListener("keyup", e=>{

  if (e.target.matches("#buscador")){
  
      if (e.key ==="Escape")e.target.value = "";
      listaArticulos.style.display = "block";
      
      if (e.key ==="click")e.target.value = "";
      listaArticulos.style.display = "block";
  
      if (buscador.value === ""){
        listaArticulos.style.display = "none";
      }
    
  
      document.querySelectorAll(".articulo").forEach(buscador =>{
  
          buscador.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?buscador.classList.remove("filtro")
            :buscador.classList.add("filtro")
  
            
      })
  
  }
  
  
  })

            document.getElementById("listaArticulos").addEventListener("click", ocultar_buscador);

//ocultas lista de articulos

function ocultar_buscador(){
  listaArticulos.style.display = "none";
  buscador.value = "";
    
}
