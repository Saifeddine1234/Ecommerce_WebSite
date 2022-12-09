import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPage1Component } from './admin-page1/admin-page1.component';
import { AdminPage2PubHautComponent } from './admin-page2-pub-haut/admin-page2-pub-haut.component';
import { AdminPage3PubPrincipalComponent } from './admin-page3-pub-principal/admin-page3-pub-principal.component';
import { AdminPage4PubDroiteComponent } from './admin-page4-pub-droite/admin-page4-pub-droite.component';
import { AdminPage5PubMilieuComponent } from './admin-page5-pub-milieu/admin-page5-pub-milieu.component';
import { Page0AccueilComponent } from './page0-accueil/page0-accueil.component';
import { Page1CentreAssistanceComponent } from './page1-centre-assistance/page1-centre-assistance.component';
import { Page2SeconnecterComponent } from './page2-seconnecter/page2-seconnecter.component';
import { Page3CreeCompteComponent } from './page3-cree-compte/page3-cree-compte.component';
import { Page4CategorieComponent } from './page4-categorie/page4-categorie.component';
import { Page5SousCategorieComponent } from './page5-sous-categorie/page5-sous-categorie.component';
import { AdminPage6PubBasComponent } from './admin-page6-pub-bas/admin-page6-pub-bas.component';
import { AdminPage7GererCatComponent } from './admin-page7-gerer-cat/admin-page7-gerer-cat.component';
import { AdminPage8GererProduitComponent } from './admin-page8-gerer-produit/admin-page8-gerer-produit.component';
import { AdminPage9GererSousCatComponent } from './admin-page9-gerer-sous-cat/admin-page9-gerer-sous-cat.component';
import { AdminPage9GererMarqueComponent } from './admin-page9-gerer-marque/admin-page9-gerer-marque.component';
import { AdminPage10GererUserComponent } from './admin-page10-gerer-user/admin-page10-gerer-user.component';
import { AdminPage11GererAssistanceComponent } from './admin-page11-gerer-assistance/admin-page11-gerer-assistance.component';
import { Page6ProduitbycatComponent } from './page6-produitbycat/page6-produitbycat.component';
import { Page7PanierComponent } from './page7-panier/page7-panier.component';
import { Page8VenteFlashComponent } from './page8-vente-flash/page8-vente-flash.component';
import { Page9OffrespecialComponent } from './page9-offrespecial/page9-offrespecial.component';
import { AdminPage0PrincipalComponent } from './admin-page0-principal/admin-page0-principal.component';
import { Page10InformationcompteComponent } from './page10-informationcompte/page10-informationcompte.component';
import { Page11VosCommandesComponent } from './page11-vos-commandes/page11-vos-commandes.component';
import { Page12BoiteReceptionComponent } from './page12-boite-reception/page12-boite-reception.component';
import { VfComponent } from './vf/vf.component';
import { Page13PlusDemandeeComponent } from './page13-plus-demandee/page13-plus-demandee.component';
import { Page14DetailComponent } from './page14-detail/page14-detail.component';
import { Page15CommanderComponent } from './page15-commander/page15-commander.component';
import { Page16Login2Component } from './page16-login2/page16-login2.component';
import { Page15CommandebienpasserComponent } from './page15-commandebienpasser/page15-commandebienpasser.component';
import { Page16PanierVideComponent } from './page16-panier-vide/page16-panier-vide.component';
import { Page17SearchComponent } from './page17-search/page17-search.component';
import { Page18ForgetpasswordComponent } from './page18-forgetpassword/page18-forgetpassword.component';
import { Page18ResetpasswordComponent } from './page18-resetpassword/page18-resetpassword.component';
import { AaaaaanewPageComponent } from './aaaaaanew-page/aaaaaanew-page.component';
import { AdminDetailProduitComponent } from './admin-detail-produit/admin-detail-produit.component';
import { AdminPage12CommandeComponent } from './admin-page12-commande/admin-page12-commande.component';


