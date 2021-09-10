package com.tmax.test;

import java.io.*;

public class Main {
    public static void main(String[] args) {
    	BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    	BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    	
    	try {
			String test = br.readLine();
			String test1[] = test.split(" ");
			
			int num1 = Integer.parseInt(test1[0]); 
			int num2 = Integer.parseInt(test1[1]);
			System.out.println(num1);
			System.out.println(num2);
			String sum = String.valueOf(num1+num2);
			
			bw.write(sum);
			
			bw.flush();
			bw.close();
			//System.out.print(test);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	
    }
}
