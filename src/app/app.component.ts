import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GestionQuincaillerieFront';
  public navbar = [
     "article",
     "categorie",
     "client",
     "commande",
     "groupe",
     "lignecommande",
     "listmodifprix",
     "operation",
     "listquincaillerie",
     "listtypeoperation",
     "user"
  ];
  constructor(private router:Router){}

  public routing(url : string){
      this.router.navigateByUrl(url);
  }
}
