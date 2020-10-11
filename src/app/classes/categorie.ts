import { FormGroup } from '@angular/forms';
export class Categorie {
    private categorie: number;
    private codecategori: string;
    private libelle: string;
    private description: string;
    constructor(form : FormGroup){
        this.categorie = form.value['categorie'];
        this.codecategori = form.value['codecategorie'];
        this.libelle = form.value['libelle'];
        this.description = form.value['description'];
    }
}
