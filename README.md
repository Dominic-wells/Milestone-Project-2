# Milestone-Project-2 OP-Pass

# OP-Pass

![image of website mockup](assets/readme-assets/mockup.png)

A interactive front-end site that responds to the users' actions, allowing users to actively engage with data, alter the way the site displays the information to achieve their preferred goals.

[--Live Site--](https://dominic-wells.github.io/Milestone-Project-2/)

# Table of Contents

1. [Introduction](#introduction)
2. [User Experience](#user-experience)
   - [User stories](#user-stories)
3. [Design](#design)
   - [Site theme](#Site-theme)
   - [Colour Scheme](#colour-scheme)
   - [Typography](#typography)
   - [Skeleton](#skeleton)
   - [Features](#Features)

# Introduction

This website has been developed to inform visitors of their password strength, password best practices and even generate a secure password on request.

This is my Second milestone project with the Code Institute on the Full Stack Web Devlopment Program the main aim is to produce a responsive website with an interactive front-end using JavaScript.

# User Experience

### Project Goals

- To incorporate javascript into html
- To produce an informative website
- To display easily accessible information

## User stories

- #### First Time Visitor Goals

1. As a first-time visitor, I want a tool to evaluate the strength of my password, so I know it's safe to use.

2. As a first-time visitor, I want the site to be easy to navigate, easy to understand and visually pleasing, so that I can find the information I need and have a pleasant experience whilst doing so.

3. As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about password security, so I can make better security related decisions in the future.

4. As a First Time Visitor, I Would like to build a strong password.

- #### Returning Visitor Goals

1. As a returning visitor I want, to be able to connect the website developer, so that I can ask any questions I may have.

2. As a returning visitor I want, to able to view other tools the developer might have made. so that I can explore other tools and programs

3. As a returning visitor, I want to be able to able to generate my own secure password, so I don't have to think of one myself

4. As a returning visitor, I want to be able to navigate to the area of the website I require, with speed.

[Back to top](#OP-Pass)

---

# Design

## Site theme

I wanted to avoid using visual effects that would be too distacting to users keeping the theme of minimalist aesthetics.

## Structure

The site site will be a "One Pager" will all the information the users will need on one page

## Colour Scheme

I wanted to use blacks and grays giving a nice contrast for readers.

<img src="assets/readme-assets/coloursused.png">

## Typography

Arimo was used with a default backup as sans-serif.
I used 'Nothing You Could Do' with cursive to give the text under the logo a hand written look.

## Skeleton

I produced digital wireframes using Balsamiq.

When producing my wireframes, I decided to develop my ideas in stages, I attempted to improve my designs naturally by reviewing the wireframes after completion and finding areas of improvement.

I developed wireframes for different platforms, desktop, tablet and mobile where used.

Balsamiq wireframe Designs:

# Wireframes

![Desktop Wireframe](/assets/readme-assets/wireframe/OP%20Pass%20Desktop%20stage3.png)
![Mobile Wireframe](/assets/readme-assets/wireframe/Op%20Pass%20Mobile%20stage3.png)
![Tablet Wireframe](/assets/readme-assets/wireframe/OP%20Pass%20Tablet%20stage2.3.png)

<details><summary>A rough wireframe design in Balsamiq desktop style stage 1</summary><img src="/assets/readme-assets/wireframe/OP Pass Desktop.png"></details>
<details><summary>A rough wireframe design in Balsamiq desktop style stage 2</summary><img src="/assets/readme-assets/wireframe/OP Pass Desktop stage3.png"></details>
<br>
<details><summary>A rough wireframe design in Balsamiq mobile style stage 1</summary><img src="/assets/readme-assets/wireframe/Op Pass Mobile.png"></details>
<details><summary>A rough wireframe design in Balsamiq mobile style stage 2</summary><img src="/assets/readme-assets/wireframe/Op Pass Mobile stage2.png"></details>
<br>
<details><summary>A rough wireframe design in Balsamiq tablet style stage 1</summary><img src="/assets/readme-assets/wireframe/OP Pass Tablet.png"></details>

## Features

-Fully responsive across a wide range of devices and systems<br>
-A sidenav with links to sections of the website<br>
-A password strengh tester<br>
-A password generator with copy button<br>

## Password Strengh Tester

Visitors can enter a password in the password textbox and they will receive a response to the password entered.

The response is based on the input entered passing a programming conditional statement using RegEx and commonly used passwords in a list using Javascript.

![image of a password found on list outcome](assets/readme-assets/listpassword.png)

The above user entered a password that was on the common password list.

![image of password found to be weak outcome](assets/readme-assets/weakpassword.png)

The above user entered a password that was found to be weak or unusable.

![image of password found to be a good outcome](assets/readme-assets/goodpassword.png)

The above user entered a password that was found to be good.

## Password Generator

Visitors can generate a password based on button and text inputs.

Visitors can select what characters and length they wish their password to be.
The user inputs will be passed to an external API to [passwordwolf](https://passwordwolf.com/) The password is then displayed for the user. The user can also click a button to have the password copied

This is done by capturing user inputs from radio buttons and the text box, making them into variables to pass on the values to a URL then using the Fetch(Get) to receive the data and then display the password to the visitor

![image of Password Generator with an outputted password](assets/readme-assets/passgen.png)

The above user quested a password that was 6 characters long and used upper,lower and special characters

## Testing

Code was manually tested by myself as I developed. I also used online tools such as JSHint, chromes Lighthouse, wave.webaim.org and W3C Markup Validator to determine if I missed anything.

![image of lighthouse desktop](assets/readme-assets/lighthouse/oppassdesktop.png)
![image of lighthouse mobile](assets/readme-assets/lighthouse/oppassmobile.png)
![image of accessibility fromwave.webaim](assets/readme-assets/validation/Accesstest.png)
![image of CSS Validator](assets/readme-assets/validation/cssValidator.png)

## Manual testing

I used google chrome developer mode to test the website on different devices I also tested the website on my phone (google pixel 6).

While manual testing I made sure that the:

- The site was visible correctly on all devices
- Buttons were operational
- Text input box's allowed all users to input correctly
- Web links opened up new windows

## User Stories Testing

1. As a first-time visitor, I want a tool to evaluate the strength of my password, so I know it's safe to use.

- This was met by providing a password strength tester.

2. As a first-time visitor, I want the site to be easy to navigate, easy to understand and visually pleasing, so that I can find the information I need and have a pleasant experience whilst doing so.

- This was met by providing a minimalist approach to the site and correct use of headers (h1,h2) etc

3. As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about password security, so I can make better security related decisions in the future.

- This was met by providing text and best practice rules throughout the site

4. As a First Time Visitor, I Would like to build a strong password.

- I met this by providing a password generator

- #### Returning Visitor Goals

1. As a returning visitor I want, to be able to connect the website developer, so that I can ask any questions I may have.

- I met this by adding a link to my github

2. As a returning visitor I want, to able to view other tools the developer might have made. so that I can explore other tools and programs

- I met this by adding a link to my github

3. As a returning visitor, I want to be able to able to generate my own secure password, so I don't have to think of one myself

- I added copy button to the password generator to allow visitors to quickly copy passwords across devices

4. As a returning visitor, I want to be able to navigate to the area of the website I require, with speed.

- I met this by adding nav-links to sections of the website

## Bugs and Fixes

### Password Strenth tester

- I didn't want to limit the number of characters a visitor could input in case they used a long password so passwords with exceedingly long passwords might give back a false positive

### Password generator

- I originally had a checkbox for the user inputs I was unable to proceed with the checkbox as I needed to send "1 or 2" values to the API (the checkbox can't give a value if it's not clicked) and couldn't use one box for each form. I moved to radio buttons for their ability for a solid "yes/No" function.

- One API would often Ip ban me for 4 hours after sending too many requests in a short amount of time while I was debugging.

- One API would give a CORS error so I had to add a proxy server to the URL before sending allowing visitors without a browser addon such as Moesif CORS to allow them to get a response

- The API will only accept a length of up to 128, If the visitor enters more than this they will not get a response I have also logged an error with advice on how to prevent this

## Technology used

- HTML - was used to build the structure of the site
- CSS - to style content
- [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- Javascript - was used for the interactive features on the website

  ### Project management

- [Visual Studio Code](https://code.visualstudio.com/) - IDE used to code the site and its features
- [Font Awesome](https://fontawesome.com/) - Used for icons on navbars
- [Google Fonts](https://fonts.google.com/) - Used to load Fonts onto site

  ### Online resources

- [Stack Overflow](https://stackoverflow.com/) - was used to answer and look up questions I might have had
- [techsini](http://techsini.com/multi-mockup/index.php) - was used to make my mockup to display the site on different screens

# Credits

## Code

- [w3schools](https://www.w3schools.com)- Guidance across all site
- Others mentioned in code comments

### Acknowledgements

- My Mentor Ronan For pointing me in the right dierection and providing great feedback.
