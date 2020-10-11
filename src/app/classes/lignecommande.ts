import { FormGroup } from '@angular/forms';
export class Lignecommande {
    private pu: number;
    private qte: number;
    private unite: string;
    private commande: number;
    private article: number;
    constructor(form: FormGroup){
        this.pu = form.value['pu'];
        this.qte = form.value['qte'];
        this.unite = form.value['unite'];
        this.commande = form.value['commande'];
        this.article = form.value['article'];
    }
}
