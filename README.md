# adduce

Tool for getting resources online. HTTP and HTTPS currently supported

## Usage as a cli

`npm i -g adduce` or via `npx`

### Plain request

`adduce http://api.mydomain/v1/items`

### With query params

`adduce http://api.mydomain/v1/items?limit=1`

## Within a package
```
const adduce = require("../adduce");
const resp = adduce("https://api.mydomain/v1/items");
console.log(resp);

```
