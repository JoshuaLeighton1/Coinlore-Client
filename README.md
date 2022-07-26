This is an API that pulls real time crypto-currency coin data from the CoinLore API written with React and TypeScript for the client facing front end, and Apollo-server/Graphql for the back end.

To bootstrap the document install bootstrap in the client folder using the command : npm install react-bootstrap bootstrap. Once complete you can import specific components rather than the entire library like this:

import Button from 'react-bootstrap/Button';

// or less ideally import { Button } from 'react-bootstrap';

An import for CRA is also available to install use the command : npm install sass or yarn add sass

To customize Bootstrap, create a file called src/custom.scss (or similar) and import the Bootstrap source stylesheet. Add any overrides before the imported file(s). You can reference Bootstrap's documentation for the names of the available variables.

// Override default variables before the import $body-bg: #000;

// Import Bootstrap and its default variables @import '~bootstrap/scss/bootstrap.scss';# Coinlore-Client
