// class definition

export class Message {
  title: string | undefined;
  message: string | undefined;
  id: string | undefined;
}

function Message2(title: string, message: string, id: string) {
  this.title = title;
  this.message = message;
  this.id = id;
}

// function definition
