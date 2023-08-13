import React from 'react';

function App() {
  // APIリクエストを送信する関数
  const sendApiRequest = async () => {
    // APIリクエストを送信
    const res = await fetch('/api/demo');
    // JSON形式でレスポンスを受け取る
    const data = await res.json();
    // レスポンスの表示
    console.log(data);
  };
  const value = 'World';
  return (
  <div>
    <p>Hello {value}</p>
    <button onClick={()=>sendApiRequest()}>Click me</button>
  </div>);
}

export default App;
