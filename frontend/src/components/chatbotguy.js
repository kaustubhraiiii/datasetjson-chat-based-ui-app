import config from '../chatbotdir/config.js';
import MessageParser from '../chatbotdir/Messageparser.js';
import ActionProvider from '../chatbotdir/ActionProvider.js';

const MyComponent = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};
