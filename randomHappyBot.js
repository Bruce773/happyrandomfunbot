$(document).ready(function() {
  var verbsArr = ["ran through", "ate", "smelled", "jumped", "sang to"];
  var adjectivesArr = [
    "blue",
    "flavorful",
    "spontaneous",
    "wildly energetic",
    "fluffy"
  ];
  const lyAdjectivesArr = [
    "unexpectedly",
    "amazingly",
    "strangely",
    "annoyingly",
    "trepidatiously"
  ];
  var articlesArr = ["a", "the"];
  var nounsArr = ["rainbow", "horse", "cloud", "car", "streetlight", "puppy"];
  var name = $("#name").text();

  const _randomVerb = function() {
    return verbsArr[Math.floor(Math.random() * verbsArr.length)];
  };

  const _randomAdjective = function() {
    return adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)];
  };
  const _randomArticle = function() {
    return articlesArr[Math.floor(Math.random() * articlesArr.length)];
  };
  const _randomNoun = function() {
    return nounsArr[Math.floor(Math.random() * nounsArr.length)];
  };

  const _randomLyAdjective = () =>
    lyAdjectivesArr[Math.floor(Math.random() * lyAdjectivesArr.length)];

  const capitalizeWord = word => {
    const wordwithoutFirstLetter = word.slice(1, word.length);
    const firstLetterCapped = word[0].toUpperCase();
    return `${firstLetterCapped}${wordwithoutFirstLetter}`;
  };

  $("#buttonToClick").on("click", function() {
    $("#text").text(() => {
      return `${$(
        "#name"
      ).val()} ${_randomVerb()} ${_randomArticle()} ${_randomAdjective()} ${_randomNoun()} while ${_randomArticle()} ${_randomNoun()} ${_randomVerb()}. 
      ${capitalizeWord(_randomLyAdjective())}, ${$(
        "#name"
      ).val()} also ${_randomVerb()} ${_randomArticle()} ${_randomAdjective()} ${_randomNoun()}. 
      ${$(
        "#name"
      ).val()} also ${_randomVerb()} ${_randomArticle()} ${_randomNoun()}.`;
    });
  });
});
