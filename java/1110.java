import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
    	
    	Scanner sc = new Scanner(System.in);
    	
    	int N = sc.nextInt();
    	int oriN = N;
    	int count = 0;
    	
    	while(true) {
    		count++;
    		int num1 = N / 10;
    		int num2 = N % 10;
    		
    		int newNum = (num1 + num2) % 10 + num2 * 10;
    		if(newNum == oriN)
    			break;
    		N = newNum;
    	}
    	
    	System.out.println(count);
    }
}
