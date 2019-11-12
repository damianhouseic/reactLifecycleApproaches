export class Api {
  static async getContact() {
    const delay = t => new Promise(resolve => setTimeout(resolve, t));

    return await delay(Math.random() * 10000).then(() => {return {name: "John", email: "john@gmail.com"}});
  }
  static async getOtherContact() {
    const delay = t => new Promise(resolve => setTimeout(resolve, t));

    return await delay(Math.random() * 10000).then(() => {return {name: "Damian", email: "damian@gmail.com"}});
  }
  static async getMessage() {
    const delay = t => new Promise(resolve => setTimeout(resolve, t));
    const random = Math.floor(Math.random() * 10000);
    return await delay(random).then(() => {return {subject: "Black Friday Is Here!", recipients: random}});
  }
  static async getOtherMessage() {
    const delay = t => new Promise(resolve => setTimeout(resolve, t));
    const random = Math.floor(Math.random() * 10000);
    return await delay(random).then(() => {return {subject: "Christmas Sales!", recipients: random}});
  }
}
