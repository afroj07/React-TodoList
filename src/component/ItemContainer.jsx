import Items from "./Items";
import Style from "./ItemContainer.module.css";
const ItemContainer = ({ itemList, onDeleteClick }) => {
  return (
    <div className={Style.container}>
      {itemList.map((item) => (
        <Items
          key={item.name}
          itemName={item.name}
          dueDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        ></Items>
      ))}
    </div>
  );
};

export default ItemContainer;
