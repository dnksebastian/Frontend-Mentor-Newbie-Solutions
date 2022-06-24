# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)



## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements


### Links

- Live Site URL: [https://dnksebastian.github.io/Frontend-Mentor-Newbie-Solutions/nft-preview-card-component-main/](https://dnksebastian.github.io/Frontend-Mentor-Newbie-Solutions/nft-preview-card-component-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

How to style pseudoelements with CSS.


```css
#imgwrapper:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  background-color: var(--primary-cyan);
  opacity: 0%;
  transition: 0.4s;
  background-image: url(/images/icon-view.svg);
  background-repeat: no-repeat;
  background-position: center;
}
#imgwrapper:hover:after {
  opacity: 50%;
}
```


### Useful resources

- [Transparent overlay](https://stackoverflow.com/questions/18322548/black-transparent-overlay-on-image-hover-with-only-css) - This helped me style the transparent overlay over image using only CSS and pseudoelements.
