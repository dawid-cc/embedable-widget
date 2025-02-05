# Embedable Widget

## Requirements

- **Node.js**: Version 20 or higher
- **Yarn**: Recommended for package management

## Scripts

In the project directory, you can run the following scripts:

### install dependencies

```
yarn
```

Installs the dependencies specified in the `package.json` file.

### devserver

```
yarn dev
```

Starts the development server on localhost

### build

```
yarn build
```

Bundles the app in single static file that can be included in any website via script tag.

### imitate website and widget

```
yarn serve
```

> **_NOTE:_** You need to run yarn build before running this command.

Starts two servers, one for the app and another for the widget. Servers work on different ports, simulating the widget being included in a different website.
