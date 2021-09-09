import java.util.*;

public class Main {
    public static void main(String[] args) {
        int n;
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        System.out.println(n);
        for(int i=0; i<n; i++) {
            for(int j=0; j<2*n; j++) {
                if(i>j) {
                    System.out.print(" ");   
                }
                else if(2*n-2-i<j) {
                    System.out.print("\n");
                    break;
                }
                else {
                    System.out.print("*");
                }
            }
        }
    }
}
