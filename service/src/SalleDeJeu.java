import java.util.HashMap;
import java.util.Map;

public class SalleDeJeu {
	
	// https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html
	Map<String, Variable> variables = null;
	
	public SalleDeJeu()
	{
		this.variables = new HashMap<String, Variable>();
	}
	
	public void enregistrerVariable(Variable variable)
	{
		this.variables.put(variable.getCle(), variable);
	}

}
