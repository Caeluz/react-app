function ListGroup() {
  let items = ["New York", "Los Angeles", "Chicago", "Tokyo", "Osaka"];
  items = [];

  return (
    <>
      <h1>List</h1>

      {items.length === 0 && <p>There are no items!</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
