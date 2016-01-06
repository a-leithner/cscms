# Slave CMS
A pseudo-CMS written in JavaScript, JSON, HTML5 and CSS3.

# Background
I've written this software, because I needed a fast CMS-like software for my website
and installing Plone or Drupal or something else was not suitable to me.

# How does it work?
There's one file in the main folder, called index.html. It links to four JavaScript files.
The file "onload.js" gets the configuration file, a .json file, lets the "parser.json" parse
the initial file set in the configuration onto the HTML-Element "body" and the navigation
from "navigation.page" onto the Element "nav". Every klick on a link that should be parsed
by slave should look like this: <code>< a href="#" onclick="openPage('PAGE')" >My super link</ a ></code>,
which opens the page "PAGE.page" by opener.js. login.js is currently not in use.

# Installation
Coming soon.
