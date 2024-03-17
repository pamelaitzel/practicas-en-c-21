#include <stdio.h>
#include <string.h>

int main() {
    char cadena1[20] = "Hola ";
    char cadena2[] = "mundo";
    strcat(cadena1, cadena2);
    printf("%s\n", cadena1); // Imprime "Hola mundo"
    printf("Longitud de la cadena: %lu\n", strlen(cadena1));
    return 0;
}
