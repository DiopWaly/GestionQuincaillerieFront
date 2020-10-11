import { FormGroup } from '@angular/forms';
export class Groupe {

    private codegroupe: string;
    private libellegroupe: string;
    constructor(form: FormGroup){
        this.codegroupe = form.value['codegroupe'];
        this.libellegroupe = form.value['libellegroupe'];
    }
}
