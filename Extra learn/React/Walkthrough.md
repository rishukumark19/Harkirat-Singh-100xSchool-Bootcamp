Introduction to ReactJS
JSX
Pictorial representation of React Virtual DOM
Set up the environment for ReactJS
Folder Structure of ReactJS
Create first component
JSX Rules
Props in ReactJS
Introduction to React Hooks: useState and useEffect
Pictorial representation of React Lifecycle methods
API Request using AXIOS ( get, put,post,delete)
Introduction to TanStack/React Query
Installation and configuration
useQuery example
Installation and configuration of TanStack Devtools
Devtools example
useMutation hook is also explained

---

Understading of :
Introduction to ReactJS
what JSX?
What is Virtual DOM?

reactjs : use to build single page application , js library . (eg: on switching tabs , page is not reloading)

jsx: javascript xml - js syntex extension -we can embed our js inside html
eg : const name = "Rishu";
const element = <h1>Hello {name}</h1>;

react virtual DOM:replica of original DOm , when we modify a single dom, entire page relods , but in virtual dom , only that part is reloaded . it iwll comapre all the changes to original nodes and only will udate a spicific change in the node.

(it is a lightweight copy of the actual DOM , it is used to store the changes that need to be made to the actual DOM , it is more faster than the actual DOM)

---

Setting up ReactJs
Environment
Install code editor
Install NodeJs

node -v : check version
node --version : same thing

install react project
npx create-react-app my-app (all small letters)
cd my-app
npm start

## To start React project : npm run start

Folder Structure of ReactJS

node-modules : have liberaries -while pushing - gitignore
public dir: store img , hv index.html - entry point of react applicaiton
SRC: app.css -css for entire application
app.js - actuall jsx gets tegeered from here, if this is in index.js -this is what will be visiable on website
index.js - root js file for react application (we hv app component here)
package.json : most imp file ; holdes info about our project , dependencies , scripts etc. This is how u collaborate with otehr dev aswell. command to install is " npm install"
package-lock.json : lock the version of dependencies , (we dont have to push this file)(even if we delete this file , it will be created again when we run " npm install")

---

React Components

Component is a reusable piece of code that returns jsx.
whenver we are creating component we have to follow these rules :

1.  component name should start with capital letter (eg: App , Button , Card etc.)
2.  component should return jsx
3.  component should be exported
4.  component should be imported
5.  component should be used

file name should be same as component name (eg: App.js , Button.js , Card.js etc.)

Folder location : inside src create a folder components and put all the components there " components " folder name should be in small letters

Creating COmponents :
Button.jsx inside component folder . import react ,enter function , name of dunction should be same as file name , return jsx , export function

Now to actually show on website : need to import that component in app.js

on top enter import location of Button ,then enter the function insdie import section of App.js

IMPORTANT : we can import in index.js but not suggested as its a root file , insted app.js is the best place to import components as its already been in use inside index.js

## What is components ? = combination of HTML CSS and JS

JSX Rules

1.  if we want multiple elements to be returned from a component , we have to wrap them in a single parent element (eg: div , section , header , footer etc.)

Since we cant use two return statements in a function - we use fragment <></> or <React.Fragment></React.Fragment>

2.  elements like input, img, br, hr etc. are self closing elements , so we have to close them like <input /> , <img /> , <br /> , <hr />

3.  we cant use class attribute in jsx , instead we use className
    it is use for differnectiating between html class and react class
    <button className="btn">Button</button>

4.  whenever u are creating any components lets say Button , and inside this compoent we have HTML , the name of compont should staet with capital letter "Button" and your html component should be small letters "button"

---

Props in React

Props means properties.
if i want to get a className dinamically - we dop it with the helps of prop

Props are used to pass data from parent component to child component

Props are read only

to use it , first in parent component we have to pass the prop like <User username="Kasturi" />
and in child component we have to receive it like function User(props) {
console.log(props);
return (
<>

<h1>Hello {props.username}</h1>
</>
);
}

-------------------------------------------------------React Hooks . UseState . UseEffect

React hooks : react hooks are special functions, with this we can use react features without writing a class.

1. useState : use for state management

How its used as count :
const [count, setCount] = useState(0); //defined state varible first , count is name of state variable , setCount is a method help u to update the state variable, then "=" state " useState(0)" - 0 is the initial value of the state variable. it will get imported in react aswell/

<button className="btn" onClick={() => setCount(count + 1)}>
Count:{count} {/_to displayon screen _/}
</button>;
{/_ Have to use onclick event handler to update the state variable _/}
<input type="text" />;

## <h3>count is {count}</h3>;

2.  useEffect : use for side effects

                useEffect    : API calls , DOM manipulation ,       event  listeners ,       timers etc.
             : React lifecycle method (birth to death)

        1. Mounting : when component is first rendered
        2. Updating : when component is updated
        3. Unmounting : when component is unmounted

---

3. useContext : use for context management
4. useReducer : use for state management
5. useRef : use for ref management
6. useMemo : use for memoization
7. useCallback : use for memoization
8. useLayoutEffect : use for side effects
9. useDebugValue : use for debugging
10. useImperativeHandle : use for imperative operations

---

UseEffect and React Lifecycle methods explanation : 1. Mounting :
a cycle from birth to death of a component ;when component first created , it will attached to the DOM , that will be the first life cycle menthod :
Nmaed : component Did Mount

    if u want to execute / perform any operation/action ;use can do it using UseEffect Hook
    2. Updating :
    u did some updation in component , (modified);
    now at the time of update u want to do some upration ; u can do it with help of useEffect Hook
    3. Unmounting :
    u dont neeed the compont anymore ; (unmounting)
    now u need cleaning function ; u can do it with help of useEffect Hook; that operatio will be called Component WIll Unmount

---

UseEffect hook , API request using AXIOS (async/await)

    we will see 2 things :
    > API Request  using AXIOS library
    > useEffect for the API call.

dependencies : npm i axios (terminal)
why? install : Axios is used in React (and other JavaScript environments) primarily as a promise-based HTTP client for making requests to external servers or APIs. It simplifies tasks such as fetching data from an API, sending data to a server, and handling responses.

---

Introduction to TamStack/React Query
it makes fetching, caching, synchronizing and updating server side data in your web applications a breeze.
install : npm i @tanstack/react-query

wrap ur entire application in index.js with QueryClientProvider

Use useQuery hook to fetch data:

Tanstack dev tool
