# MyGreatTeam Profile Generator

![License badge](https://img.shields.io/badge/License-ISC-blue.svg)

## Description

This is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Table of Content

- [Installation](#installation)

- [Technology](#technology)

- [Usage](#usage)

- [Contributions](#contributions)

- [License](#license)

- [Questions](#questions)

## Installation

_Steps require to install this project and to get the development environment running:_

1. In order to use this application, first you need to run the command below in the terminal:

```bash
npm init
```

2. Run the command below in the terminal to install the Inquirer package:

```bash
npm i inquirer
```

2. Run the command below in the terminal to install the Jest testing package:

```bash
npm i jest
```

## Technology

- HTML
- BootStrap
- JavaScript
- Node.js
- [Inquirer](https://www.npmjs.com/package/inquirer): For collecting input from the user.
- [Jest](https://www.npmjs.com/package/jest): For running the unit tests.
- The application have `Employee`, `Manager`, `Engineer`, and `Intern` classes.

## Usage

- Link to a walkthrough video that demonstrates its functionality:
  - Video link: https://vimeo.com/541192347

### Steps to generated the web page:

1. Run the following command in the terminal:
```bash
node index.js
```
2. Answer the questions that prompt in the terminal:
   ![Questions in the Terminal](/Assets/img/questions.png)

3. Go to the output folder > index.html to find the generated Team Profile web page:
   ![Screenshot of the live generated web page](/Assets/img/html.png)

### Steps to run the test:
1. Run the following command in the terminal:
```bash
npm run test
```
2. If all the test were PASS, you will see this message:
   ![Test](/Assets/img/test.png)


## Contributions

The following were contributors to this project:

- [Nadia Dorado](https://github.com/ndorado3)

## License

ISC License (ISC)

Copyright 2021 Nadia Dorado

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE
