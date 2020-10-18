import { FormGroup } from '@angular/forms';
export class Categorie {
    private categorie: number;
    private codecategorie: string;
    private libelle: string;
    private description: string;
    constructor(form : FormGroup){
        this.categorie = form.value['categorie'];
        this.codecategorie = form.value['codecategorie'];
        this.libelle = form.value['libelle'];
        this.description = form.value['description'];
    }
}
