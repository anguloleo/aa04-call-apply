// DO NOT MODIFY THE say FUNCTION
function say(name) {
  console.log(`${this.message} ${name}!`);
}

helloMessage = { message: 'Hello,' };
heyThereMessage = { message: 'Hey there,' };

const sayJohn = say.bind(helloMessage, "John");
sayJohn();
const sayMichael = say.bind(heyThereMessage, "Michael");
sayMichael();
