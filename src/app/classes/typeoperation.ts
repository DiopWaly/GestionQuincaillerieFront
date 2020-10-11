import { FormGroup } from '@angular/forms';
export class Typeoperation {
    private typeoperation: string;
    constructor(form: FormGroup){
        this.typeoperation = form.value['typeoperation'];
    }
}
