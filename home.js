///////////////////////////////////////////////
///////////////////HOME.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    helps with some functionality on the home 
    page of the restaurant's website.
*/


//As I went through this, names started to change because I was doing them and then redoing them. As I go through, when one is correct, I am just going to rewrite it with the correct name.


//////////////////PROBLEM 1////////////////////
/* 
    Write an *arrow* function called `greetUser`
    It should have one parameter, `username`
    The function should return a string that says: 
    'Welcome back, [USERNAME]'
    Where USERNAME is the `username` arguement sent in

    For example, if called with `Andrew` as the 
    argument, `greetUser` should return the string:
    'Welcome back, Andrew'
*/

//CODE HERE




const greetUser = (userName) => {
    console.log(`Welcome back, ${userName}!`)
}

greetUser('Andrew')

//This did get us to our destination however it specifically asked for a return statement so the correct way to set it up would have been...


const greetUser1 = (username) => {
    return `Welcome back, ${username}!`
}
    console.log(greetUser1('Andrew'))



//////////////////PROBLEM 2////////////////////
/* 
    Below is an array of zip codes that are in
    the restaurant's delivery zone. 

    Write a function called `canWeDeliver` that
    takes in one argument, `zipCode`.

    If the zip code passed in is in the array,
    return a string letting the user know they
    are eligible for delivery. If they are not, 
    return a string letting them know that. 

    For example:
    canWeDeliver(84606) 
        // `Sorry, we can't deliver to that address`
    canWeDeliver(85205) 
        // `You're in our delivery zone!`
*/

const deliveryAreaZipCodes1 = [85205, 85204, 85203, 85213, 85206]



// const canWeDeliver = (zipcode) => {
//     if (zipcode === deliveryAreaZipCodes1){
//         // return "You're in our delivery zone!"deliveryAreaZipCodes1
//         console.log("You're in our delivery zone!")
//     } else if (console.log("Sorry, we can't deliver to that address") {}
//         // // return "Sorry, we can't deliver to that address"
//         // console.log("Sorry, we can't deliver to that address")
//     }


// canWeDeliver(85205)

const canWeDeliver = (zipcode) => {
    if (deliveryAreaZipCodes1.includes(zipcode)){
        console.log("You're in our delivery zone!")
    } else {
        console.log("Sorry, we can't deliver to that address")
        // console.log("Sorry, we can't deliver to that address")
    }
}

canWeDeliver(62301)
canWeDeliver(85206)


//Same as above where the execution was correct however I did not return the value rather I console.logged it. 

console.log('===================')

const canWeDeliver1 = (zipcodes) => {
    if (deliveryAreaZipCodes1.includes(zipcodes)){
        return "You're in my delivery zone!"
    } else {
        return "Sorry, we can't deliver to that address"
    }
}
console.log(canWeDeliver1(62301))
console.log(canWeDeliver1(85206))



console.log('===================')

// const canWeDeliver = (zipcode) => {
//     if (zipcode === deliveryAreaZipCodes) {
//         console.log("You're in our delivery area!")
//     } else {
//         console.log("Sorry, we can't deliver to that address")
//     }
// }

// canWeDeliver(85205)

// const deliveryAreaZipCodes1 = [85205, 85204, 85203, 85213, 85206]

// let canWeDeliver = (zipcode) => {
// for (let i = 0; i < deliveryAreaZipCodes1.length; i++){
//     if (zipcode = deliveryAreaZipCodes1[i]) {
//         return "You're in our delivery zone!"
//     }
  
//     }
//     return "Sorry, we can't deliver to that address"
// }

// zipcode(85201)

/* 
    Problem 2 Continued

    Now you're going to rewrite your function.

    If you wrote `canWeDeliver` using a loop of
    some kind, write a new function (`canWeDeliverTwo`)
    below, using the `includes` array method. 
    Look it up on MDN if you're not sure how to use 
    it. 

    If you already used the `includes` method, 
    write a new function using some sort of 
    loop (for loop, higher order array method).
    Name your new function `canWeDeliverTwo`.
*/

// CODE HERE


// const deliveryAreaZipCodes1 = [85205, 85204, 85203, 85213, 85206]

let canWeDeliverTwo = (zipcode1) => {
for (let i = 0; i < deliveryAreaZipCodes1.length; i++){
    if (zipcode1 === deliveryAreaZipCodes1[i]) {
        return "You're in our delivery zone!"
    }
    }
    return "Sorry we can't deliver to that address"
}

console.log(canWeDeliverTwo(62301))
console.log(canWeDeliverTwo(85206))

//if (deliveryAreaZipCodes1.includes(zipcode)){


//////////////////PROBLEM 3////////////////////
/* 
    Below is an array of objects that have some
    information about a couple of deals that are
    available at the restaurant currently. 

    You are going to access the object's properties 
    and change some values. Don't edit the array 
    directly, let's use the `replace` method.

    Read on for more instructions.
*/

const deals = [
    {
        title: '15% Off!', 
        desc: 'Applied to your entire order when you spend $30 or more'
    }, 
    {
        title: 'Free Kids Meal with 2 Regular Entrees', 
        desc: '   This deal lasts until the end of March! '
    }
]

/*
    The owner has decided to take the 15% off
    deal down to 10%.

    Reassign the value of the first deal's title
    to be itself, but use the `replace` method
    to replace the 15 with a 10.
*/

//CODE HERE

// YOU CAN SEE HERE THAT I WAS WORKING THROUGH IT. I HAD THE RIGHT IDEA BUT I COULDN'T GET IT TO WORK AND NOW I SEE WHY. 

// const discount = deals.findIndex( (deal) => deal.title === '15% Off!') <<FOUND THE INDEX
// console.log(discount) 

//Idk << HAHA :) 

// deals[0].title === deals[0].title.replace('15', '10')

//console.log(deals) 

deals[0].title = deals[0].title.replace('15', '10')
console.log(deals[0].title)

//Honestly I set it up correctly but I messed up on 2 things. 1.) I did deep equals (===) instead of just one (=) and then I didn't console.log it correctly. If I would have gotten the ===/= correct, I know I would have been able to console log it correctly. 

const change = deals[0].title.replace('15', '10')
console.log(change)

//assigning it to a variable first  


/*
    The restaurant is going to continue its
    family deal for another month. 

    Reassign the value of the second deal's desc
    to be itself, but use the `replace` method
    to replace the word March with April.

    You should also make sure that there is no
    whitespace in this string, since it seems
    to be displaying wrong on the live site.
*/

//The title is at index 0, and the desc is at index 1. We are wanting to REPLACE March with April and then trim out all the white space inside of the desc because you can see all the space between '     This'. 

deals[1].desc = deals[1].desc.trim().replace('March', 'April')
console.log(deals[1])