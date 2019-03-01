import org.glassfish.grizzly.websockets.WebSocket;

public class Joueur {
	
	public WebSocket connexion;
	public String pseudonyme;
		
	public Joueur(WebSocket connexion)
	{
		this.connexion = connexion;
	}
	
}
