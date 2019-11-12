import React from 'react';
import './App.css';
import ContactData from './component/lifecycle/ContactData';
import MessageData from './component/lifecycle/MessageData';
import ContactDataHOC from './component/higherOrder/ContactDataHOC';
import MessageDataHOC from './component/higherOrder/MessageDataHOC';
import ContactDataWithHooks from './component/future/ContactDataWithHooks';
import MessageDataWithHooks from './component/future/MessageDataWithHooks';


function App() {
  return (
    <div className="App">
      <section>
        <h1>Legacy Class Lifecycle</h1>
        <ContactData />
        <MessageData />
      </section>
      <section>
        <h1>Higher Order Component</h1>
        <ContactDataHOC />
        <MessageDataHOC />
      </section>
      <section>
        <h1>Hooks</h1>
        <ContactDataWithHooks />
        <MessageDataWithHooks />
      </section>
    </div>
  );
}

export default App;
