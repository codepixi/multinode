import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import org.glassfish.grizzly.websockets.WebSocket;
import org.glassfish.grizzly.websockets.WebSocketApplication;

import com.google.gson.Gson;

// https://github.com/javaee/grizzly/blob/master/modules/websockets/src/main/java/org/glassfish/grizzly/websockets/WebSocketApplication.java
	public class ServeurJeu extends WebSocketApplication implements Runnable{
				
		//protected final List<WebSocket> sockets = new ArrayList<WebSocket>();
		protected final List<Joueur> listeJoueurs = new ArrayList<Joueur>();
		protected SalleDeJeu salleDeJeu = new SalleDeJeu();
		protected Gson parseur = new Gson();
		
		@Override
	    public void onConnect(WebSocket socket) {
	    	//super.onConnect(socket); //sockets.add(socket);
			this.listeJoueurs.add(new Joueur(socket));
			System.out.println("Connexion");
	    }
		
		@Override
		public void onMessage(WebSocket socket, String messageJson) {
			super.onMessage(socket, messageJson);

			System.out.println("onMessage : " + messageJson);
			
			Message message = parseur.fromJson(messageJson, Message.class);
			switch(message.getEtiquette())
			{
				case "TRANSFERT_VARIABLE":
					this.recevoirVariable(messageJson);
				break;
			}
		}
		
		public void recevoirVariable(String messageJson)
		{
			
			Variable variable = parseur.fromJson(messageJson, Message.TransfertVariable.class).getVariable();
			//Variable variable = parseur.fromJson(message, Variable.class);
			System.out.println("Variable : " + variable.getCle() + " = " + variable.getValeur());
			
			this.salleDeJeu.enregistrerVariable(variable);
			for(Joueur joueur : listeJoueurs) {
				joueur.connexion.send(parseur.toJson(variable));
			}	
		}
		
		protected boolean actif = false;
		protected ExecutorService coordonnateur;
		protected ExecutorService secretaire;
	    public void start() {
	        actif = true;
	        coordonnateur = Executors.newSingleThreadExecutor();
	        coordonnateur.submit(this);
	        ExecutorService secretaire = Executors.newFixedThreadPool(10);
	    }
		@Override
		public void run() {

			while(this.actif)
			{
                try {
					Thread.sleep(20);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
			
		}
		
	}
