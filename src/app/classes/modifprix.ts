import { FormGroup } from '@angular/forms';
export class Modifprix {
    private prix: number;
    private remarque: string;
    private ancienprix: number;
    private article: number;
    constructor(form: FormGroup){
        this.prix = form.value['prix'];
        this.remarque = form.value['remarque'];
        this.ancienprix = form.value['ancienprix'];
        this.article = form.value['article'];
    }
}
