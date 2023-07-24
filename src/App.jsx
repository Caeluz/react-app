import Alert from "./components/alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { useState } from "react";

import { getUsers } from "../data/database";

function App() {
  
  const [alertVisible, setAlertVisibility] = useState(false);
  let items = ["test", "test2", "test3"];

  return (
    <>
      <div className="alert alert-primary">
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>
            <h1>Testing the Alert</h1>
          </Alert>
        )}
      </div>

      <div>
        <ListGroup items={items} heading="test" />
      </div>

      <div>
        <Button
          color="success"
          children="This is a button"
          onClick={() => setAlertVisibility(true)}
        />
      </div>
        
      <div>
      {getUsers().map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default App;
