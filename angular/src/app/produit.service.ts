import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Categorie} from '../app/categorie';
import {SousCategorie} from '../app/souscategorie';
import {Marque} from '../app/marque';
import {Produit} from '../app/produit';
import {Commande} from '../app/commande';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  cartItems = [];
  totalAmount : any;

  constructor(private httpclient:HttpClient , private router: Router , private injector : Injector) {  
  }


  addItemsToCart = (produit : never) => {
    /*
    this.cartItems.push(produit);
    localStorage.setItem("name","saif");
    const value = localStorage.getItem("name")
    console.log(this.cartItems);
    console.log(value);
*/

  }
  add_categorie(categorie: Categorie){
    console.log(categorie);
    return this.httpclient.post<any>('http://localhost:3001/produits/add_categorie', categorie);
  }
  
  add_sous_categorie(souscategorie: SousCategorie){
    console.log(souscategorie);
    return this.httpclient.post<any>('http://localhost:3001/produits/add_sous_categorie', souscategorie);
  }
  add_marque(marque: Marque){
    console.log(marque);
    return this.httpclient.post<any>('http://localhost:3001/produits/add_marque', marque);
  }
  add_produit(produit: Produit){
    console.log(produit);
    return this.httpclient.post<any>('http://localhost:3001/produits/add_produit', produit);
  }
  add_commande(commande: Commande){
    console.log(commande);
    return this.httpclient.post<any>('http://localhost:3001/produits/add_commande', commande);
  }
  getCommandeByTel(tel: String) {
    console.log(tel);
    return this.httpclient.get<any>('http://localhost:3001/produits/get_commande_by_tel/'+tel)
  }

  getCategorie(){
    return this.httpclient.get<any>('http://localhost:3001/produits/get_categorie');
  }
  getCommande(){
    return this.httpclient.get<any>('http://localhost:3001/produits/get_commande');
  }
  getSousCategorie(){
    return this.httpclient.get<any>('http://localhost:3001/produits/get_sous_categorie');
  }
  getMarque(){
    return this.httpclient.get<any>('http://localhost:3001/produits/get_marque');
  }
  getMarqueByCat(cat: String) {
    console.log(cat);
    return this.httpclient.get<any>('http://localhost:3001/produits/get_marque_bycat/'+cat)
  }
  getProduit(){
    return this.httpclient.get<any>('http://localhost:3001/produits/get_produit');
  }
  getByCategorie(cat: String) {
    return this.httpclient.get<any>('http://localhost:3001/produits/get_produit_bycat/'+cat)
  }
  getSearch(serach: String) {
    console.log(serach);
    return this.httpclient.get<any>('http://localhost:3001/produits/sr/'+serach)
  }
  getByid(id: String) {
    return this.httpclient.get<any>('http://localhost:3001/produits/get_produit_byid/'+id)
  }
  getCategoriebySouscat(scat: String) {
    return this.httpclient.get<any>('http://localhost:3001/produits/get_produit_bysouscat/'+scat)
  }
  getSousCatbycat(cat: String) {
    return this.httpclient.get<any>('http://localhost:3001/produits/get_souscat_bycat/'+cat)
  }
  getProduitByID(id: String) {
    console.log(id);
    return this.httpclient.get<any>('http://localhost:3001/produits/get_produit_byID/'+id)
  }
  update_categorie(cat : any , id : string,old_cat :string ){
    console.log(cat);
    return this.httpclient.post<any>('http://localhost:3001/produits/update_categorie/'+id+'/'+old_cat, cat);
  }
  update_sous_categorie(soucat : any , id : string,old_s_cat :string ){
    return this.httpclient.post<any>('http://localhost:3001/produits/update_sous_categorie/'+id+'/'+old_s_cat, soucat);
  }
  update_marque(marque : any , id : string,old_marque :string ){
    console.log(marque)
    return this.httpclient.post<any>('http://localhost:3001/produits/update_marque/'+id+'/'+old_marque, marque);
  }
  update_assistance(msg : any , id : string){
    console.log(msg)
    return this.httpclient.post<any>('http://localhost:3001/produits/update_msg/'+id, msg);
  }
  update_produit(produit : any ){
    return this.httpclient.post<any>('http://localhost:3001/produits/update_produit', produit);
  }
  spprimer_categorie(id  : String,old_cat:String){
    return this.httpclient.delete<any>('http://localhost:3001/produits/delete_categorie/'+id+'/'+old_cat);
  }
  spprimer_sous_categorie(id  : String,old_sous_cat:String){
    return this.httpclient.delete<any>('http://localhost:3001/produits/delete_sous_categorie/'+id+'/'+old_sous_cat);
  }
  spprimer_marque(id  : String,old_marque:String){
    return this.httpclient.delete<any>('http://localhost:3001/produits/delete_marque/'+id+'/'+old_marque);
  }
  spprimer_produit(id  : String){
    return this.httpclient.delete<any>('http://localhost:3001/produits/delete_produit/'+id);
  }

    /*
    if (!productExists) {
      this.cartItems.push({
        id: product.id,
        nom: product.nom,
        prix: product.prix,
        description: product.description,
        derniere_maj: product.derniere_maj,
        quantity: 1,
        url: product.url
      });
    }
    this.getTotalAmount();
  }

  getTotalAmount() {
    if (this.cartItems) {
      this.totalAmount = 0;
      this.cartItems.forEach((item) => {
        this.totalAmount += (item.quantity * item.prix );
      });
      return {
        totalAmount: this.totalAmount
      };
    }
  }
  */
}

