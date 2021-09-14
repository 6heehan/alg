import java.io.*;

public class Main {
    public static void main(String[] args) {
    	BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    	BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    	StringBuilder sb = new StringBuilder("");
    	try {
    		String num = br.readLine();
    		int n = Integer.valueOf(num);
    		for(int i=0;i<n;i++) {
    			String test = br.readLine();
				String test1[] = test.split(" ");
			
				int num1 = Integer.parseInt(test1[0]); 
				int num2 = Integer.parseInt(test1[1]);

				String sum = String.valueOf(num1+num2);
				sb.append(sum);
				sb.append("\n");
				
				//bw.write(sum);
				//bw.flush();
    		}
    		System.out.print(sb);
			//bw.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	
    }
}
