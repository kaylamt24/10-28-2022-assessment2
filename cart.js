///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, curr) => {
    return acc + curr.price
}, 0)

console.log(summedPrice)

// const summedPrice = (price) => {
//     return price.reduce(accu, curr) => accu + curr)
// }

// console.log(summedPrice(cart))


//I always try to type it out myself from beginning to end but I am going to start using the given part. 

//--------------a callback is writing a function inside of a function and passing it to the first function and as a parameter. 

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    return (cartTotal * (1 + tax)) - couponValue
}

console.log(calcFinalPrice(20, 4, .25))



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    Name - string
    phoneNumber - string
    address - string
    contactlessDelivery - Boolean
    textAlerts - Boolean
    internalNotes - array
    The information a rest would need is just the basics. Name, address, phone number and because of covid, whether or not they want contactless delivery. Ontop of that you could add a boolean on whether or not they opted in for text alerts on their delivery (I do this for Pizza Hut because where is my pizza? It's been 7 minutes)
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    firstName: 'Kayla',
    lastName: 'Mountain',
    address: '123 Sesame St. San Antonio, TX 78217',
    phoneNumber: '217-617-9207',
    contactlessDelivery: false,
    textAlets: true,
    internalNotes: ['has dog', 'no outside lights', 'tips well' ]
}
