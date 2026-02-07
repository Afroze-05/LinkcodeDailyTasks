#include <stdio.h>

int main() {
    int arr[10];
    int i;
    int max, secondMax;

    // Input 10 elements
    printf("Enter 10 elements:\n");
    for (i = 0; i < 10; i++) {
        scanf("%d", &arr[i]);
    }

    // Initialize
    max = secondMax = arr[0];

    // Find largest and second largest
    for (i = 1; i < 10; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] != max) {
            secondMax = arr[i];
        }
    }

    printf("Second greatest number is: %d\n", secondMax);

    return 0;
}