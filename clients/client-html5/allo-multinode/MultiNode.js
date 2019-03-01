    function Variable(type, cle, valeur)
    {
        this.type = type;
        this.cle = cle;
        this.valeur = valeur;        
    }
    
    function MultiNode()
    {
        
        this.contact;
        
        var multinode = this;
        
        try
        {
            this.contact = new WebSocket("ws://127.0.0.1:8080/multinode");
            //this.contact.onopen = () => contact.send("allo");
            
            this.contact.onclose = function(evenement)
            {
                console.log("fermeture " + JSON.stringify(evenement));
            }
            
            this.contact.onmessage = function(evenement) 
            {
                console.log("message " + JSON.stringify(evenement));
                var message = JSON.parse(evenement.data);
                
                switch(message.etiquette)
                {
                    case "NOTIFICATION_CONNEXION":
                        multinode.apprendreConnexion(message.pseudonyme);
                    break;
                    case "NOTIFICATION_VARIABLE":
                        var variable = message.variable; 
                        console.log("variable recue " + variable.valeur);
                        multinode.recevoirVariable(variable);
                    break;
                    case "CONFIRMATION_CONNEXION":
                        multinode.confirmerConnexion(message.listePseudo);
                    break;
                }
                
                //console.debug("Message recu", message.valeur);
            };
        }
        catch(erreur)
        {
            console.log("erreur" + JSON.stringify(erreur));        
        }

        this.messageTransfertVariable = {etiquette:"TRANSFERT_VARIABLE"};
        this.messageDemandeAuthentification = {etiquette:"DEMANDE_AUTHENTIFICATION"};        
        
        this.posterVariableTextuelle = function(id, texte)
        {
            console.debug("MultiNode => posterVariableTextuelle()",texte);
            this.messageTransfertVariable.variable = new Variable("texte", id, texte);
            this.contact.send(JSON.stringify(this.messageTransfertVariable));
        }

        this.posterVariableNumerique = function(id, nombre)
        {
            console.debug("MultiNode => posterVariableNumerique()",nombre);
            this.messageTransfertVariable.variable = new Variable("texte", id, texte);
            this.contact.send(JSON.stringify(this.messageTransfertVariable));
        }
        
        this.posterVariableBooleenne = function(id, booleen)
        {
            console.debug("MultiNode => posterVariableBooleenne()",booleen);
            this.messageTransfertVariable.variable = new Variable("texte", id, texte);
            this.contact.send(JSON.stringify(this.messageTransfertVariable));
        }
        
        this.demanderAuthentification = function(pseudonyme)
        {
            console.debug("MultiNode => demanderAuthentification()",pseudonyme);
            this.messageDemandeAuthentification.pseudonyme = pseudonyme;
            this.contact.send(JSON.stringify(this.messageDemandeAuthentification));
            
        }

        // messages recus
        this.messageNotificationConnexion = {etiquette:"NOTIFICATION_CONNEXION"};
        this.messageNotificationVariable = {etiquette:"NOTIFICATION_VARIABLE"};
        this.messageConfirmationConnexion = {etiquette:"CONFIRMATION_CONNEXION"};

        // fonction a redefinir
        this.recevoirVariable = function(variable)
        {
            
            
        }
        
        this.apprendreConnexion = function(pseudonyme)
        {
            
        }
        
        this.confirmerConnexion = function(participants)
        {
            
        }
    }
 
