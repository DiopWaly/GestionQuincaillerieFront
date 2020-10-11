import { FormGroup } from '@angular/forms';
export class Operation {
    private typeoperation: number;
    private client: number;
    private lignecommande: number;
    constructor(form: FormGroup){
        this.typeoperation = form.value['typeoperation'];
        this.lignecommande = form.value['lignecommande'];
        this.client = form.value['client'];
    }
}
