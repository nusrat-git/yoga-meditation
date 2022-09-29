import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div>
            <div className='reveal'>
                <p>Showing Answers</p>
            </div>
            <div className='questions'>
                <div className='question'>
                    <h1>How react works?</h1>
                    <p>One of the biggest advantages of using React is that you can infuse HTML code with JavaScript.

                        Users can create a representation of a DOM node by declaring the Element function in React.instead of using the traditional DOM class, React uses className.JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. The quotation marks in JSX attributes represent strings, similarly to JavaScript.

                        In most cases, React is written using JSX instead of standard JavaScript to simplify components and keep code clean.A React app usually has a single root DOM node. Rendering an element into the DOM will change the user interface of the page.Whenever a React component returns an element, the Virtual DOM will update the real DOM to match.</p>
                </div>
                <div className='question'>
                    <h1>What are the differences between state and props?</h1>
                    <p>
                        Difference between props and state:
                        <br />

                        PROPS :
                        <br />
                        The Data is passed from one component to another.
                        <br />
                        It is Immutable (cannot be modified).
                        <br />
                        Props can be used with state and functional components. <br />
                        Props are read-only.
                        <br />

                        STATE :
                        <br />
                        The Data is passed within the component only.
                        <br />
                        It is Mutable ( can be modified).
                        <br />
                        State can be used only with the state components/class component.
                        <br />
                        State is both read and write.
                    </p>
                </div>
                <div className='question'>
                    <h1>What are the uses of use effect?</h1>
                    <p>useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects,   it is also capable for handling componentDidMount(), componentDidUpdate() and componentWillUnmount() life-cycle methods of class based components into functional component.  Since the render method is to quick to produce a side-effect one needs to use life cycle methods to observe the side effects.When we specify useEffect we are basically requesting react to execute the function that we pass in the useEffect function as an argument, everytime the component renders. The second thing to make note of is that useeffect is used inside the component as by doing this we can easily access the components state and props without having to write any additional code.</p>
                </div>
            </div>
        </div>
    );
};

export default Question;