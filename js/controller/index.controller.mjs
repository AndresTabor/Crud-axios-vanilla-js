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
        //this.#santosService.createSanto(newSanto);
    }

}

const index = new IndexController();
index.init();


