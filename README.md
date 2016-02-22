# Clear <a href="https://circleci.com/gh/wulkano/clear" rel="Clear CircleCI Project">![Clear CircleCI Project](https://img.shields.io/circleci/project/wulkano/clear.svg)</a>
Clear.css is a CSS reset that aims to help modern browsers act more consistently, making it easier for front-end developers to get their projects off the ground without messing around with common lines of CSS found in at the start of projects.

Clear.css is developed with help from PostCSS and aims to be configurable through variables and easy toggles for reset features that you need. Look for the `configuring` section for more information.


## Install
Clear is available via npm or direct download.

#### Installing with npm:
`npm install --save clear.css`


## What can Clear.css do
Please read the code comments within `./src/clear.css` as they help to explain what clear does specifically. At least until we can get a proper guide up!


## Configuring
If you'd like to help contribute to Clear.css or simply configure it suit your project you can do so with our gulpfile.

All you need to do is clone this repo, run `npm install -g gulp-cli` and `npm install` in the directory you cloned to and then run `gulp`. This will start a development task that watches for changes within `./src/clear.css` and will pipe those changes into a pure CSS format with both un-minified and minified files in `./dist/`.

At the top of the file, there are variables which aim to make it easy for you to configure your clear.css file without diving into the code or worrying about any ramifications.


## Contributing
Please read through any issues that may be open if you've noticed an issue and check that an issue doesn't already exist in the repo. Otherwise, please feel free to submit an issue as long as it isn't asking for help how to use a css file. For help there please head to stackoverflow or the like.

When modifying clear.css preparing for a Pull Request, please run `gulp lintStyles` before submitting a Pull Request to make sure any tests won't fail. We like to keep the code nice and tidy and working.

Please also search for any pull requests that may have attempted to do the same thing you're implementing. We may have closed the PR due to a number of reasons.
