# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/responsive-faq-accordion-card-html-css-js-OzefbQbq4](https://www.frontendmentor.io/solutions/responsive-faq-accordion-card-html-css-js-OzefbQbq4)
- Live Site URL: [https://dnksebastian.github.io/Frontend-Mentor-Newbie-Solutions/faq-accordion-card-main/](https://dnksebastian.github.io/Frontend-Mentor-Newbie-Solutions/faq-accordion-card-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JS

### What I learned

```js
const siblings =
    this.closest(".accordion-wrapper").querySelectorAll(".accordion-element");

  siblings.forEach((element) => {
    if (element !== this) {
      element.classList.remove("active");
      element
        .querySelector(".faq-question")
        .classList.remove("question-bolded");
      element.querySelector(".faq-icon").classList.remove("faq-icon-active");
      element
        .querySelector(".faq-answer")
        .classList.remove("faq-answer-visible");
    }
  });
};
```



### Useful resources

- [Stack Overflow - Accordion](https://stackoverflow.com/questions/69145525/accordion-that-allows-only-one-open-at-a-time) - This helped me understand how the accordion logic can be implemented.


