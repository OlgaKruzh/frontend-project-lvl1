import readlineSync from 'readline-sync'

export default () => {
  // console.log("Cli rabotet");
  // const userName = readlineSync.question('May I have your name? ');
  // console.log('Hi ' + userName + '!');
  const userName = readlineSync.question('May I have your name? ')

  console.log(`Hello, ${userName}!`)
}
