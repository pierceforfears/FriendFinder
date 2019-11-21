# Dr. Leo Spaceman's Scientific Friend Finder

Dr. Leo Spaceman's Scientific Friend Finder is a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from a user survey of 10 questions.  Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with the question. After the form is sumitted, the scores are compared with those from other users. The app will then display the name and picture of the user with the best overall match.

## Preview Site

https://funfriendfinder.herokuapp.com/

## Built With

* Node.js
* Express
* JavaScript
* Bootstrap
* HTML
* CSS

## Technical details

Dr. Leo Spaceman's Scientific Friend Finder uses Express to handle routing.

The server.js file uses the npm packages: express, body-parser, path.

The apiRoutes.js file includes two routes:
* A GET route with the url /api/friends
* A POST route /api/friends. This route handles incoming survey results which is also be used to handle the compatibility logic.

Compatibility will be determined based on the following.
* Each user's results is converted into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
* The the difference between the user's scores is compared to other users' scores, question by question. Then will add up the differences to calculate the totalDifference.

The closest match will be the user with the least amount of difference.

Once the the current user's most compatible friend is found, FriendFinder will display the result as a modal pop-up.

The result will display both the name and picture of the closest match.

## Screenshots

### Home Page

![Screen Shot 2019-11-21 at 6 16 18 PM](https://user-images.githubusercontent.com/20098958/69384711-0ad5e980-0c8b-11ea-9c6b-4d61b51db509.png)

### Survey Page

![Screen Shot 2019-11-21 at 6 15 51 PM](https://user-images.githubusercontent.com/20098958/69384712-0ad5e980-0c8b-11ea-9844-bc37beeb4ebb.png)

### Results Modal

![Screen Shot 2019-11-20 at 9 41 56 PM](https://user-images.githubusercontent.com/20098958/69299485-a3626000-0bde-11ea-88f5-a70cb1b69c3a.png)