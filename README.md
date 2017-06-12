# Slave CMS
A pseudo-CMS written in JavaScript, JSON, HTML5 and CSS3 which is rendered in the client's browser.

# Background
I've written this software because I needed a fast CMS-like software for my website
and installing Plone or Drupal or something else was not suitable to me.

# How does it work?
There's one file in the main folder, called index.html. It links to four JavaScript files.
The file "onload.js" gets the configuration file, a .json file, lets the "parser.json" parse
the initial file set in the configuration onto the HTML-Element "body" and the navigation
from "navigation.page" onto the Element "nav". Every link that should be parsed by slave
should have an onclick-event which links to slave's javascript function "openPage(page)",
where "page" should be replaced with the page's name without the *.page extension.

# Credits
Webfont "BebasNeue.otf" was made by Dharma Type, downloaded form 1001fonts.com<br>
Webfont "Roboto-Regular.ttf" and "RobotoCondensed-Regular.ttf" downloaded from google.com/fonts

# System Requirements
~~*To run Slave, you need a working web server e.g. Apache HTTPD 2, because Slave uses JS's XMLHttpRequest.*~~<br>
**25th Jan 2016** Since slave is fully written in JavaScript, the only thing you need is a browser.

# Installation
1. Clone this repository into the folder you set in Apache's Configuration as the document root.
2. Open .../assets/json/conf.json in your preferred editor (e.g. VisualStudio Code, Brackets, etc.)
3. Edit the tags as you like, for example:<br>
(see assets/json/conf.json)<br>
<code>title</code> => The Name of your webpage.<br>
<code>headerbgcolour</code> => The CSS-Colour value of the background of the header (does **NOT** work with slave-modern.css).<br>
<code>headerimg</code> => Your logo.<br>
<code>headerbgimg</code> => Your hero image.<br>
<code>initialpagetoparse</code> => The welcome page displayed when first rendering Slave.<br>
<code>navigationfile</code> => The *.page file used for the navigation.<br>
4. Open index.html and choose a CSS-Stylesheet (slave.css, slave-standard.css or slave-modern.css), put it into the "link" tag in the head-section.
5. Open .../assets/pages/index.page in your editor and edit it that it fits to your requirements.
6. Open .../assets/pages/navigation.page and edit that it fits to your links. When linking to a slave-page,
please remember that the a-elements have to look like <code>< a href="#" onclick="openPage('PAGE')" >My super link</ a ></code>!

# Link creation
**(1) Add an a-element to your index.page**<br>
Open index.page from assets/pages/, add a simple a-element from html source.<br><br>
**(2) Remove <code>href</code> attribute**<br>
Use an onclick event instead: <code>onclick="openPage(href)"</code><br><br>
**(3) Replace <code>openPage(href)</code>**<br>
with <code>openPage(**yourPageNameWithoutExtension**)</code>

# FAQ
Well, not frequently asked, but questions that can be asked<br>
**Q:** Is there any Admin-UI?<br>
**A:** ~~*There will be in near future.*~~
~~**25th Jan 2016:** A desktop app written in JavaScript and Electron is going to be available here on GitHub soon.~~<br>
**12th June 2017** Since I have other projects, which are not OpenSource, obviously, that currently need more attention, I'm not planning to do something in that direction in the near future, but you could write one yourself...<br><br>
**Q:** Can I modify the source code?<br>
**A:** Since this is released under GPL v3, yes, you can!<br><br>
**Q:** How do I make new styles?<br>
**A:** The only thing to know is about CSS3 and off you go!<br><br>
If you have a question, please notify me!
