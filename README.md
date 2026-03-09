<!-- NOTE : I'm not best in english. So, ignore my grammatical errors -->

<!-- 1️⃣ What is the difference between var, let, and const? -->
In JavaScript, var, let & const all are stands for variables declaration. But they have different behavior in scope, reassignment, redeclare and hoisting.

# var (Old method)
This is function scoped based, not block scoped. It ignores blocks like {}, if, for etc.
Can be reassigned and also be redeclared. Hoisted in the top and initialized as undefined. That's why it causes bugs. So, we'll always avoid to use var.

# let (modern method)
This is a block scoped. It follows and respect {}, for, if etc. Can be reassigned but not be redeclared in same a scope. Hoisted but not initialized. It's exist in temporal dead zone TDZ.

# const (modern method)
This is also a block scoped. It follows {}, if, for, function {} etc. Can't be reassigned and can't be redeclared.
Histed but not initialized but exist in TDZ.



<!-- 2️⃣ What is the spread operator (...)? -->
The spread operator is a syntax, that can spread means separate values as differently from array, object or from iterable data. This operator is commonly used to copy or clone any array or object data. Without spread operator(...), it will only take values/data as a reference only. If the reference data changed then the main array or object will also changed. It's also used to merge two or more array and objects.



<!-- 3️⃣ What is the difference between map(), filter(), and forEach()? -->
Map, filter, forEach both are used to loop on arrays. But those main difference are return value and use case.

# map()
It's work with all elements of a array. It returns values with a new array. Don't change original array. It's calculate all the single value by looping and returns in a new array. I's commonly used to UI rendering by literal template.

# filter()
It's return elements by checking condition. If condition comes true then, it's return new array with those values who fall under the condition. It can return multiple values in a array. It's also can be used in array of objects.

# forEach()
It's only for array looping. It's don't return any new array. And it's a shorter syntax rather than for loop. And it used arrow function also. Commonly used for API call, Dom manipulation etc.



<!-- 4️⃣ What is an arrow function? -->
It's a syntax of ES6 for writing functions shorter. It convert a normal function to shorter, cleaner and more readable. 

Ex : Normal Function
function add(a, b) {
  return a + b;
}

Ex : Arrow Function
const add = (a, b) => a + b;

In arrow function, If there is only one parameter then the () is optional. If there are multiple parameters then must have to use (). And if there need to code multiple line then, must need a block {}.



<!-- 5️⃣ What are template literals? -->
It is a modern way of writing strings after comes ES6 update. It used backticks (` `) & by this, we can direct add variable data as a string with expressions and multi line text/strings. We can write variable data or expression by using ${}. And also we can call any function from the inside of ${}. It's most powerful method. It's very common to Dom manipulation, API data rendering. And by this, we can easily create html elements dynamically.


