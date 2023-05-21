import { Fragment, useState } from "react";

function ListGroup() {
  const items = ["new york", "san fran", "tokyo", "london", "paris"];

  // Event handler
  const [selectedIndex, setSelectedIndex]= useState(-1)
  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        {items.length === 0 ? (
          <>No items</>
        ) : (
          items.map((item, index) => (
            <li className={selectedIndex === index? 'list-group-item active': 'list-group-item'} key={item} onClick={() => setSelectedIndex(index)}>
              {item}
            </li>
          ))
        )}
      </ul>
    </Fragment>
  );
}

export default ListGroup;