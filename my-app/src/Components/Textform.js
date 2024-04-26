import React ,{useState} from 'react'


export default function Textform(props) {
    const [text, setText] = useState('Enter The Text Here');
    const textUpclass = ()=>{
        console.log("Button Was Clicked")
    }
    return (
        <div>
            <form>
                <h1>{props.heading}</h1>
                <div class="my3">                    
                    <textarea class="form-control" value={text} id="myBox" rows="8"></textarea>
                </div>
            </form>
        </div>
    )
}

