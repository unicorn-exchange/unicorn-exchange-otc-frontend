import {Component, OnInit} from "@angular/core";
import {BaseComponent} from "../base-component/base.component";
import {ChatStore} from "../../stores/chat-store.service";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent extends BaseComponent implements OnInit {
  messages = [];

  constructor(
    private chatStore: ChatStore,
  ) {
    super();
  }

  ngOnInit() {
    this.chatStore.$state
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(state => {
        this.messages = state.messages;
      });
    this.chatStore
      .loadMessages();
  }

  sendMessage(event) {
    this.chatStore.sendMessage({
      text: event.message,
      reply: false,
      state: "sending",
      user: {
        name: "Kate Moss",
        avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
      },
    });
    console.log(this.messages);
  }
}
