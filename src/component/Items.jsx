const Items = ({ itemName, dueDate, onDeleteClick }) => {
  return (
    <div className="container text-center  mt-2">
      <div className="row">
        <div className="col-6">{itemName}</div>
        <div className="col-4">{dueDate}</div>
        <div className="col-2">
          <button
            className="btn btn-danger"
            onClick={() => onDeleteClick(itemName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Items;
