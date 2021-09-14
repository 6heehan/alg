import java.io.*;

public class Main {
    public static void main(String[] args) {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        try{
            String input = br.readLine();
            String num[] = input.split(" ");
            int num1 = Integer.valueOf(num[0]);
            int num2 = Integer.valueOf(num[1]);
            
            if(num1 > num2) {
                System.out.print(">");
            }
            else if(num1 < num2) {
                System.out.print("<");
            }
            else {
                 System.out.print("==");
            }
        } catch(IOException e) {
            e.printStackTrace();
        }
    }
}
