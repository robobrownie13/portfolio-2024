import { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <h1 className="start">Hi</h1>
    </div>
  );
}

function Pages({ content }) {
  const [activePage, setActivePage] = useState(0);

  return (
    <>
      <h1 className="start"> Hi</h1>
    </>
  );
}
