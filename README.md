# TakeMeTour's Job Quest 2020 Edition

## Basic JavaScript/TypeScript + Algorithm

We would like to test your basic knowledge on writing JavaScript or TypeScript, plus we also want to test your algorithm skill a little bit.

What you need to do is write the code that solve each question and put it in folder `basic-js-ts`. We will run your code with **Node.js 12**, so check your fancy feature before using it!

**Noted that all questions on this part need to be implemented without using any external library like `lodash`**

1. **Fibonacci Sequence**: Write a function `fib` that return the value of n-th order of fibonacci sequence.

In mathematics, the Fibonacci numbers are the numbers in the following integer sequence, called the Fibonacci sequence, and characterized by the fact that every number after the first two is the sum of the two preceding ones:

```
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
```

**Example**

```javascript
> fib(1)
1

> fib(3)
2

> fib(12)
144
```

2. **Array shift**: Write a function `shift` that shifts the elements of array to left or right by n elements in an infinite loop.

The function receives 3 parameters, 1st is an array, 2nd is the direction ('left' or 'right'), 3rd is the number of elements which will be shifted. For example,

**Example**

```javascript
> shift(['john', 'jane', 'sarah', 'alex'], 'left', 2)
['sarah', 'alex', 'john', 'jane']

> shift([1, 2, 3, 4 ,5], 'right', 3)
[3, 4, 5, 1, 2]
```

3. **Second max**: Write a function `secondMax` that receive an array of number. The function will return the second maximum value of the array. If there is no second max, return max instead. If an array is empty, throw and error.

**Example**

```javascript
> secondMax([2, 3, 4, 5])
4

> secondMax([9, 2, 21, 21])
9

> secondMax([4, 4, 4, 4])
4

> secondMax([4123])
4123

> secondMax([])
Error!
```

4. **FizzBuzz...But**: You may heard `FizzBuzz` task. Here we have the same rule. You will write a function `fizzBuzz` that receive a single parameter it will return the value base on these rule.

- If the input is divisable by 3, return 'Fizz'
- If the input is divisable by 5, return 'Buzz'
- If the input is divisable by both 3 and 5, return 'FizzBuzz'

**BUT we're not allow you to use `if/else` statement.** If there is any `if` or `else` word in your code. I will consider this question with 0 score :(


**Example**

```javascript
> fizzBuzz(21)
Fizz

> fizzBuzz(25)
Buzz

> fizzBuzz(45)
FizzBuzz
```


### Front-end Questions

1. Explain the what's similar & difference between `cookie` / `localStorage` / `sessionStorage`.

ทั้งสามตัวเป็นการเก็บข้อมูลของ user ผ่าน web browser เช่นการเก็บ access token ใช้ส่งไปกับเวลาที่รีเควส server ให้ server ทราบว่ารีเควสที่ส่งมาเป็นของใคร
cookie กับ localStorage ข้อมูลจะหายไปก็ต่อเมื่อเราทำการเคลียร์หรือกำหนดเวลาหมดอายุ
sessionStorage ข้อมูลจะหายไปตอนปิด web browser หรือกำหนดเวลาหมดอายุ

2. Today React have hooks. Do we still need a class component? If your answer is yes then which case that we still need to use class component.

ตอนนี้ใช้ function companent

3. Breifly describe how *Virtual DOM* works.

เป็นการสร้างตัวแทน DOM ขึ้นมาไว้ใน memmory เมื่อมีการทำอะไรกับ ui ก็จะนำข้อมูลมาเปรียบเทียบกับตัวที่เก็บไว้ใน memmory ว่ามีแค่ส่วนไหนบ้างที่ต้องทำกา render ใหม่ ไม่ต้อง render ทั้งหมด


4. Consider this React's components tree

```
Apps > ComponentA > ComponentB > ComponentC > ComponentD > ComponentE
```

If we have a state at `Apps` component, and `ComponentE` component want to access that state value. How do you implements this?

ใช้ Context API

5. What different between using `relative` / `absolute` / `fixed` to position the element.
relative จะแสดงผลต่อจากจุดที่มันอยู่
absolute แสดงผลอิสระ จะอยู่ตรงไหนก็ได้ภายใต้ element ที่ครอบตัวมันอยู่
fixed จะอ้างอิงตำแหน่งตัวมันเองจาก web browser จะไม่ขยับตามเวลาเราเลื่อน scroll bar

6. Explain the different between using `callback` / `Promise` / `async await`. When to use and when not to.
javascript เป็น asynchronous programming
ทั้งสามตัวเราจะใช้เมื่อเราต้องการให้ฟังก์ชั่นก่อนหน้าทำงานให้เสร็จก่อนค่อยมาเรียกตัวมัน
callback คือการส่งฟังก์ชั่นให้ไปเป็นพารามิเตอร์ของอีกฟังก์ชั่นหนึ่ง ไม่ควรใช้เมื่อเราต้องเรียกซ้อนกันไปเยอะๆทำให้เราไล่โค๊ดยาก
Promise จะเก็บค่าก่อนหน้าที่เราต้องการให้เสร็จก่อนไว้ใน promise แล้วเราค่อยใช้ then() ค่านั้นออกมาจาก promise อีกที เราสามารถ then ต่อๆกันได้ แต่ต่อหลังจากดักจับ catch ไม่ได้ ถ้าต่อกันมาเยอะๆเราจะไม่รู้ว่า error มาจากตัวไหน
async await  await ใช้ประกาศหน้าฟังก์ชั้นที่อยู่ใน async ฟังชั่น ให้หยุดทำงานจนกว่า async ฟังก์ชั่นจะทำงานเสร็จ ข้อดีคือโค๊ดดูง่าย สะอาดตา

