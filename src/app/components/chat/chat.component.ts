import {Component, OnInit} from "@angular/core";
import {BaseComponent} from "../base-component/base.component";
import {messages} from "../../../services/api/mock/messages";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent extends BaseComponent implements OnInit {
  messages = messages;

  constructor() {
    super();
  }

  ngOnInit() {
  }

  sendMessage(event) {
    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      user: {
        name: "Kate Moss",
        avatar: "https://techcrunch.com/wp-content/uploads/2015/08/safe_image.gif",
      },
    });
  }
}
