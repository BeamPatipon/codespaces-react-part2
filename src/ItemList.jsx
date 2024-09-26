import {useEffect, useState} from "react";

function Item({name,isPacked=false}){
    return (<li>
        {name} {isPacked && '✓'} {!isPacked && '✖'}
    </li>);
}
export default function ItemList(){
    const [search, setSearch] = useState("")
    useEffect(()=>{
        console.log("This Component Is Loaded!");
        
        return ()=>{
            alert("Component Unloaded")
        }
    },[])
    const items=[{name:"Sunglass", isPacked:true},
        {name:"Sunblock", isPacked:false},
        {name:"Swimming suit", isPacked:true},
        {name:"Powerbank", isPacked:false},
        {name:"Towel", isPacked:true}
    ];
    
    const filterList=items.filter(i=>i.name.toLowerCase().includes(search.toLowerCase()))
    const itemList=filterList.map(i=><Item key={i} 
        name={i.name} isPacked={i.isPacked}/>)

    return (<>
        <input
        type="text"
        onChange={event=>{setSearch(event.target.value)}}
        />
        <h1>Item :</h1>
        {itemList}
    </>)
}