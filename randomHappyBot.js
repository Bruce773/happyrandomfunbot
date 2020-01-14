$(document).ready(() => {
  const verbsArr = ["ran through", "ate", "smelled", "jumped over", "sang to"];
  const adjectivesArr = [
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
  const articlesArr = ["a", "the"];
  const nounsArr = ["rainbow", "horse", "cloud", "car", "streetlight", "puppy"];

  const _randomVerb = () =>
    verbsArr[Math.floor(Math.random() * verbsArr.length)];

  const _randomAdjective = () =>
    adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)];

  const _randomArticle = () =>
    articlesArr[Math.floor(Math.random() * articlesArr.length)];

  const _randomNoun = () =>
    nounsArr[Math.floor(Math.random() * nounsArr.length)];

  const _randomLyAdjective = () =>
    lyAdjectivesArr[Math.floor(Math.random() * lyAdjectivesArr.length)];

  const capitalizeWord = word => {
    const wordwithoutFirstLetter = word.slice(1, word.length);
    const firstLetterCapped = word[0].toUpperCase();
    return `${firstLetterCapped}${wordwithoutFirstLetter}`;
  };

  $("#buttonToClick").on("click", () => {
    $("#name").val() !== ""
      ? $("#text").text(() => {
          return `${$(
            "#name"
          ).val()} ${_randomVerb()} ${_randomArticle()} ${_randomAdjective()} ${_randomNoun()} while ${_randomArticle()} ${_randomNoun()} ${_randomVerb()} it. 
      ${capitalizeWord(_randomLyAdjective())}, ${$(
            "#name"
          ).val()} also ${_randomVerb()} ${_randomArticle()} ${_randomAdjective()} ${_randomNoun()}. 
      ${$(
        "#name"
      ).val()} also ${_randomVerb()} ${_randomArticle()} ${_randomNoun()}.`;
        })
      : $("#text").text(() => "Please enter your name in the box above");
  });
});
