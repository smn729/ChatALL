import BingChatBot from "./bots/microsoft/BingChatBot.js";

class Bing {
    bing;

    constructor() {
        this.bing = new BingChatBot();
    }

    async sayHello() {
        await this.bing._sendPrompt('hello', (param, res) => {
            console.log(param);
            console.log(res);
        }, 'ppp')
    }

}

const b = new Bing();
try {
    await b.sayHello();
} catch (error) {
    console.log(error.message);
}
