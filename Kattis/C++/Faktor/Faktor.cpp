#include <iostream>

using namespace std;

int main()
{
    int planPub;            // Planned to Publish
    int req;                // Impact Factor Required

    int out;                // Output

    cin >> planPub >> req;  // Waits for input from Kattis; Planned first then Requirements

    // Math
    out = planPub/req;


    cout << out;            // Outputs answer (The amount of scientists needed to bribe)
}