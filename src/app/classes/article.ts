import { FormGroup } from '@angular/forms';
export class Article {

    private libelle: string;
    private unite: string;
    private prixencours: number;
    private codearticle: string;
    private description: string;
    private categorie: number;
    private quincaillerie: number;
    constructor(form: FormGroup){
        this.libelle = form.value['libelle'];
        this.prixencours = form.value['prixencours'];
        this.unite = form.value['unite'];
        this.codearticle = form.value['codearticle'];
        this.description = form.value['description'];
        this.categorie = form.value['categorie'];
        this.quincaillerie = form.value['quincaillerie'];
    }
}
