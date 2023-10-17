# cold-plasma

A simple library of components

## Installation

This is a [Node.js](https://nodejs.org/) module available through the
[npm registry](https://www.npmjs.com/). It can be installed using the
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
or
[`yarn`](https://yarnpkg.com/en/)
command line tools.

```sh
npm install cold-plasma --save
```

## Components

First, in main file import styles

```js
import 'cold-plasma/dist/style.css';
```

### Button Component

For this moment, exist Button component, import as

```js
import { Button } from 'cold-plasma';
```

The `Button` component supports the following properties:

-  `appearance?: 'solid' | 'bordered' | 'link'` (optional): Defines the visual appearance of the button. You can choose between 'solid,' 'bordered,' or 'link.'

-  `color?: COLORS` (optional): Specifies the color of the button. You can choose from the following predefined color constants: 'pink,' 'orange,' 'deep,' 'red,' 'blue,' 'yellow,' 'green,' or 'purple.'

-  `size?: SIZES` (optional): Sets the size of the button. You can select one of the available size constants: 'xs,' 'sm,' 'md,' or 'lg.'

-  `type?: 'submit' | 'reset' | 'button'` (optional): Defines the type of the button, which is used in forms. You can choose 'submit,' 'reset,' or 'button.'

-  `disabled?: boolean` (optional): If set to `true`, the button will be disabled.

-  `active?: boolean` (optional): If set to `true`, the button will be in an active state.

-  `block?: boolean` (optional): If set to `true`, the button will take up the full width of its container.

-  `isLoading?: boolean` (optional): If set to `true`, the button will indicate that it's in a loading state.

#### Constants

The following constants are available for the `color` and `size` properties:

-  `COLORS`: 'pink' | 'orange' | 'deep' | 'red' | 'blue' | 'yellow' | 'green' | 'purple'

-  `SIZES`: 'xs' | 'sm' | 'md' | 'lg'

Use these constants to ensure consistency and provide clear values for the `color` and `size` options when using the `Button` component.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Clone the repository to your local machine.
3. Create a branch for your changes: `git checkout -b my-feature-branch`.
4. Make your changes and commit them: `git commit -m 'Add new feature'`.
5. Push your changes to your fork: `git push origin my-feature-branch`.
6. Create a pull request in this repository.

We welcome contributions and appreciate your help in making this project better.

## Changelog

- v.1.0.x - Add button component, try upload to npm
