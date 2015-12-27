const regexEmoji = require("../lib")
    , matchAll = require("match-all")
    ;

console.log(regexEmoji);
// => /:([a-z0-9_]+):/g

console.log(matchAll(":house: sweet :house_with_garden:! :100: :clock1:", regexEmoji).toArray());
// => [ "house", "house_with_garden", "100", "clock1" ]
