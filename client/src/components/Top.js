import React, { useEffect } from "react";
import { useWeb3Context } from "web3-react";
import "./Top.css";

function Top() {
  const context = useWeb3Context();

  useEffect(() => {
    context.setFirstValidConnector(["MetaMask"])
  }, []);

  // useEffect(() => {
  //   console.log("here");
  //   context.setConnector(MetaMask);
  // }, []);

  console.dir(context);
  if (!context.active && !context.error) {
    // loading
    return (    <div className="App">
    <header className="App-header">Failure and Context not active!</header>
  </div>)
  } else if (context.error) {
    //error
    return (    <div className="App">
    <header className="App-header">Failure!</header>
  </div>)
  } else {
    // success
    return (    <div className="App">
    <header className="App-header">Context is Set: {context.account}</header>
  </div>)
  }


}

export default Top;
