// export default function printMe() {
//   console.log('I get called from print.js!');
//   // cosnole.error('I get called from print.js!');
//   // console.log("test11f");
//   console.log('Updating print.js...11');
// }

console.log('The print.js module has loaded! See the network tab in dev tools...');

export default () => {
  console.log('Button Clicked: Here\'s "some text"!');
}