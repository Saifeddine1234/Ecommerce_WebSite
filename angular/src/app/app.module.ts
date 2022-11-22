import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { PubHautComponent } from './pub-haut/pub-haut.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarHComponent } from './navbar-h/navbar-h.component';
import { PubComponent } from './pub/pub.component';
import { Pub1Component } from './pub1/pub1.component';
import { Pub2Component } from './pub2/pub2.component';
import { CompComponent } from './comp/comp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselComponent } from './carousel/carousel.component';
import { VenteFComponent } from './vente-f/vente-f.component';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { P3Component } from './p3/p3.component';
import { P4Component } from './p4/p4.component';
import { OffreComponent } from './offre/offre.component';
import { P5Component } from './p5/p5.component';
import { P6Component } from './p6/p6.component';
import { NosCategorieComponent } from './nos-categorie/nos-categorie.component';
import { PubHorizontalComponent } from './pub-horizontal/pub-horizontal.component';
import { MarqueComponent } from './marque/marque.component';
import { PubHorizontal2Component } from './pub-horizontal2/pub-horizontal2.component';
import { Page1CentreAssistanceComponent } from './page1-centre-assistance/page1-centre-assistance.component';
import { Page0AccueilComponent } from './page0-accueil/page0-accueil.component';
import { DiscuteComponent } from './discute/discute.component';
import { AppelComponent } from './appel/appel.component';
import { Page2SeconnecterComponent } from './page2-seconnecter/page2-seconnecter.component';
import { ConnecteComponent } from './connecte/connecte.component';
import { Page3CreeCompteComponent } from './page3-cree-compte/page3-cree-compte.component';
import { CreeCompteComponent } from './cree-compte/cree-compte.component';
import { Page4CategorieComponent } from './page4-categorie/page4-categorie.component';
import { HeaderCategorieComponent } from './header-categorie/header-categorie.component';
import { ListSousCategorieComponent } from './list-sous-categorie/list-sous-categorie.component';
import { ProduitsComponent } from './produits/produits.component';
import { Page5SousCategorieComponent } from './page5-sous-categorie/page5-sous-categorie.component';
import { AdminPage1Component } from './admin-page1/admin-page1.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminPage2PubHautComponent } from './admin-page2-pub-haut/admin-page2-pub-haut.component';
import { AdminPage3PubPrincipalComponent } from './admin-page3-pub-principal/admin-page3-pub-principal.component';
import { AdminPage4PubDroiteComponent } from './admin-page4-pub-droite/admin-page4-pub-droite.component';
import { AdminPage5PubMilieuComponent } from './admin-page5-pub-milieu/admin-page5-pub-milieu.component';
import { AdminPage6PubBasComponent } from './admin-page6-pub-bas/admin-page6-pub-bas.component';
import { AdminPage7GererCatComponent } from './admin-page7-gerer-cat/admin-page7-gerer-cat.component';
import { AdminPage8GererProduitComponent } from './admin-page8-gerer-produit/admin-page8-gerer-produit.component';
import { AdminPage9GererSousCatComponent } from './admin-page9-gerer-sous-cat/admin-page9-gerer-sous-cat.component';
import { AdminPage9GererMarqueComponent } from './admin-page9-gerer-marque/admin-page9-gerer-marque.component';
import { AdminPage10GererUserComponent } from './admin-page10-gerer-user/admin-page10-gerer-user.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminPage11GererAssistanceComponent } from './admin-page11-gerer-assistance/admin-page11-gerer-assistance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Page6ProduitbycatComponent } from './page6-produitbycat/page6-produitbycat.component';
import { Page7PanierComponent } from './page7-panier/page7-panier.component';
import { Page8VenteFlashComponent } from './page8-vente-flash/page8-vente-flash.component';
import { VenteFlashComponent } from './vente-flash/vente-flash.component';
import { VfComponent } from './vf/vf.component';
import { Page9OffrespecialComponent } from './page9-offrespecial/page9-offrespecial.component';
import { OffrespecialComponent } from './offrespecial/offrespecial.component';
import { AdminPage0PrincipalComponent } from './admin-page0-principal/admin-page0-principal.component';
import { Page10InformationcompteComponent } from './page10-informationcompte/page10-informationcompte.component';
import { Page11VosCommandesComponent } from './page11-vos-commandes/page11-vos-commandes.component';
import { Page12BoiteReceptionComponent } from './page12-boite-reception/page12-boite-reception.component';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Page13PlusDemandeeComponent } from './page13-plus-demandee/page13-plus-demandee.component';
import { PlusDemandeeComponent } from './plus-demandee/plus-demandee.component';
import { Page14DetailComponent } from './page14-detail/page14-detail.component';
import { Page15CommanderComponent } from './page15-commander/page15-commander.component';
import { Page16Login2Component } from './page16-login2/page16-login2.component';
import { Connect2Component } from './connect2/connect2.component';
import { Page15CommandebienpasserComponent } from './page15-commandebienpasser/page15-commandebienpasser.component';
import { Page16PanierVideComponent } from './page16-panier-vide/page16-panier-vide.component';
import { Page17SearchComponent } from './page17-search/page17-search.component';
import { SearchComponent } from './search/search.component';
import { Page18ForgetpasswordComponent } from './page18-forgetpassword/page18-forgetpassword.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { Page18ResetpasswordComponent } from './page18-resetpassword/page18-resetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';






