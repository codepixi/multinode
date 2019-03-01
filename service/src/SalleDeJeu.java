import java.util.HashMap;
import java.util.Map;

public class SalleDeJeu {
	
	// https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html
	Map<String, String> variables = null;
	
	public SalleDeJeu()
	{
		this.variables = new HashMap<String, String>();
	}
	
	public void enregistrerVariable(String cle, String valeur)
	{
		this.variables.put(cle, valeur);
	}

}
