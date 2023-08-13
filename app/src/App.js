import React, { useState } from 'react';

function App() {
  // APIリクエストを送信する関数
  const sendApiRequest = async () => {
    // APIリクエストを送信
    const res = await fetch('/api/demo');
    // JSON形式でレスポンスを受け取る
    const data = await res.json();
    // レスポンスの表示
    console.log(data);
    setResponse(data);
  };
  let response, setResponse = useState('');
  const value = 'World';
  return (
  <div>
    <p>Hello {value}</p>
    <button onClick={()=>sendApiRequest()}>Click me</button>
    <p>{response}</p>
    <p>
      <a href="/.auth/logout">Logout</a>
    </p>
  </div>);
}

export default App;
