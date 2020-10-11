import { FormGroup } from '@angular/forms';
export class Commande {

    private datecommande: Date;
    private designation: string;
    private montant: number;
    private numfacture: string;
    private description: string;

    constructor(form: FormGroup){
        this.datecommande = form.value['datecommande'];
        this.designation = form.value['designation'];
        this.montant = form.value['montant'];
        this.numfacture = form.value['numfacture'];
        this.description = form.value['description'];
    }
}
