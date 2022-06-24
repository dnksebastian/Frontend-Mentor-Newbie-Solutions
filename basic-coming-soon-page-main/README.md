# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
    - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/vanilla-htmlcssjs-basic-responsive-coming-soon-page--BnbyFs-K](https://www.frontendmentor.io/solutions/vanilla-htmlcssjs-basic-responsive-coming-soon-page--BnbyFs-K)
- Live Site URL: [https://dnksebastian.github.io/Frontend-Mentor-Newbie-Solutions/basic-coming-soon-page-main/](https://dnksebastian.github.io/Frontend-Mentor-Newbie-Solutions/basic-coming-soon-page-main/)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
-  Mobile-first workflow

### What I learned

Using :invalid pseudo-class
```
input:focus:invalid {
  border: 2px solid var(--soft-red);
  background: url(/assets/images/icon-error.svg) no-repeat scroll 75% 40%;
}
```

Using 'invalid' event listener
```
inputElement.addEventListener("invalid", function (event) {
  event.preventDefault();
  errorMessage.classList.add('show-error');
});

```

### Useful resources

https://stackoverflow.com/questions/7920742/delay-html5-invalid-pseudo-class-until-the-first-event - solution to the :invalid event styling
