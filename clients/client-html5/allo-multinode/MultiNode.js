    function MultiNode()
    {
    
        try
        {
            var contact = new WebSocket("ws://127.0.0.1:8080/multinode");
            contact.onopen = () => contact.send("coucou");
            
            contact.onclose = function(evenement)
            {
                console.log("fermeture " + JSON.stringify(evenement));
            }
            
            contact.onmessage = function(evenement) 
            {
                console.log("message " + JSON.stringify(evenement));
                //console.debug("Message recu", evenement);
            };
        }
        catch(erreur)
        {
            console.log("erreur" + JSON.stringify(erreur));        
        }

        
    
    }
 
