# adduce

Tool for getting resources online. HTTP and HTTPS currently supported

## Usage as a cli

`npm i -g adduce` or via `npx`

### Plain request

`adduce http://api.mydomain/v1/items`

### With query params

`adduce http://api.mydomain/v1/items?limit=1`

### Filter the response
Get only the response code:
`adduce http://api.mydomain/v1/items --ping`

Get only the response body
`adduce http://api.mydomain/v1/items --body`

### Current adduce version
`adduce --version`


## Within a package
```
const adduce = require("../adduce");
adduce("https://api.mydomain/v1/items");

```
