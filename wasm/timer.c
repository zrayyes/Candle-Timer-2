#include <stdio.h>
#include <time.h>

int main()
{
    time_t rawtime;
    struct tm timeinfo;

    time(&rawtime);
    timeinfo = *localtime(&rawtime);
    printf("Time - %d:%d:%d \n", timeinfo.tm_hour,timeinfo.tm_min,timeinfo.tm_sec);
}