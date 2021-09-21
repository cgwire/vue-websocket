# vue-websocket-next

[![NPM version](https://img.shields.io/npm/v/vue-websocket-next.svg)](https://www.npmjs.com/package/vue-websocket-next)

A [socket.io](https://socket.io) plugin for Vue.js.


## Installation

### npm

```bash
$ npm install vue-websocket-next
```

## Usage
Register the plugin. By default, it will connect to `/`:

```js
import VueWebsocket from "vue-websocket";
import IO from 'socket.io-client';

Vue.use(VueWebsocket, IO);
```

Or to connect to another address:

```js
Vue.use(VueWebsocket, IO, "ws://otherserver:8080");
```

You can also pass options:

```js
Vue.use(VueWebsocket, IO, "ws://otherserver:8080", {
  reconnection: false
});
```

To use it in your components:

```html
<script>
  export default {

    methods: {
      add() {
          // Emit the server side
          this.$socket.emit("add", { a: 5, b: 3 });
      },

      get() {
          this.$socket.emit("get", { id: 12 }, (response) => {
          ...
        });
      }
    },

    socket: {
      // Prefix for event names
      // prefix: "/counter/",

      // If you set `namespace`, it will create a new socket connection to the namespace instead of `/`
      // namespace: "/counter",

      events: {
        // Similar as this.$socket.on("changed", (msg) => { ... });
        // If you set `prefix` to `/counter/`, the event name will be `/counter/changed`
        //
        changed(msg) {
          console.log("Something changed: " + msg);
        }

        connect() {
          console.log("Websocket connected to " + this.$socket.nsp);
        },

        disconnect() {
          console.log("Websocket disconnected from " + this.$socket.nsp);
        },

        error(err) {
          console.error("Websocket error!", err);
        }
      }
    }
  };

</script>
```

## Develop

### Building

This command will build a distributable version in the `dist` directory:

```bash
$ npm run build
```

## Testing
This package uses [`karma`](https://www.npmjs.com/package/karma) for testing. You can run the tests like so:

```bash
$ npm test
```

## Contribution

Please send pull requests improving the usage and fixing bugs, improving documentation and providing better examples, or providing some testing, because these things are important.

## License

`vue-websocket-next` is available under the [MIT license](https://tldrlegal.com/license/mit-license).

This package was originally developed by Icebob. But it is now maintained by
CGWire.

![@icebob](https://img.shields.io/badge/github-icebob-green.svg)](https://github.com/icebob) 


## About CGWire

CGWire is a company based in France. We help teams of animation
studios to collaborate better. We provide tools to more than 50 studios spread
all around the world.

On the technical side, we apply software craftmanship principles as much as
possible. We love coding and consider that strong quality and good developer
experience matter a lot.

Visit [cg-wire.com](https://cg-wire.com) for more information.

[![CGWire Logo](https://zou.cg-wire.com/cgwire.png)](https://cg-wire.com)
