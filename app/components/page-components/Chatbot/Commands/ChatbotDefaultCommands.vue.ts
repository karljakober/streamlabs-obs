import ChatbotBase from 'components/page-components/Chatbot/ChatbotBase.vue';
import { Component } from 'vue-property-decorator';
import {
  DafaultCommandsResponse,
  ChatbotAPIPostResponse
} from 'services/chatbot/chatbot-interfaces';


@Component({})
export default class ChatbotDefaultCommands extends ChatbotBase {

  get commandSlugs() {
    return this.chatbotApiService.state.default_commands_response;
  }

  mounted() {
    //
    // get list of user's default commands
    //
    this.chatbotApiService.fetchDefaultCommands();
  }

  toggleEnableCommand(slugName: string, commandName: string, isEnabled: boolean) {
    const updatedCommand = {
      ...this.commandSlugs[slugName][commandName],
      enabled: isEnabled
    };
    this.chatbotApiService.updateDefaultCommand(slugName, commandName, updatedCommand);
  }
}