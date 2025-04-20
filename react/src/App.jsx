import { useState } from 'react'
import Form from "./components/Form"
import LeftList from "./components/LeftList"
import RightList from "./components/RightList"
function App() {

  return (
    <div className="container m-5">
      <div className="grid">
        <Form />
        <div className="row mt-2">
          <LeftList />
          <RightList />
        </div>
      </div>
    </div>
  )
}

export default App
