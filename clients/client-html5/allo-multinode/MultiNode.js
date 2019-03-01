    function Variable(type, cle, valeur)
    {
        this.type = type;
        this.cle = cle;
        this.valeur = valeur;        
    }
    
    function MultiNode()
    {
    
        try
        {
            this.contact = new WebSocket("ws://127.0.0.1:8080/multinode");
            //this.contact.onopen = () => contact.send("coucou");
            this.contact.onopen = () => this.posterVariableTexte("argent", "million");
            
            this.contact.onclose = function(evenement)
            {
                console.log("fermeture " + JSON.stringify(evenement));
            }
            
            this.contact.onmessage = function(evenement) 
            {
                console.log("message " + JSON.stringify(evenement));
                //console.debug("Message recu", evenement);
            };
        }
        catch(erreur)
        {
            console.log("erreur" + JSON.stringify(erreur));        
        }
        
        
        
        this.posterVariableTexte = function(id, texte)
        {
            var variable = new Variable("texte", id, texte);
            this.contact.send(JSON.stringify(variable));
        }

        
    
    }
 
