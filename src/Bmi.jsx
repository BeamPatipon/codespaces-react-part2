import { useRef, useState } from "react";

const BmiText=({Bmi})=>{
    if(Bmi<18.5)
        return (<h2>You Are UnderWeight</h2>);
    if(Bmi>30)
        return (<h2>You Are OverWeight</h2>);
    return (<h2>You are Normal</h2>);
}

export default function Bmi(){
    const W_input = useRef(null);
    const H_input = useRef(null);
    const [Bmi, setBmi] = useState(0);
    function handleClick(){
        alert("you typed "+W_input.current.value);
    }
    const BmiCal=()=>{
        let w=W_input.current.value;
        let h=H_input.current.value/100;
        setBmi(w / Math.pow(h,2));
    }
    return (<>
        <h3>BMI Calculator</h3>
        Weight : <input ref={W_input}/> Kg.<br/>
        Height : <input ref={H_input}/> Cm.<br/>
        <button onClick={()=>BmiCal()}>Calculate</button>
        <h4>BMI Value : {Bmi.toFixed(2)}</h4>
        <BmiText Bmi={Bmi}/>
    </>);
}