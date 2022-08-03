'use strict';
import { SantosService } from "../model/services/santos.services.mjs";
import { IndexView } from "../view/index.view.mjs";

export class IndexController{
    #indesxView;
    #santosService;
    #data;

    constructor(){
        this.#indesxView = new IndexView();
        this.#santosService = new SantosService();
    }

    async init(){
        const data = await this.#santosService.getAllSantos()
        this.#indesxView.startView(data);
    }

    async createSanto(newSanto){ 
        this.#santosService.createSanto(newSanto);
    }

    async updateSanto(newSanto, idSanto){
        this.#santosService.updateSanto(newSanto, idSanto);
    }

    async deleteSanto (idSanto){
        this.#santosService.deleteSanto(idSanto);
    }

}

const index = new IndexController();
index.init();


