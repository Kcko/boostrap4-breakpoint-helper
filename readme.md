# Bootstrap Breakpoint Helper
jquery helper which will help you with information about your current resolution and breakpoint

- version 1.1.0
- last update 19/2/2019

## Dependencies
- ```jQuery >= 1.7.2```
- ```@kcko/jquery-pubsub-eventer ^2.0.0```

## How to install
- Download package directly from github or install via ```npm install @kcko/boostrap4-breakpoint-helper``` or with yarn ```yarn add @kcko/boostrap4-breakpoint-helper```

## How to use
- On some html element (```<html>``` or ```<body>``` are the best) run plugin as follows ```$('html').bootstrapBreakpointHelper();```    this code should be as high as possible in your js file.

- You will see information about current resolution and breakpoint 
![](http://files.rjwebdesign.cz/i2/20190218-140920.png)
- Information about resolution and breakpoints is stored to data attributes or on element in data, accessible from ```$('element').data('breakpoint')``` and ```$('element').data('resolution')```

## Advanced use
- This plugin works very closely with Eventer pubsub plugin ```@kcko/jquery-pubsub-eventer```
- You can easily use subscribe event like this wherever you need. It takes into account automatic window-size change, rotation phone/tablet etc.
```javascript
$.Eventer.subscribe("bootstrap-breakpoint-helper/onresolutionchange", function(event, data) {
    console.log(event); // this event
    console.log(data); // info object about current resolution and breakpoint
}
```

## Plugin default settings
```javascript
debounceDelay: 250,  // debounce delay
breakpoints: { // Defined breakpoints
    'xl': 1200,
    'lg': 992,
    'md': 768,
    'sm': 576,
    'xs': 0
},
lowerBreakpoint: 'xs'	// Lowest breakpoint
```