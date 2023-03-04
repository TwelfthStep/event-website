# Event Registration Website (Next.js)

A generic template for event registration.

## Setup

1. Clone this project
```
git clone git@github.com:TwelfthStep/event-registration-website.git
```

2. Set up your `next.config.js` file
- Enter `touch next.config.js` in this project's root directory
- Copy in the contents of `example-next.config.js` file located in this project's root directory as a template to `next.config.js`
- Update the values of each of the parameters as required

3. Install `react-braintree-components`
Please follow the instructions to install this required module from the [react-braintree-components](https://github.com/LigniteSoftware/react-braintree-components) project.

Make sure you install this module one folder below the root directory of this Next.js project.

You will need an active Braintree account to use it as a payment provider.

4. Install npm dependencies
```
npm i
```

5. Run the development server
```
npm run dev
```

Open [http://localhost:3000/](http://localhost:3000/) with your browser to see the result.