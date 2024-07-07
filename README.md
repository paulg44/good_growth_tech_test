## Good Growth Technical Test

# Description/Overview

The brief was to add a code snippet(JavaScript script) to the national trust website, to be able to display the weather of a specific location.

<!-- Add here non technical overview. Video?-->

Tech Stack

- JavaScript
- Jest

If you wish to run locally

- git clone https://github.com/paulg44/good_growth_tech_test
- cd good_growth_tech_test
- from here you can either follow the instruction below or start a live server if you use one

To see how the code I have written displays, please

- copy the code in the localWeather.js file
- navigate to the National Trust Page here https://www.nationaltrust.org.uk/visit/warwickshire/packwood-house
- open the developer tools (for google chrome in windows ctrl+alt+i or Option + ⌘ + J for macOs)
- open the console tab and paste in code from localWeather.js
- the weather should appear at the bottom of the page

# Constraints/Difficulties

- Single Script
  - Doing this in a single script was challenging in many ways. Firstly there is a lot of code in one particular function. For example, all the elements needed to display the weather data need to be created within the JavaScript file. These then need to have the data added(appended) to them alongside the styling. I made a couple of attempts to add the weather container into the page better than it's current location at the bottom of the page, however none of these looked acceptable. I thought this was the perfect spot in the below image, partly because that's where all the extra information is and it's pretty front and center. I left my attempt in but I couldn't seem to access the existing element properly.
![good_growth_jpg](https://github.com/paulg44/good_growth_tech_test/assets/100803588/ce9bb44a-8ea6-456f-b12e-f2624bae7c98)

- Existing Functionality
  - After researching the network requests I don't forsee any issues with my code being added to the existing page. However, there maybe the possibility of conflicts with the existing testing suite. I also would have liked to be able to find a "location" in the network requests so I could use this on my API if this was in production, I could not find such a thing to use. I did find a path in one of the existing scripts (**NEXT_DATA**) which could possibly be used to make the weather fetch dynamic.

# A/B Testing

One way to A/B test this change would be to have two versions of the same page split between user traffic on the site. If the weather data was in a prominent position such as in the header with the opening times, price & map, we could see if the weather version increases click rate to more information about a particular venue. To add on to this, we could then test if the weather read as "Sun" or "Rain" would the click rate be different. As an example showing the weather could be great on a sunny day and the click trough rate increases, however, showing it on a rainy day may make the click rate decrease. Google Analytics could be one tool to test this.

# My Testing

I would have liked to add some mock fetch functions to make sure the data is being called correctly. However this has been a real struggle today. I'm unsure if because I'm using one script and all my functionality is in one place it's causing issues in the dom as Jest doesn't normally test the dom. I've tried adding JSDOM and tried a few different ways. I have left these in but commented out for posterity.

# Takeaways/Extras

A very enjoyable tech test. I've learnt some new things along the way, for example just the whole process of creating a completely new element and adding it into existing code using a script. I also have learnt that there are many nuances to testing and that I still have a long way to go. I usually write and test my projects in React so I need to understand better the way to test fetch functions in plain JavaScript whilst interacting with the dom.
