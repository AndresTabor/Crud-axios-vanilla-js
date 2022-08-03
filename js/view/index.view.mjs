export class IndexView{
    #mainContainer;

    constructor() {
        this.#mainContainer = document.querySelector('#container');        
    }

    startView(data){
        const d = document,
        $table = d.querySelector(".crud-table"),
        $form = d.querySelector(".crud-form"),
        $title = d.querySelector(".crud-title"),
        $template = d.getElementById("crud-template").content,
        $fragment = d.createDocumentFragment();

        data.forEach(el => {
            $template.querySelector(".name").textContent = el.nombre;
            $template.querySelector(".constellation").textContent = el.constelacion;
            $template.querySelector(".edit").dataset.id = el.id;
            $template.querySelector(".edit").dataset.name = el.nombre;
            $template.querySelector(".edit").dataset.constellation = el.constelacion;
            $template.querySelector(".delete").dataset.id = el.id;
  
            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
          });
  
        $table.querySelector("tbody").appendChild($fragment);
        console.log(data);
    }
}