export class Message {
  title!: string;
  message!: string;
  isSent!: boolean; 
}

export class Messages extends Array<Message> {
  // non static way
  public getValidMessages(): Message[] {
    return this.filter((message) => message.message.trim().length > 0);
  }
  // static way
  static getValidMessages(messages: Message[]): Message[] {
    return messages.filter((message) => message.message.trim().length > 0);
  }
}

Messages.getValidMessages([])