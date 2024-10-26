const React = require("react");
const Chatbot = require("react-chatbot-kit");

const config = require("./configs/chatbotConfig");
const MessageParser = require("./chatbot/MessageParser");
const ActionProvider = require("./chatbot/ActionProvider");

function App() {
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

module.exports = App;


// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message)
    }
  }
  
  module.exports = MessageParser;
  
  // ActionProvider starter code
  class ActionProvider {
     constructor(
      createChatBotMessage,
      setStateFunc,
      createClientMessage,
      stateRef,
      createCustomMessage,
      ...rest
    ) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
      this.stateRef = stateRef;
      this.createCustomMessage = createCustomMessage;
    }
  }
  
  module.exports = ActionProvider;
  
  // Config starter code
  const { createChatBotMessage } = require("react-chatbot-kit");
  
  const config = {
    initialMessages: [createChatBotMessage(`Hello world`)]
  }
  
  module.exports = config