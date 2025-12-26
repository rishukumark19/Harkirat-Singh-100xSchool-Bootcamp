Small boi stuff

1. Tags
2. Attributes
3. Inline styles (bg color, fonts ...)
4. JS Basics, data types, loops, fns...

Big boi stuff

1. External styles, classes and ids
2. Flexbox
3. Connecting JS to HTML
   (selectors, DOM)
4. Chrome Dev tools

-------------Before we start-----------------------------
What are browsers? How do they render websites?
What purpose do HTML/CSS/JS serve
How much of this do we actually use in the industry -

1.  html => very minimal
2.  css => minimal
3.  js - heavy

                        HTML
           Defines the structure of your website
               2 jargon we need to know of-
                        1. Tags
                        2. Attributes

---

                    Tags

---

HTML Tags

<html>--------tag to put all the code inside
<head>
<title>
<body>
<div>/ <span> --------most popular is div : it stands for 1 division of your page ,basicly means one full line width of your page will take
<hl> .. <h6> --------- sizes of text (h1 biggest h6 smallest-helps to sort of style a page without css)
<p>          --------- paragraph just to arrange 
<img>
<a>          -------- when i want someone to go one place to another when they click on a text , is when u use a tag.
input        --------- input text boxes
<button>     --------- lets u create buttom 
<b> / <i>    --------- bold and italic 
< center>     ------ dont use it(outdated) for aligning at center

Lets talk bout it !
#helps structure a page

<html>

    <head>
    #to put meta deta (eg title tag-what u see on the web heading )
    <head>

    <body>
        <div>

        </div>
        <span></span>
    </body>

</html>

Q. whats differenct between div and span : span only take as much space as it need,whatever siblings(children)needs to come , will come right next to it ,doesnt need to overflow to the next line. DIVS takes up whole space

<div>
    hello
</div>
<div>
    hello1
</div>

<span>
    hello
</span>
<span>
    hello1
</span>

## a tag

<a href="google.com" targer="_blank">Go to Google</a>

targer="\_blank" ----- should take u on another page

## button tags

<button>hi there</button>

## input tags

<input placeholder="Username" type="text"></input>

---

                    Attributes

---

Attributes
• <img src="a.png">
• <a href="google.com">
• <button onclick=""
• <input id="username">

#each tag can have mutiple attributes , that help define what that specific tag should do

---

                CSS

---

They let you add styles to your website (colors, font sizes,
background colors ...)
Used for positioning things on the page

Q. How do you add style

<h1>hi there </h1>
<h1 style='color:red;background:green'>hi there </h1>

## Common styling attributes

    color
    background
    border-radius    -------radius on the edge curves
    border           ------(thickness , style,color)of border
    padding / margin ------difference (padding- add space inside the border  and content in the box/div/content)(if i want to add space outside the div , use margin)
    box-shadow       ------(3 value , 1 color) eg : 2px 10px 10px black

## How to position?

---ZERODHA-------------------Signup-About Us-Products-Support--

DIVS always take up all the space available horizontally
SPAN only take up as much space as needed
Can you make divs take only the space they need?

## How to position?

Dumb Way : Float property
Right way : Flex box

display: flex
-on parent makes all div siblings reside
in the same line

---

justify-content:
flex-start
flex-end
center
space-beiween
space-around
space-evenly
