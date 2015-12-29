/**
 * emojiRegex
 * Returns the emoji regex value.
 *
 * @name emojiRegex
 * @function
 * @return {RegExp} The emoji regex.
 */
module.exports = function emojiRegex () {
    return /:([a-z0-9_\+\-]+):/g;
};
