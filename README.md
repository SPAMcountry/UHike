# UHike

our group app that follows a user into their own hiking experience.

## SPAMcountry Members

- Sunny Lee
- Patrick Laurion
- Mohsin Behi

# User Stories

1. title - Hike pictures
    user story sentence - I want to see pictures of the hike spot
    feature tasks - include API that will get instagram photos of trails based on location or hashtags
    acceptance test - picture must render to the correct location and displayed on front end

2. title - Hike Spot  
    user story sentence - I want to know where the location of the hike spot is
    feature tasks - bring location data from another API (stretch goal: difficulty level)
    acceptance test - Ensure the locations are valid and shown in the front end

3. title - Profile
    user story sentence - I want to keep all the locations that I went to
    feature tasks - create a profile that will keep location data specific to the user
    acceptance test - ensure that each user will get their own data

4. title - Weather
    user story sentence - As a user I would like to know the weather at the location before I depart to that location
    feature tasks - add weather API render 5 day forecast for location
    acceptance test - Is not persistant data

5. title - Directions
    user story sentence - As a user I want to know how to get to the hiking spot
    feature tasks - GPS navigation
    acceptance test - The map will display and show deirections to get to the spot.

Does a single item in your database “belong to” just one other item in your database? For example, a person has one passport, and a passport belongs to a single person.
Does a item in your database “belong to” multiple other items in your database? For example, a house has many residents, and each resident has one primary house.
Do many items in your database relate to many other items in your database? For example, a band has many musicians, and a musician can be in many bands.
Also, include for each seperate collection:

The name of each property stored in the collection.
The required data type.
An indication if this collection is associated with another collection.
