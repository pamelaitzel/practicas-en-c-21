#include <stdio.h>
#include <stdlib.h>

int main() {
    int filas, columnas;
    printf("Ingrese el número de filas y columnas de la matriz: ");
    scanf("%d %d", &filas, &columnas);
    
    int **matriz = (int **)malloc(filas * sizeof(int *));
    for (int i = 0; i < filas; i++) {
        matriz[i] = (int *)malloc(columnas * sizeof(int));
    }
    
    // Operaciones con la matriz
    
    for (int i = 0; i < filas; i++) {
        free(matriz[i]);
    }
    free(matriz);
    
    return 0;
}
