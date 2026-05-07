/* 1. Even & Odd Numbers (for + if)
Write a program that:

Prints numbers from 1 to 50
Checks each number:
Even → print "Even."
Odd → print "Odd."
Use for loop + if */


let n:number = 50;
let i:number = 0;

for(i = 0; i <= n; i++) {
    if(i%2 != 0) {
        console.log(`${i} is Odd !!!`);
    }
    else {
        console.log(`${i} is Even !!!`);
    }
}


/* 
0 is Even !!!
1 is Odd !!!
2 is Even !!!
3 is Odd !!!
4 is Even !!!
5 is Odd !!!
6 is Even !!!
7 is Odd !!!
8 is Even !!!
9 is Odd !!!
10 is Even !!!
11 is Odd !!!
12 is Even !!!
13 is Odd !!!
14 is Even !!!
15 is Odd !!!
16 is Even !!!
17 is Odd !!!
18 is Even !!!
19 is Odd !!!
20 is Even !!!
21 is Odd !!!
22 is Even !!!
23 is Odd !!!
24 is Even !!!
25 is Odd !!!
26 is Even !!!
27 is Odd !!!
28 is Even !!!
29 is Odd !!!
30 is Even !!!
31 is Odd !!!
32 is Even !!!
33 is Odd !!!
34 is Even !!!
35 is Odd !!!
36 is Even !!!
37 is Odd !!!
38 is Even !!!
39 is Odd !!!
40 is Even !!!
41 is Odd !!!
42 is Even !!!
43 is Odd !!!
44 is Even !!!
45 is Odd !!!
46 is Even !!!
47 is Odd !!!
48 is Even !!!
49 is Odd !!!
50 is Even !!!
*/