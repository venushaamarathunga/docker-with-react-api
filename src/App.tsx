import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  interface Comment {
    id: number;
    name: string;
    email: string;
    body: string;
  }

  const [count, setCount] = useState(0);
  const [comments, setComments] = useState<Comment[]>([]);
  //getting this :- https://jsonplaceholder.typicode.com/
  const apiURL = "https://jsonplaceholder.typicode.com/comments";

  const fetchData = async () => {
    try {
      const responce = await fetch(apiURL);

      const data = await responce.json();
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1> Comments...</h1>
        {comments.map((comment: Comment) => (
          <div key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
