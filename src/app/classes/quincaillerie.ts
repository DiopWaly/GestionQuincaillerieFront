import { FormGroup } from '@angular/forms';
export class Quincaillerie {
    private libellequic: string;
    private codequinc: string;
    private tel: string;
    private email: string;
    private adresse: string;
    private ville: string;
    private region: string;
    private long: string;
    private lat: string;
    constructor(form: FormGroup){
        this.libellequic = form.value['libellequic'];
        this.codequinc = form.value['codequinc'];
        this.tel = form.value['tel'];
        this.email = form.value['email'];
        this.adresse = form.value['adresse'];
        this.ville = form.value['ville'];
        this.region = form.value['region'];
        this.long = form.value['long'];
        this.lat = form.value['lat'];
    }
}
