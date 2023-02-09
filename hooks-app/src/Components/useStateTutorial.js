import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import HelloWorld from "./helloWorld";

const StateTutotal = () => {
  const [inputValue, setInputValue] = useState("Pedro");

  const onChange = (event) => {
    let userValue = event.target.value;
    setInputValue(userValue);
  };

  return (
    <div>
      <div>
        <input type="text" placeholder="Enter your name" onChange={onChange} />
        {inputValue}
      </div>
      <div>
        <Tab.Group>
          <Tab.List>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <HelloWorld />
            </Tab.Panel>
            <Tab.Panel>
              <HelloWorld /> ffds
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default StateTutotal;
