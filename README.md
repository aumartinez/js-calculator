# JS CALCULATOR
A simple aritmetic calculator written in JS

## The JS script

In the JS script a technique to add the event listener call to an array of objects (the calculator keys) was used. The below function comes very handy in these scenarios.

```JavaScript
function addEventListenerToList(list, evt, func){
    for (let i = 0, len = list.length; i < len; i++){
      list[i].addEventListener(evt, func, false);
    }
}
```