@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PubHautComponent,
    NavbarComponent,
    NavbarHComponent,
    PubComponent,
    Pub1Component,
    Pub2Component,
    CompComponent,
    CarouselComponent,
    VenteFComponent,
    P1Component,
    P2Component,
    P3Component,
    P4Component,
    OffreComponent,
    P5Component,
    P6Component,
    NosCategorieComponent,
    PubHorizontalComponent,
    MarqueComponent,
    PubHorizontal2Component,
    Page1CentreAssistanceComponent,
    Page0AccueilComponent,
    DiscuteComponent,
    AppelComponent,
    Page2SeconnecterComponent,
    ConnecteComponent,
    Page3CreeCompteComponent,
    CreeCompteComponent,
    Page4CategorieComponent,
    HeaderCategorieComponent,
    ListSousCategorieComponent,
    ProduitsComponent,
    
    Page5SousCategorieComponent,
    AdminPage1Component,
    AdminNavbarComponent,
    AdminSidebarComponent,
    AdminPage2PubHautComponent,
    AdminPage3PubPrincipalComponent,
    AdminPage4PubDroiteComponent,
    AdminPage5PubMilieuComponent,
    AdminPage6PubBasComponent,
    AdminPage7GererCatComponent,
    AdminPage8GererProduitComponent,
    AdminPage9GererSousCatComponent,
    AdminPage9GererMarqueComponent,
    AdminPage10GererUserComponent,
    AdminPage11GererAssistanceComponent,
    Page6ProduitbycatComponent,
    Page7PanierComponent,
    Page8VenteFlashComponent,
    VenteFlashComponent,
    VfComponent,
    Page9OffrespecialComponent,
    OffrespecialComponent,
    AdminPage0PrincipalComponent,
    Page10InformationcompteComponent,
    Page11VosCommandesComponent,
    Page12BoiteReceptionComponent,
    Page13PlusDemandeeComponent,
    PlusDemandeeComponent,
    Page14DetailComponent,
    Page15CommanderComponent,
    Page16Login2Component,
    Connect2Component,
    Page15CommandebienpasserComponent,
    Page16PanierVideComponent,
    Page17SearchComponent,
    SearchComponent,
    Page18ForgetpasswordComponent,
    ForgetpasswordComponent,
    Page18ResetpasswordComponent,
    ResetpasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    CarouselModule.forRoot() ,
    BrowserAnimationsModule ,
    HttpClientModule ,
    FormsModule, 
    CollapseModule ,
    ReactiveFormsModule ,
    NgxNavbarModule ,
    MatToolbarModule,
    MatIconModule ,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
