/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */

package com.mycompany.puntouno;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
//Bibliotecas agregadas 
import java.io.*;
import java.math.*;
/**
 *
 */
public class Puntouno {

    public static void main(String[] args) throws IOException {
        	BufferedReader bufEntrada = new BufferedReader(new InputStreamReader(System.in));
		double aux;
		double b;
		int cifra[];
		int i;
		int k;
		int l;
		int prod;
		double z;
		cifra = new int[50];
		System.out.println("Escribir el numero entre cero y uno");
		z = Double.parseDouble(bufEntrada.readLine());
		System.out.println("Escribir la base a la cual desea convertir");
		b = Double.parseDouble(bufEntrada.readLine());
		System.out.println("Escribir la cantidad de veces que desea iterar");
		k = Integer.parseInt(bufEntrada.readLine());
		cifra[0] = 0;
		l = 1;
		for (i=2;i<=k;i++) {
			aux = z*b;
			prod = (int)Math.floor(aux + 0.000001);//Casteo y suma de un decimal poco significativo    
			z = aux-prod;
			cifra[i-1] = prod;
			l = l+1;
			if (z==0) {
				i = k;
			}
		}
                System.out.println("Numero final:");
		for (i=1;i<=l;i++) {
			System.out.println(" "+cifra[i-1]);
		}
    }
}
