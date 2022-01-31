Install dependencies

```bash
npm install
```

Login to https://developer.vonage.com/ and copy the `api key` and `secret key` . Paste it in the `index.js` file.

```bash
const vonage = new Vonage({
  apiKey: "",
  apiSecret: ""
})
```

Send message by running the server.

```bash
node index.js
```
