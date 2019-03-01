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
		protected String nom;

		public String getNom() {
			return nom;
		}

		public void setNom(String nom) {
			this.nom = nom;
		}
		
	}

}
		
