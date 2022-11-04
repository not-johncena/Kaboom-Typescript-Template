# Welcome!

I've been interested in development with Kaboom JS Recently so I decided to make a template for starting a Kaboom project with VSCode
It's nothing too fancy but it's enough to get you started on your Kaboom journey!

# Getting started

To get started, all your gonna need is [NodeJS](https://nodejs.org/).
After you install it, just clone this repository anywhere you want and run this in your terminal:

    npm run dev

Then, go to [Localhost:800](http://localhost:8000/) and your game should appear.
Magic!

Now you can edit main.ts and get to work!
Remember to eventually edit the title in index.html.

# Adding images

I've added a couple started images but you can't make a game with only those. 
To add an image, either open up the folder in the file explorer, or in the VSCode explorer, and drop your images in www/sprites.
And then an example of loading images would be,

    loadSprite("mark", "sprites/mark.png");

The sprites I've included are:

1. Mark
2. Bean

# Everything else

I'm not gonna sit here and talk about everything built into Kaboom.
But I am gonna send you some links for happy learning.

1. [The Kaboom docs](https://kaboomjs.com/). This is gonna be your primary source of information while learning.
2. [The Kaboom Playground](https://kaboomjs.com/play?demo=add). This has a whole bunch of examples to learn the basics of Kaboom.
3. [Intro to Kaboom](https://kaboomjs.com/doc/intro). This is a tutorial by Kaboom for beginners on remaking the chrome dinosaur game in Kaboom.
4. [Project Based Tutorials on Kaboom](https://makejsgames.com/). These are some tutorials that teach you how to make full projects in Kaboom.