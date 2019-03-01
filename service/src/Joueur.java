import org.glassfish.grizzly.websockets.WebSocket;
import org.glassfish.grizzly.websockets.WebSocketAdapter;

public class Joueur {
	
	public WebSocket connexion;
	public String pseudonyme;
		
	public Joueur(WebSocket connexion)
	{
		this.connexion = connexion;
		this.connexion.add(new WebSocketAdapter() {

			@Override
			public void onMessage(WebSocket arg0, String arg1) 
			{
				
			}

		});
		
	}
	
}

//import org.glassfish.grizzly.websockets.WebSocketListener;
//			@Override
//public void onClose(WebSocket arg0, DataFrame arg1) {}
//public void onConnect(WebSocket arg0) {}
//public void onFragment(WebSocket arg0, String arg1, boolean arg2) {}
//public void onFragment(WebSocket arg0, byte[] arg1, boolean arg2) {}
//public void onMessage(WebSocket arg0, byte[] arg1) {}
//public void onPing(WebSocket arg0, byte[] arg1) {}
//public void onPong(WebSocket arg0, byte[] arg1) {}
