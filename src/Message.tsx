function Message() {
  const name = "";
  if (name) return <h1>Hello {name}</h1>;
  return <h1>NoName</h1>;
}

function Buttons() {
  return <button>Click me!</button>;
}

export default Message;
export { Buttons };
