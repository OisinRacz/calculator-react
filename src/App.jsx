import { useState } from 'react'
import Wrapper from "./Components/wrapper"
import Screen from "./Components/screen"
import Button from "./Components/button"
import Buttonbox from "./Components/buttonbox"
import "./Components/wrapper.css"
import "./Components/screen.css"
import "./Components/buttonbox.css"
import "./Components/button.css"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Wrapper>
      <Screen value="0" />
      <Buttonbox>

        <Button className="" value="1" onClick={() => {console.log("Clicked")}}/>
        <Button className="" value="1" onClick={() => {console.log("Clicked")}}/>
        <Button className="" value="1" onClick={() => {console.log("Clicked")}}/>
        <Button className="" value="1" onClick={() => {console.log("Clicked")}}/>
        <Button className="" value="1" onClick={() => {console.log("Clicked")}}/>
        <Button className="" value="1" onClick={() => {console.log("Clicked")}}/>
        <Button className="" value="1" onClick={() => {console.log("Clicked")}}/>
        <Button className="" value="1" onClick={() => {console.log("Clicked")}}/>
        <Button className="" value="1" onClick={() => {console.log("Clicked")}}/>
        <Button className="" value="1" onClick={() => {console.log("Clicked")}}/>
        <Button className="" value="1" onClick={() => {console.log("Clicked")}}/>
        <Button className="" value="1" onClick={() => {console.log("Clicked")}}/>
        <Button className="" value="1" onClick={() => {console.log("Clicked")}}/>
        <Button className="" value="1" onClick={() => {console.log("Clicked")}}/>
        <Button className="" value="1" onClick={() => {console.log("Clicked")}}/>
        <Button className="" value="1" onClick={() => {console.log("Clicked")}}/>
        <Button className="" value="1" onClick={() => {console.log("Clicked")}}/>
        <Button className="" value="1" onClick={() => {console.log("Clicked")}}/>
        <Button className="" value="1" onClick={() => {console.log("Clicked")}}/>
      </Buttonbox>
     </Wrapper>
    </>
  )
}

export default App
