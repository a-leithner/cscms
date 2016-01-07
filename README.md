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

# Credits
Webfont "BebasNeue.otf" was made by Dharma Type, downloaded form 1001fonts.com
Webfont "Roboto-Regular.ttf" and "RobotoCondensed-Regular.ttf" downloaded from google.com/fonts

# System Requirements
To run Slave, you need a working web server e.g. Apache HTTPD 2, because Slave uses JS's XMLHttpRequest.

# Installation
1. Clone this repository into the folder you set in Apache's Configuration as the document root.
2. Open .../assets/json/conf.json in your preferred editor (e.g. VisualStudio Code, Brackets, etc.)
3. Edit the tags as you like, for example:<br>
   <code>{<br>
       "title":"MyPage",                                => The Name of your Webpage.<br>
       "headerbgcolour":"white",                        => The Background-Colour of the header (could be any CSS-Colour)<br>
       "headerimg":"assets/img/logo.png",               => Your logo.<br>
       "headerbgimg":"assets/img/myheroimage.png",      => Your hero image.<br>
       "initialpagetoparse":"assets/pages/index.page",  => The start page.<br>
       "navigationfile":"assets/pages/navigation.page"  => The page used for the navigation.<br>
   }</code>
4. Open index.html and choose a CSS-Stylesheet (slave.css, slave-standard.css or slave-modern.css), put it into the "link" tag in the head-section.
5. Open .../assets/pages/index.page in your editor and edit it that it fits to your requirements.
6. Open .../assets/pages/navigation.page and edit that it fits to your links. When linking to a slave-page,
please remember that the a-elements have to look like <code>< a href="#" onclick="openPage('PAGE')" >My super link</ a ></code>!

# FAQ
Well, not frequently asked, but questions that can be asked:<br>
**Q:** Is there any Admin-UI?<br>
**A:** There will be in near future.<br><br>
**Q:** Can I modify the source code?<br>
**A:** Since this is released under GPL v3, yes, you can!<br><br>
**Q:** How do I make new styles?<br>
**A:** The only thing to know is about CSS3 and off you go!<br><br>
If you have a question, please notify me!
