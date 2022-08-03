import { IndexController } from "../controller/index.controller.mjs";

export class IndexView{
    #indexController;
    #tableBody;
    #document;
    #form;
    #template;
    #title;

    constructor() {
        this.#document = document;
        this.#tableBody = document.querySelector('tbody'); 
        this.#form = document.querySelector('.crud-form');
        this.#template = document.querySelector('#crud-template').content;
        this.#title = document.querySelector('.crud-title');
    }

    startView(santos){
        this.#indexController = new IndexController();
        const 
        $table = this.#document.querySelector(".crud-table"),
        $fragment = this.#document.createDocumentFragment();

        santos.forEach( santo => {
            this.#template.querySelector(".name").textContent = santo.nombre;
            this.#template.querySelector(".constellation").textContent = santo.constelacion;
            this.#template.querySelector(".edit").dataset.id = santo.id;
            this.#template.querySelector(".edit").dataset.name = santo.nombre;
            this.#template.querySelector(".edit").dataset.constellation = santo.constelacion;
            this.#template.querySelector(".delete").dataset.id = santo.id;
  
            let $clone = this.#document.importNode(this.#template, true);
            $fragment.appendChild($clone);
          });
  
        $table.querySelector("tbody").appendChild($fragment);
        this.evenForm();
        this.eventButtons();
        console.log(santos);
    }

    evenForm(){
        this.#document.addEventListener("submit", (e) => {
            e.preventDefault();

            let newSanto = {
                nombre: e.target.nombre.value,
                constelacion: e.target.constelacion.value
            }

            if (e.target === this.#form && !e.target.id.value) {                
                this.#indexController.createSanto(newSanto);
            }else{
                this.#indexController.updateSanto(newSanto, e.target.id.value);
            }
        })
    }

    eventButtons(){
        this.#document.addEventListener("click", (e) => {
            let isDelete;
            let idSanto = e.target.dataset.id;

            if (e.target.matches(".edit")) {
                this.#title.textContent = "Editar Santo";
                this.#form.nombre.value = e.target.dataset.name;
                this.#form.constelacion.value = e.target.dataset.constellation;
                this.#form.id.value = idSanto;
            }

            if (e.target.matches(".delete")) {
                isDelete = confirm(`¿Estás seguro de eliminar el id ${idSanto}?`);                
            }

            if (isDelete) {
                this.#indexController.deleteSanto(idSanto);
            }
        })
    }
}