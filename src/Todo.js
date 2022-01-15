import React, {useState} from 'react';

export default function Todo(){
  let [arr, setArr] = useState([]);
  let [text, setText] = useState([]);
  let add=()=>{
    if (text !==''){

      setArr([...arr,text]);
      setText('');
    }
  };
  console.log('rerender hua');
  return(
    <div>
      <input type="text" placeholder="Add some"
      value={text}
      onChnage={(e)=>{
        setText(e.target.value);
      }}
      />
      <button onClick={add}>Add</button>
<div>
  Todos:
  {arr.map((ele)=>(
    <p>{ele}</p>
  ))}
</div>


    </div>
  );
}