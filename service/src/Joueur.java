import org.glassfish.grizzly.websockets.WebSocket;

public class Joueur {
	
	public WebSocket connexion;
		
	public Joueur(WebSocket connexion)
	{
		this.connexion = connexion;
	}
	
}
