import {useState} from "react"

function ColorPicker () {
      const [color , setColor] = useState('#FFFFFF');
     
      function handleColorChange (e) {
             setColor(e.target.value);
      }
       return(<>
            <div className="color-picker-container">
                   <h1>Color picker</h1>
               <div className="color-display"style={{backgroundColor : color}}>
                   <p>Selected color : {color}</p>
               </div>
               <label>Select a Color:</label>
               <input type = "color" value={color} onChange={handleColorChange}/>
            </div> 
             </>);
}

export default ColorPicker