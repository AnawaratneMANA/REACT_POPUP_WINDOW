import Popup from "./components/Popup";
import {useState, useEffect} from "react"
function App() {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [timedPopup, setTimedPopup] = useState(false);

    useEffect(() => {
        setTimeout(()=> {
            setTimedPopup(true);
        }, 3000);
    }, [])


    return (
        <div className="App">
            <main>
                <h1> React Popup</h1>
                <br/>
                <br/>
                <button onClick={() => setButtonPopup(true)}>Open Popup Menu</button>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h3>My Popup</h3>
                    <p>This is my button triggered Form Popup.</p>
                    <p>Add the form here.</p>
                </Popup>

                <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
                    <h3>My Popup</h3>
                    <p>This is my button triggered Form Popup.</p>
                    <p>Add the form here.</p>
                </Popup>
            </main>
        </div>
    );
}

export default App;
