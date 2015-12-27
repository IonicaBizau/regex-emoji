# regex-emoji [![Support this project][donate-now]][paypal-donations]

A regex to match the :emoji: snippets in a string.

## Installation

```sh
$ npm i --save regex-emoji
```

## Example

```js
const regexEmoji = require("regex-emoji")
    , matchAll = require("match-all")
    ;

console.log(regexEmoji);
// => /:([a-z0-9_]+):/g

console.log(matchAll(":house: sweet :house_with_garden:! :100: :clock1:", regexEmoji).toArray());
// => [ "house", "house_with_garden", "100", "clock1" ]
```

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md