import InputContainer from "./component/InputContainer";
import ItemContainer from "./component/ItemContainer";
import WelcomeMessage from "./component/WelcomeMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";

function App() {
  const [itemList, setItemList] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    const newItem = [...itemList, { name: itemName, dueDate: itemDate }];
    setItemList(newItem);
  };

  const handleOnDeleteClick = (itemName) => {
    const newTodoItem = itemList.filter((item) => item.name !== itemName);
    setItemList(newTodoItem);
  };

  return (
    <div>
      <InputContainer onNewItem={handleNewItem}></InputContainer>
      {itemList.length == 0 && <WelcomeMessage></WelcomeMessage>}
      <ItemContainer
        itemList={itemList}
        onDeleteClick={handleOnDeleteClick}
      ></ItemContainer>
    </div>
  );
}

export default App;
