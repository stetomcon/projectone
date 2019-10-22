                            * WIC FINDER *

link?
https://stetomcon.github.io/WICPROJECT/

What is "WIC FINDER"?
WIC FINDER is an application to help people find vendors that are in Connecticut's Women Infant & Children program. One simply goes to the homepage and you can either type in your city or zipcode, and all the vendors of either location will populate. There is also a new section, where farmers market are also in the program. Because there arent that many, the easiest way to find one's local farmer's market that also is in the program is by counties. In the Drop Down you pick your county and the markets, time and websites that are in the program will populate.
There's also two other pages, one is the about page, which will explain what the applicatin is for, and the other one is information on CT's program itself.

What API's were used?
There are two API's that were used for this application. Both came from CT's Data website. "https://data.ct.gov". The farmers market one is "https://data.ct.gov/dataset/Farmers-Markets/qkcc-8trv" and the second one is "https://data.ct.gov/Health-and-Human-Services/WIC-Authorized-Vendors/jk32-cd4i"

What was used to create the application?
HTML, CSS, JavaScript, JSON, Jquery and AJAX(serve request) were all used to create the application. My approach taken was to map out the page first. knowing which links would go where. Once i knew how that would look, i started creating the HTML's for each and including the CSS's for each since i knew each page would have a different but similar look. Once that was done i created the javascript page to make sure all my information would be able to be used as well as connecting all those pages to make sure my sticky nav would work. after all that was done i decided to add an extra API, for that i decided to add that API to new file that would directly affect that new html file.

What issues did i run into?
My first major issue i ran into was that my original idea couldn't be executed because the API for that page wasn't available. Once I passed that first hurdle, everything else felt like a rollercoaster, as some days everything would work great and others i would find a problem that i had ran into. for example, the sticky navigation being see-thru but also causing the text in the article running into it. I created a rule that once the page would scroll either up or down the opacity from it would be opaque. on the farmers market page, the only information that would populate would be "Fairfield" the first county in the drop-down. Once i added all of them into a class that issue was fixed. I was able to make it mobile friendly. For example changin the Header's name into a simple letter once the size would be too small. I used amiresponsive.com to check that.
