#include <stdio.h>

void convert(int n);

int main(){
	int n;
	printf("Digite um numero inteiro: ");
	scanf("%d", &n);
	printf("Resultado: ");
	convert(n);
	
	
	scanf("%d", &n);
	return 0;
}

void convert(int n){
	int x;
	if(n/2 != 0){
		x = n/2;
		convert(x);
		printf("%d", n%2);
	}
	else{
		printf("%d", n%2);
	}
}
