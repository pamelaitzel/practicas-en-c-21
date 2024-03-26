#include <stdio.h>
#include <unistd.h>

int main() {
    // Ejemplo de uso de llamadas al sistema para crear un nuevo proceso
    pid_t pid = fork();

    if (pid == 0) {
        // Este es el proceso hijo
        printf("Hola, soy el proceso hijo\n");
    } else if (pid > 0) {
        // Este es el proceso padre
        printf("Hola, soy el proceso padre\n");
    } else {
        // Error al crear el proceso hijo
        fprintf(stderr, "Error al crear el proceso hijo\n");
        return 1;
    }

    return 0;
}
