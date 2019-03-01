    function Variable(type, cle, valeur)
    {
        this.type = type;
        this.cle = cle;
        this.valeur = valeur;        
    }
    
    function MultiNode()
    {
        
        this.contact;
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
                console.log("variable recue " + message.valeur);
                //console.debug("Message recu", message.valeur);
            };
        }
        catch(erreur)
        {
            console.log("erreur" + JSON.stringify(erreur));        
        }
                        
        this.posterVariableTextuelle = function(id, texte)
        {
            console.log("MultiNode => posterVariableTextuelle()");
            var variable = new Variable("texte", id, texte);
            this.contact.send(JSON.stringify(variable));
        }

        this.posterVariableNumerique = function(id, nombre)
        {
            console.log("MultiNode => posterVariableNumerique()");
            var variable = new Variable("nombre", id, texte);
            this.contact.send(JSON.stringify(variable));
        }
        
        this.posterVariableBooleenne = function(id, nombre)
        {
            console.log("MultiNode => posterVariableBooleenne()");
            var variable = new Variable("bool", id, texte);
            this.contact.send(JSON.stringify(variable));
        }
        
        this.recevoirVariable = function()
        {
            
            
        }
    
    }
 
