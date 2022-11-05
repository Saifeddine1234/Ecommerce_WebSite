export class Commande {

    constructor(
        private prixCommande? : String ,
        private nomClient? : String ,
        private prenomClient? : String ,
        private emailClient? : String ,
        private telephoneClient? : String ,
        private adresseClient? : String ,
        private Produits ? : any ,
        private typePaiement? : String ,
        private _id?:String,
    ){

    }

}