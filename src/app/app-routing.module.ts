import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { ArticleComponent } from './entities/article/article.component';
import { ArticleEditComponent } from './entities/Edit/article-edit/article-edit.component';
import { CategorieComponent } from './entities/categorie/categorie.component';
import { CategorieEditComponent } from './entities/Edit/categorie-edit/categorie-edit.component';
import { ClientComponent } from './entities/client/client.component';
import { ClientEditComponent } from './entities/Edit/client-edit/client-edit.component';
import { CommandeComponent } from './entities/commande/commande.component';
import { CommandeEditComponent } from './entities/Edit/commande-edit/commande-edit.component';
import { GroupeComponent } from './entities/groupe/groupe.component';
import { GroupeEditComponent } from './entities/Edit/groupe-edit/groupe-edit.component';
import { LignecommandeComponent } from './entities/lignecommande/lignecommande.component';
import { LignecommandeEditComponent } from './entities/Edit/lignecommande-edit/lignecommande-edit.component';
import { ListarticleComponent } from './entities/list/listarticle/listarticle.component';
import { ListcategorieComponent } from './entities/list/listcategorie/listcategorie.component';
import { ListclientComponent } from './entities/list/listclient/listclient.component';
import { ListcommandeComponent } from './entities/list/listcommande/listcommande.component';
import { ListgroupeComponent } from './entities/list/listgroupe/listgroupe.component';
import { ListlignecommandeComponent } from './entities/list/listlignecommande/listlignecommande.component';
import { ListmodifprixComponent } from './entities/list/listmodifprix/listmodifprix.component';
import { ListoperationComponent } from './entities/list/listoperation/listoperation.component';
import { ListquincComponent } from './entities/list/listquinc/listquinc.component';
import { ListtypeoperationComponent } from './entities/list/listtypeoperation/listtypeoperation.component';
import { ListuserComponent } from './entities/list/listuser/listuser.component';
import { ModifprixComponent } from './entities/modifprix/modifprix.component';
import { ModifprixEditComponent } from './entities/Edit/modifprix-edit/modifprix-edit.component';
import { NgModule } from '@angular/core';
import { OperationComponent } from './entities/operation/operation.component';
import { OperationEditComponent } from './entities/Edit/operation-edit/operation-edit.component';
import { QuincaillerieComponent } from './entities/quincaillerie/quincaillerie.component';
import { QuincaillerieEditComponent } from './entities/Edit/quincaillerie-edit/quincaillerie-edit.component';
import { TypeoperationComponent } from './entities/typeoperation/typeoperation.component';
import { TypeoperationEditComponent } from './entities/Edit/typeoperation-edit/typeoperation-edit.component';
import { UserComponent } from './entities/user/user.component';
import { UserEditComponent } from './entities/Edit/user-edit/user-edit.component';

const routes: Routes = [
  {
    path:"", component: ArticleComponent
  },
  {
    path:"modifprix", component: ModifprixComponent
  },
  {
    path:"article", component: ArticleComponent
  },
  {
    path:"categorie", component: CategorieComponent
  },
  {
    path:"client", component: ClientComponent
  },
  {
    path:"commande", component: CommandeComponent
  },
  {
    path:"groupe", component: GroupeComponent
  },
  {
    path:"lignecommande", component: LignecommandeComponent
  },
  {
    path:"operation", component: OperationComponent
  },
  {
    path:"quincaillerie", component: QuincaillerieComponent
  },
  {
    path:"typeoperation", component: TypeoperationComponent
  },
  {
    path:"user", component: UserComponent
  },
  {
    path:"listarticle", component: ListarticleComponent
  },
  {
    path:"listcategorie", component: ListcategorieComponent
  },
  {
    path:"listclient", component: ListclientComponent
  },
  {
    path:"listcommande", component: ListcommandeComponent
  },
  {
    path:"listgroupe", component: ListgroupeComponent
  },
  {
    path:"listlignecommande", component: ListlignecommandeComponent
  },
  {
    path:"listmodifprix", component: ListmodifprixComponent
  },
  {
    path:"listoperation", component: ListoperationComponent
  },
  {
    path:"listquincaillerie", component: ListquincComponent
  },
  {
    path:"listtypeoperation", component: ListtypeoperationComponent
  },
  {
    path:"listuser", component: ListuserComponent
  },
  {
    path:"editarticle", component: ArticleEditComponent
  },
  {
    path:"editcategorie", component: CategorieEditComponent
  },
  {
    path:"editclient", component: ClientEditComponent
  },
  {
    path:"editcommande", component: CommandeEditComponent
  },
  {
    path:"editgroupe", component: GroupeEditComponent
  },
  {
    path:"editlignecommande", component: LignecommandeEditComponent
  },
  {
    path:"editmodifprix", component: ModifprixEditComponent
  },
  {
    path:"editoperation", component: OperationEditComponent
  },
  {
    path:"editquincaillerie", component: QuincaillerieEditComponent
  },
  {
    path:"edittypeoperation", component: TypeoperationEditComponent
  },
  {
    path:"edituser", component: UserEditComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
