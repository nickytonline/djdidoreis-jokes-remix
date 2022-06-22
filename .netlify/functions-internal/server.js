var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// server.js
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// server.js
var import_netlify = require("@remix-run/netlify");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:C:\Users\Atratus\Documents\Dev\jokes-app-deploy\jokes-remix\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_react2 = require("@remix-run/react");

// app/styles/global.css
var global_default = "/build/_assets/global-N7QI7LWZ.css";

// app/styles/global-medium.css
var global_medium_default = "/build/_assets/global-medium-67B7MP26.css";

// app/styles/global-large.css
var global_large_default = "/build/_assets/global-large-VVLXXXOD.css";

// route:C:\Users\Atratus\Documents\Dev\jokes-app-deploy\jokes-remix\app\root.tsx
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: global_default
    },
    {
      rel: "stylesheet",
      href: global_medium_default,
      media: "print, (min-width: 640px)"
    },
    {
      rel: "stylesheet",
      href: global_large_default,
      media: "screen and (min-width: 1024px)"
    }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("title", null, "Remix: So great, it's funny!"), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:C:\Users\Atratus\Documents\Dev\jokes-app-deploy\jokes-remix\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links2
});
var import_react3 = require("@remix-run/react");

// app/styles/index.css
var styles_default = "/build/_assets/index-3XA5Q6C3.css";

// route:C:\Users\Atratus\Documents\Dev\jokes-app-deploy\jokes-remix\app\routes\index.tsx
var links2 = () => {
  return [
    {
      rel: "stylesheet",
      href: styles_default
    }
  ];
};
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("h1", null, "Remix ", /* @__PURE__ */ React.createElement("span", null, "Jokes!")), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react3.Link, {
    to: "jokes"
  }, "Read Jokes"))))));
}

// route:C:\Users\Atratus\Documents\Dev\jokes-app-deploy\jokes-remix\app\routes\jokes.tsx
var jokes_exports = {};
__export(jokes_exports, {
  default: () => JokesRoute,
  links: () => links3
});
var import_react4 = require("@remix-run/react");

// app/styles/jokes.css
var jokes_default = "/build/_assets/jokes-PXQQOGP4.css";

// route:C:\Users\Atratus\Documents\Dev\jokes-app-deploy\jokes-remix\app\routes\jokes.tsx
var links3 = () => {
  return [{ rel: "stylesheet", href: jokes_default }];
};
function JokesRoute() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "jokes-layout"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "jokes-header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "home-link"
  }, /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: "/",
    title: "Remix Jokes",
    "aria-label": "Remix Jokes"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "logo"
  }, "\u{1F92A}"), /* @__PURE__ */ React.createElement("span", {
    className: "logo-medium"
  }, "J\u{1F92A}KES"))))), /* @__PURE__ */ React.createElement("main", {
    className: "jokes-main"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "jokes-list"
  }, /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: "."
  }, "Get a random joke"), /* @__PURE__ */ React.createElement("p", null, "Here are a few more jokes to check out:"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: "some-joke-id"
  }, "Hippo"))), /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: "new",
    className: "button"
  }, "Add your own")), /* @__PURE__ */ React.createElement("div", {
    className: "jokes-outlet"
  }, /* @__PURE__ */ React.createElement(import_react4.Outlet, null)))));
}

// route:C:\Users\Atratus\Documents\Dev\jokes-app-deploy\jokes-remix\app\routes\jokes\$jokeId.tsx
var jokeId_exports = {};
__export(jokeId_exports, {
  default: () => JokeRoute
});
function JokeRoute() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Here's your hilarious joke:"), /* @__PURE__ */ React.createElement("p", null, "Why don't you find hippopotamuses hiding in trees? They're really good at it."));
}

// route:C:\Users\Atratus\Documents\Dev\jokes-app-deploy\jokes-remix\app\routes\jokes\index.tsx
var jokes_exports2 = {};
__export(jokes_exports2, {
  default: () => JokesIndexRoute
});
function JokesIndexRoute() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Here's a random joke:"), /* @__PURE__ */ React.createElement("p", null, "I was wondering why the frisbee was getting bigger, then it hit me."));
}

// route:C:\Users\Atratus\Documents\Dev\jokes-app-deploy\jokes-remix\app\routes\jokes\new.tsx
var new_exports = {};
__export(new_exports, {
  default: () => NewJokeRoute
});
function NewJokeRoute() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Add your own hilarious joke"), /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, "Name: ", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "name"
  }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, "Content: ", /* @__PURE__ */ React.createElement("textarea", {
    name: "content"
  }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button"
  }, "Add"))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "63567902", "entry": { "module": "/build/entry.client-2LFM3MP3.js", "imports": ["/build/_shared/chunk-6DHI5EVP.js", "/build/_shared/chunk-IYRIQ6PI.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-DQBIHLCH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-35X6NULU.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/jokes": { "id": "routes/jokes", "parentId": "root", "path": "jokes", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/jokes-Z5YRZNY3.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/jokes/$jokeId": { "id": "routes/jokes/$jokeId", "parentId": "routes/jokes", "path": ":jokeId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/jokes/$jokeId-DGC3JBNE.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/jokes/index": { "id": "routes/jokes/index", "parentId": "routes/jokes", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/jokes/index-VZIUHQOT.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/jokes/new": { "id": "routes/jokes/new", "parentId": "routes/jokes", "path": "new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/jokes/new-2AVHRYXK.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-63567902.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/jokes": {
    id: "routes/jokes",
    parentId: "root",
    path: "jokes",
    index: void 0,
    caseSensitive: void 0,
    module: jokes_exports
  },
  "routes/jokes/$jokeId": {
    id: "routes/jokes/$jokeId",
    parentId: "routes/jokes",
    path: ":jokeId",
    index: void 0,
    caseSensitive: void 0,
    module: jokeId_exports
  },
  "routes/jokes/index": {
    id: "routes/jokes/index",
    parentId: "routes/jokes",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: jokes_exports2
  },
  "routes/jokes/new": {
    id: "routes/jokes/new",
    parentId: "routes/jokes",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  }
};

// server.js
function getLoadContext(event, context) {
  let rawAuthorizationString;
  let netlifyGraphToken;
  if (event.authlifyToken != null) {
    netlifyGraphToken = event.authlifyToken;
  }
  let authHeader = event.headers["authorization"];
  let graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  if (authHeader != null && /Bearer /gi.test(authHeader)) {
    rawAuthorizationString = authHeader.split(" ")[1];
  }
  let loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader
  };
  Object.keys(loadContext).forEach((key) => {
    if (loadContext[key] == null) {
      delete loadContext[key];
    }
  });
  return loadContext;
}
var handler = (0, import_netlify.createRequestHandler)({
  build: server_build_exports,
  getLoadContext,
  mode: "development"
});
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=server.js.map
