///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE

let pizza = {
    name: 'deepdish',
     price: 25,
    category: 'Chicago style deep dish',
     popularity: 100,
    rating :49,
    tags: ["pizza is amazing", 'top 10', 'delicious', 'vegan', 'beyond meat']
}
console.log(pizza)


//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

console.log(pizza.popularity)


/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE

console.log(pizza.tags)

let key = 'tags'
console.log(pizza[key])

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE PRICE IS 25

let newPrice = pizza.price

console.log(newPrice)


/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

let newCategory = pizza.category
console.log(newCategory)

//CODE HERE


//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE
//each one is a sep obj - so we need 5 differe t


const foodArr = [ {
    name: 'deepdish',
     price: 12, //
    category: 'Chicago style deep dish',
     popularity: 40, //
    rating :98, //
    tags: ["chicago", 'greasy', 'foldable', 'high protein'] //
} ,
{
    name: 'thin crust',
     price: 14, //
    category: 'Chicago style deep dish',
     popularity: 32, //
    rating :50, //
    tags: ["NY", 'thin', 'foldable', 'saucy', 'cheesy'] //
},
{
    name: 'sausage',
     price: 16, //
    category: 'California style',
     popularity: 32, //
    rating :60, //
    tags: ["California", 'greasy', 'hawaiian', 'pineapple', 'cheesy'] //
},
{
    name: 'cheese',
     price: 18, //
    category: 'Miami style deep dish',
     popularity: 32, //
    rating :70, //
    tags: ["Miami", 'extra sausage', 'foldable', 'high protein'] //
},
{
    name: 'pepperoni',
     price: 20, //
    category: 'Chicago style deep dish',
     popularity: 32, //
    rating :80, //
    tags: ["TX", 'greasy', 'foldable', 'big', 'cheesy'] //
}]

console.log(foodArr)


//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.

    // we want to see if the tags INCLUDE cheesy
*/


const foodWithCheesy = foodArr.filter(function(elem){
    return elem.tags.includes('cheesy')
})
console.log(foodWithCheesy)

//CODE HERE

// const filteredFood = foodArr.filter = (elem)=> {
//     return elem.tags.includes('foldable')
// }
// console.log(filteredFoods)



//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE
// filter the 3 prop

const filteredByProperty = (property, number, type) => {
    const filterArray = foodArr.filter(pizza) => {
        if 
    }
}






// const foodWithCheesy = foodArr.filter(function(elem){
//     return elem.tags.includes('cheesy')
// })
// console.log(foodWithCheesy)
/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE