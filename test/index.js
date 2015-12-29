const tester = require("tester")
    , match = require("match-all")
    , regexEmoji = require("../lib")
    , emojis = require("emojilib").keys
    ;

tester.describe("run the tests", test => {
    var s = "Hello _World_ and _Mars_";
    test.it("match all", () => {
        test.expect(match(":house: sweet :house_with_garden:! :100: :clock1:", regexEmoji()).toArray()).toEqual([ "house", "house_with_garden", "100", "clock1" ]);
    });
    test.should("work with all emojis", () => {
        emojis.forEach(c => {
            test.expect(match(`:${c}:`, regexEmoji()).toArray()).toEqual([c]);
        });
    });
    test.should("not be equal", () => {
        test.expect(regexEmoji()).toNotBe(regexEmoji());
    });
});
