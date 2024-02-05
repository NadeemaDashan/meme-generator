import React from "react";
import Header from "./components/Header"
import Form from "./components/Form";

export default function App(){
  return(
    <div>
      <header>
        <Header></Header>
      </header>
      <main>
        <Form></Form>
      </main>
    </div>
  )
}