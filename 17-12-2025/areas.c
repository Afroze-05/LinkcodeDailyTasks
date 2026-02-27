#include <stdio.h>

float circleArea(float radius) {
    return 3.14 * radius * radius;
}
float triangleArea(float base, float height) {
    return 0.5 * base * height;
}
float rectangleArea(float length, float width, float height) {
    return length * width * height;
}

int main() {
    float r, b, h, l, w, ht;


    printf("Enter radius of circle: ");
    scanf("%f", &r);
    printf("Area of circle = %.2f\n", circleArea(r));


    printf("Enter base and height of triangle: ");
    scanf("%f %f", &b, &h);
    printf("Area of triangle = %.2f\n", triangleArea(b, h));

   
    printf("Enter length, width and height of rectangle: ");
    scanf("%f %f %f", &l, &w, &ht);
    printf("Area of rectangle = %.2f\n", rectangleArea(l, w, ht));

    return 0;
}