const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map( tutorial => {
    // So you first take each string and break it up
    let tokens = tutorial.split(' ')
    // Then you iterate through each string broken up into array pieces...
    let capitalizedTokens =
      tokens.map( token => token.charAt(0).toUpperCase() + token.slice(1) )
      debugger
      // Then join rejoins the broken apart array of capitalized words
    let response = capitalizedTokens.join(' ')
    return response
  })
}

console.log(titleCased())
