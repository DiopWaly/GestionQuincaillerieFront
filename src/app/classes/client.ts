import { FormGroup } from '@angular/forms';
export class Client {
    private typeclient : string;
    private prenom: string;
    private nom: string;
    private adresse: string;
    private email: string;
    private tel: string;
    private acompte: number;
    private solde: number;
    private profession: string;
    private user: number;
    private photo: string;
    constructor(clientForm: FormGroup){
        this.typeclient = clientForm.value['typeclient'];
        this.prenom = clientForm.value['prenom'];
        this.nom = clientForm.value['nom'];
        this.adresse = clientForm.value['adresse'];
        this.email = clientForm.value['email'];
        this.tel = clientForm.value['tel'];
        this.acompte = clientForm.value['acompte'];
        this.solde = clientForm.value['solde'];
        this.profession = clientForm.value['solde'];
        this.user = clientForm.value['user'];
        this.photo = clientForm.value['photo'];
    }
}
