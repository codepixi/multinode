import java.util.ArrayList;
import java.util.List;

public class Message
{
	protected String etiquette;
	protected String detail;
	
	public String getEtiquette() {
		return etiquette;
	}
	public void setEtiquette(String etiquette) {
		this.etiquette = etiquette;
	}
	public String getDetail() {
		return detail;
	}
	public void setDetail(String detail) {
		this.detail = detail;
	}

	public class TransfertVariable extends Message
	{
		public TransfertVariable()
		{
			this.etiquette = "TRANSFERT_VARIABLE";
		}
		
		protected Variable variable = null;
		
		public Variable getVariable() {
			return variable;
		}

		public void setVariable(Variable variable) {
			this.variable = variable;
		}
	}
	
	public class DemandeAuthentification extends Message
	{
		public DemandeAuthentification()
		{
			this.etiquette = "DEMANDE_AUTHENTIFICATION";
		}
		
		protected String pseudonyme;

		public String getPseudonyme() {
			return pseudonyme;
		}

		public void setPseudonyme(String pseudonyme) {
			this.pseudonyme = pseudonyme;
		}
	}
	
	/// MESSAGES VERS LE CLIENT
	
	static public class NotificationAuthentification extends Message
	{
		public NotificationAuthentification() 
		{
			this.etiquette = "NOTIFICATION_AUTHENTIFICATION";
		}
		
		protected String pseudonyme;

		public String getPseudonyme() {
			return pseudonyme;
		}

		public void setPseudonyme(String pseudonyme) {
			this.pseudonyme = pseudonyme;
		}
		
	}
	
	static public class NotificationVariable extends Message
	{
		public NotificationVariable() 
		{
			this.etiquette = "NOTIFICATION_VARIABLE";
		}
		
		public NotificationVariable(Variable variable) 
		{
			this.etiquette = "NOTIFICATION_VARIABLE";
			this.variable = variable;
		}
		
		protected Variable variable = null;
		
		public Variable getVariable() {
			return variable;
		}

		public void setVariable(Variable variable) {
			this.variable = variable;
		}
		
	}
	
	static public class ConfirmationAuthentification extends Message
	{
		public ConfirmationAuthentification() 
		{
			this.etiquette = "CONFIRMATION_AUTHENTIFICATION";
		}
		
		protected String pseudonyme;
		protected List<String> listePseudo = new ArrayList<String>();

		public List<String> getListePseudo() {
			return listePseudo;
		}

		public void setListePseudo(List<String> listePseudo) {
			this.listePseudo = listePseudo;
		}

		public String getPseudonyme() {
			return pseudonyme;
		}

		public void setPseudonyme(String pseudonyme) {
			this.pseudonyme = pseudonyme;
		}
		
	}
}
		
