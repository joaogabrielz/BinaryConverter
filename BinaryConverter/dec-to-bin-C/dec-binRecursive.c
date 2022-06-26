#include <stdio.h>

int convert(int n);

int main(){
	int n, bin;
	printf("Digite um numero inteiro: ");
	scanf("%d", &n);
	bin = convert(n);
	printf("Binario: %d", bin);
		
	scanf("%d", &n);
	return 0;
}

int convert(int n){
	if(n < 2){
		return n;
	}
	else{
		return (10* convert(n/2)) + n%2;
	}
}
