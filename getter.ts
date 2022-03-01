// ! note : name must be pascal case
export class Message {
    title: string;
    message: string;
    isSent: boolean;
    
    constructor(title: string, message: string){
        this.title = title;
        this.message = message;
        this.isSent = false;
    }

    get messageStatus(): string {
        const sentMessage = this.isSent ? "Has been sent." : "Has not been sent.";

        return `${this.message} | ${sentMessage}`;
    }
}

const message = new Message('New Course','Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.');

console.log(message.messageStatus);
;