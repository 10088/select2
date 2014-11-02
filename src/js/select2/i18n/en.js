define(function () {
  return {
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Please enter ' + remainingChars + ' or more character';

      if (remainingChars != 1) {
        message += 's';
      }

      return message;
    },
    noResults: function () {
      return 'No results found';
    }
  };
});
