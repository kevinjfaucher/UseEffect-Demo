import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Counter() {

    // State is data that changes with time.  Data that can be different from one render to another.
    // Use state is the hook in react that you use to manipulate state
    // Hooks let you use different React features from your components

    //The first variable in the array is the state variable (what you are tracking)
    //The second element in the array is the updater function that updates the state
    //You can name that whatever you want

    //We set the initial state of the state we are tracking.  (default value)
    const [count, setCount] = useState(0);

    //Side effects are the result of a state changing
    //We are going to react to the count using a side effect using useEffect
    //The first part of useEffect is the actual code to be run found inside the {}
    //The dependency array [] tells react what it should listen to, to run the code in the {}

    useEffect(() => {
        //The code we want to run
        //Whenever count changes we want to log the change as a side effect
        //This will run at least once when the component mounts no matter what
        console.log("The count is: ", count)

    }, [count]); // The dependency array


    return (
        <div>
            <h1>The value of count is: {count}!</h1>
            {/*OnClick is the event listener*/}
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);
