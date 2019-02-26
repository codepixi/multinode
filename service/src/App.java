import java.io.IOException;
import org.glassfish.grizzly.http.server.HttpServer;
import org.glassfish.grizzly.http.server.NetworkListener;
import org.glassfish.grizzly.websockets.WebSocketAddOn;
import org.glassfish.grizzly.websockets.WebSocketEngine;

public class App {

	// https://github.com/javaee/grizzly/blob/master/modules/websockets/src/main/java/org/glassfish/grizzly/websockets/WebSocketEngine.java
	@SuppressWarnings("deprecation")
	public App() {
		//HttpServer serveurWeb = HttpServer.createSimpleServer("multinode", 8080);
	    HttpServer serveurWeb = new HttpServer();
	    serveurWeb.addListener(new NetworkListener("multinode", "127.0.0.1", 8080));
		serveurWeb.getListener("multinode").registerAddOn(new WebSocketAddOn());		
		
		ServeurJeu serveurJeu = new ServeurJeu();		
		WebSocketEngine.getEngine().register("", "/multinode", serveurJeu);
		
		try {
			serveurWeb.start();
			serveurJeu.start();
			//System.in.read();
			//serveurWeb.stop();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public static void main(String[] args) {
		@SuppressWarnings("unused")
		App app = new App();
	}
	

}
