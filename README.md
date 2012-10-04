# underscore.d.ts

underscore.d.ts is instance definition of underscore on typescript.

## HOW TO USE

### Client
```
///<reference path='underscore.d.ts'/>
declare var _ :underscore;
```

### Node
```
///<reference path='node.d.ts'/>
///<reference path='underscore.d.ts'/>
var _ : underscore = require('./underscore-min')
```


## EXAMPLE

```javascript

_.each([1,2,3], (i:number) => {
  console.log(i);
});

var arr = _.map([1,2,3], i => i)
var sum = _.reduce([1,2,3], (a,b) => { return a + b }, 0)

```
