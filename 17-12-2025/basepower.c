#include <stdio.h>

int main() {
    int base, power, i;
    long long result = 1;

    printf("Enter base: ");
    scanf("%d", &base);

    printf("Enter power: ");
    scanf("%d", &power);

    for (i = 1; i <= power; i++) {
        result = result * base;
    }

    printf("Result = %lld\n", result);

    return 0;
}