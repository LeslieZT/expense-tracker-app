class ErrorView {
  render() {
    const div = document.createElement("div");
    const content = `
      <div>          
        <h2>404</h2>
        <h1>Página no encontrada</h1>
        <p>El archivo especificado no se encontró en este sitio web. Por favor, compruebe la URL para errores y vuelva a intentarlo.</p>
      </div>
    `;
    div.setAttribute("id", "message");
    div.innerHTML = content;
    return div;
  }

  afterRender(){
    
  } 
}

export const errorView = new ErrorView();
