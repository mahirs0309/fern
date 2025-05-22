# Plant Store API Documentation

This repository contains the source code for the Plant Store API documentation website. The site is built using [Fern](https://buildwithfern.com), a powerful documentation platform for APIs.

## Features

- **Comprehensive API Documentation**: Detailed information about all Plant Store API endpoints, request formats, and response structures.
- **Interactive Examples**: Code snippets and examples for each API endpoint.
- **Modern Design**: Clean, responsive design with a plant-themed color scheme.
- **Custom Components**: Utilizes Fern's component library for enhanced documentation.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install the Fern CLI:

```bash
npm install -g fern-api
```

2. Clone this repository:

```bash
git clone https://github.com/mahirs0309/fern.git
cd fern
```

### Local Development

To run the documentation site locally:

```bash
fern start
```

This will start a local development server, typically at http://localhost:8000.

### Making Changes

The documentation is primarily configured through the files in the `fern` directory:

- `fern/docs.yml`: Main configuration file for the documentation site
- `fern/pages/home.mdx`: Directory containing the MDX file for our landing page
- `fern/openapi/api.yml`: Contains the OpenAPI definition for the Plant Store API
- `fern/custom.css`: Custom styling for the documentation site
- `fern/custom.js`: Custom JavaScript for the floating action button

### Publishing Updates

To publish updates to the live documentation site:

```bash
fern generate --docs
fern docs dev
```
Then open the localhost link that is returned

## Support

If you have any questions or need assistance with the documentation, please contact our support team at support@buildwithfern.com.

## License

This project is licensed under the Apache 2.0 License - see the LICENSE file for details. 