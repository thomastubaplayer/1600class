// < less than;
// >greater than;
// <=less than or equal to;
// => greater than or equal to;
if (10<= 20) {//this is true;
    console.log("10 is less than 20");
}

if (22 >= 10){
    console.log("22 is greater than 10");
}

// = assign to variable;
// == compare values;
// != not equal;
var myPassword = "ou812";
if (1==1){
    console.log("one is equal to one");
};
if (5 != 1){
    console.log("five is not equal to one");
};

// + add;
// - subtract;
// += add to current values;
// -= subtract from current values;
// * mulitply;
// / divide;
var apples = 10+5;
apples += apples;
apples - 10;
apples -= apples;
var oranges = 10*10;
oranges /= 5;

// ++ increment (or add one to);
// -- degrement (or subtract one from);
oranges++;
oranges--;

// && and; 
// || or;
if (apples >= 0 && oranges >= 2) {
    console.log("apples");
    console.log("oranges");
};
if (apples < 0 || oranges >= 0) {
    console.log("One statement was true");
};