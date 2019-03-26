$(document).ready(function() {
  var verbsArr = ['ran through', 'ate', 'smelled', 'jumped', 'sang to'];
  var adjectivesArr = [
    'blue',
    'flavorful',
    'spontaneous',
    'wildly energetic',
    'fluffy',
    'mysterious',
    'random',
    'happy',
    'ecstatic',
    'chipper',
  ];
  var articlesArr = ['a', 'the'];
  var nounsArr = [
    'rainbow',
    'horse',
    'cloud',
    'car',
    'streetlight',
    'puppy',
    'chocolate bar',
    'ice cream',
    'kitty',
  ];
  var name = $('#name').text();

  var _randomVerb = function() {
    return verbsArr[Math.floor(Math.random() * verbsArr.length)];
  };

  var _randomAdjective = function() {
    return adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)];
  };
  var _randomArticle = function() {
    return articlesArr[Math.floor(Math.random() * articlesArr.length)];
  };
  var _randomNoun = function() {
    return nounsArr[Math.floor(Math.random() * nounsArr.length)];
  };

  $('#buttonToClick').on('click', function() {
    $('#text').text(() => {
      return `${$(
        '#name'
      ).val()} ${_randomVerb()} ${_randomArticle()} ${_randomAdjective()} ${_randomNoun()}`;
    });
  });
});