const routes: Routes = [
  {
    path: '',
    component: Page0AccueilComponent,
  },
  {
    path: 'centre-assistance',
    component: Page1CentreAssistanceComponent,
  },
  {
    path: 'se-connecter',
    component:Page2SeconnecterComponent,
  },
  {
    path: 'cree-compte',
    component:Page3CreeCompteComponent,
  },
  {
    path: 'login',
    component:  Page16Login2Component ,
  },
    {
    path: 'categorie',
    component:Page4CategorieComponent,

  },
  {
    path: 'get_produit_bycat/:cat',
    component:Page6ProduitbycatComponent,

  },
  {
    path: 'get_produit',
    component:Page4CategorieComponent,

  },
  
  
  {
    path: 'sous-categorie',
    component:Page5SousCategorieComponent,
  },
  {
    path: 'bien-passer',
    component:Page15CommandebienpasserComponent,
  },
  {
    path: 'panier',
    component:Page7PanierComponent,
  },
  {
    path: 'panier-vide',
    component:Page16PanierVideComponent,
  },
  {
    path: 'vente-flash',
    component:Page8VenteFlashComponent,
  },
  {
    path: 'information-compte',
    component:Page10InformationcompteComponent,
  },
  {
    path: 'offre-special',
    component:Page9OffrespecialComponent,
  },
  {
    path: 'vos-commandes',
    component:Page11VosCommandesComponent,
  },
    {
    path: 'boite-reception',
    component:Page12BoiteReceptionComponent,
  },
  {
    path: 'ForgetPassword',
    component:Page18ForgetpasswordComponent,
  },
  {
    path: 'ResetPassword/:id/:token',
    component:Page18ResetpasswordComponent,
  },  
  {
    path: 'plus-demande',
    component:Page13PlusDemandeeComponent,
  },
  {
    path: 'search/:box',
    component:Page17SearchComponent,
  },
  {
    path: 'search',
    component:Page4CategorieComponent,
  },
  {
    path: 'detail/:id',
    component:Page14DetailComponent,
  },
  {
    path: 'Commander',
    component:Page15CommanderComponent,
  },
  {
    path: 'vf',
    component:VfComponent,
  },
  {
    path: 'admin/page',
    component:AdminPage1Component,
  },
  {
  path: 'saif',
  component:AaaaaanewPageComponent,
  },
  {
    path: 'admin/pub-haut',
    component:AdminPage2PubHautComponent,
  },
  {
    path: 'admin/pub-principale',
    component:AdminPage3PubPrincipalComponent,
  },
  {
    path: 'admin/pub-droite',
    component:AdminPage4PubDroiteComponent,
  },
  {
    path: 'admin/pub-milieu',
    component:AdminPage5PubMilieuComponent,
  },
  {
    path: 'admin/pub-bas',
    component:AdminPage6PubBasComponent,
  },
  {
    path: 'admin/gerer-categorie',
    component:AdminPage7GererCatComponent,
  },
  {
    path: 'admin/gerer-produit',
    component:AdminPage8GererProduitComponent,
  },
  {
    path: 'admin/detail-produit/:id',
    component:AdminDetailProduitComponent,
  },
  {
    path: 'admin/gerer-sous-categorie',
    component:AdminPage9GererSousCatComponent,
  },
  {
    path: 'admin/gerer-marque',
    component:AdminPage9GererMarqueComponent,
  },
  {
    path: 'admin/gerer-user',
    component:AdminPage10GererUserComponent,
  },
  {
    path: 'admin/gerer-assistance',
    component:AdminPage11GererAssistanceComponent,
  },
  {
    path: 'admin/principal',
    component:AdminPage0PrincipalComponent,
  },
  {
    path: 'admin/gerer-commande',
    component:AdminPage12CommandeComponent,
  },
  

  
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
