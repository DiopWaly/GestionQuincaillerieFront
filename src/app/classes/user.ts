import { FormGroup } from '@angular/forms';
export class User {
    private user: string;
    private email: string;
    private tel: string;
    private quincaillerie: number;
    private groupe: number;
    constructor(form: FormGroup){
        this.user = form.value['user'];
        this.email = form.value['email'];
        this.tel = form.value['tel'];
        this.quincaillerie = form.value['quincaillerie'];
        this.groupe = form.value['groupe'];
    }
}
