    function Variable(type, cle, valeur)
    {
        this.type = type;
        this.cle = cle;
        this.valeur = valeur;
    }

    function MultiNode()
    {

        var multinode = this;

        var messageDemandeAuthentification;
        var messageTransfertVariable;

        var messageNotificationConnexion;
        var messageNotificationVariable;
        var messageConfirmationConnexion;

        function initialiser(){

            messageTransfertVariable = {etiquette:"TRANSFERT_VARIABLE"};
            messageDemandeAuthentification = {etiquette:"DEMANDE_AUTHENTIFICATION"};

            // messages recus
            messageNotificationConnexion = {etiquette:"NOTIFICATION_CONNEXION"};
            messageNotificationVariable = {etiquette:"NOTIFICATION_VARIABLE"};
            messageConfirmationConnexion = {etiquette:"CONFIRMATION_CONNEXION"};

        }

        function connecter(pseudonyme){

            try
            {

                multinode.contact = new WebSocket("ws://127.0.0.1:8080/multinode");
                //this.contact.onopen = () => contact.send("allo");

                multinode.contact.onopen = function(evenement)
                {
                    console.log("ouverture " + JSON.stringify(evenement));
                    messageDemandeAuthentification.pseudonyme = pseudonyme;
                    multinode.contact.send(JSON.stringify(messageDemandeAuthentification));
                }

                multinode.contact.onclose = function(evenement)
                {
                    console.log("fermeture " + JSON.stringify(evenement));
                }

                multinode.contact.onmessage = function(evenement)
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

        }

        this.posterVariableTextuelle = function(id, texte)
        {
            console.debug("MultiNode => posterVariableTextuelle()",texte);
            messageTransfertVariable.variable = new Variable("texte", id, texte);
            multinode.contact.send(JSON.stringify(messageTransfertVariable));
        }

        this.posterVariableNumerique = function(id, nombre)
        {
            console.debug("MultiNode => posterVariableNumerique()",nombre);
            messageTransfertVariable.variable = new Variable("numerique", id, nombre);
            multinode.contact.send(JSON.stringify(messageTransfertVariable));
        }

        this.posterVariableBooleenne = function(id, booleen)
        {
            console.debug("MultiNode => posterVariableBooleenne()",booleen);
            messageTransfertVariable.variable = new Variable("booleen", id, booleen);
            multinode.contact.send(JSON.stringify(messageTransfertVariable));
        }

        this.demanderAuthentification = function(pseudonyme)
        {
            console.debug("MultiNode => demanderAuthentification()",pseudonyme);

            connecter(pseudonyme);
        }

        // fonction a redefinir
        this.recevoirVariable = function(variable)
        {
        }

        this.apprendreConnexion = function(pseudonyme)
        {
        }

        this.confirmerConnexion = function(autresParticipants)
        {
        }

        initialiser();

    }
