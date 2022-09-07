public class App {
    public static void main(String[] args) throws Exception {
        String str = "123";
    	
    	printSub(str, "", 0);
    }

    static void printSub(String str, String curr, int index)
	{
		if(index == str.length())
		{
			System.out.print(curr+" ");
			return;
		}

		printSub(str, curr, index + 1);
		printSub(str, curr+str.charAt(index), index + 1);
	}
}
