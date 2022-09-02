import { useEffect, useState } from "react";
import Content from "./Content";
import Image from "./assets/ball.png";

function App() {
    const [toggle, setToggle] = useState(false);
    const [value, setValue] = useState("");

    useEffect(() => {
        if (!toggle) setValue("Show more");
        else setValue("Show less");
    }, [toggle]);

    return (
        <div className='App'>
            <button type='button' onClick={() => setToggle(!toggle)}>
                {value}
            </button>
            <div>
                {!toggle && (
                    <img src={Image} alt='ball' className='poke-ball'></img>
                )}
            </div>
            {toggle && <Content />}
        </div>
    );
}

export default App;
