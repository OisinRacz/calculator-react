import { useState } from 'react'
import Wrapper from "./Components/wrapper"
import Screen from "./Components/screen"
import Button from "./Components/button"
import Buttonbox from "./Components/buttonbox"
import './App.css'

const buttonValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="]
]

function App() {
  const [getCalc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0
  })

  return (
    <>
     <Wrapper>
      <Screen value={getCalc.num ? getCalc.num : getCalc.res} />
      <Buttonbox>
        {
          buttonValues.flat().map((btn, i) =>{
            let buttonClassName = "button"
            if (btn === "="){
              buttonClassName = "button-equals"
            }
            return (
              <Button key={i}
               className={buttonClassName}
              value={btn}
              onClick={() => {
                setCalc(prev => ({
                  ...prev,
                  num:btn
                }

                ))
              }} />
            )
          })



        }
        
          

      </Buttonbox>
     </Wrapper>
    </>
  )
}

export default App
