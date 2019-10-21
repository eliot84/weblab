We are going to apply the things we have learned in the following excercise. Open the file "wireframeLF.png" and look at the wireframe we will be coding.Per the image, we can see that there are 9 grid items contained inside of an overall grid container.


1. Use the file inside of the unsolved folder to add the needed CSS 


2. all items appear to be pink except for item 3 and 8. When styling in CSS make sure to target the custom css class name to change the background color for these items

3. You will need to use the following in your css: target .container .item .item3 and .item8 and apply the necessary css


If you get stuck than reference the below, these are codes used in the css  in no specific order, you will need to figure out where each piece goes.

CSS Declarations Used
grid-row: 1 /3;
grid-column: span 2
grid-auto-rows: 100px;
grid-column: 1 / 3;
text-align: center;
display: grid;
grid-gap: 20px;
grid-template-columns: repeate(2, 1fr);