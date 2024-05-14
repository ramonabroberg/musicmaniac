# musicManiac

MusicManiac is a website made for musicians that easily wants to get in touch with other musicians. On this website you can view posts that users upload and if you create an account you can even make posts yourself! Do you play an instrument and are searching for a band or do you and your bandmates looking for the missing piece in your band? At musicManiac you can easily search for specific posts so you can find what you're looking for in a matter of seconds! You do this by searching for the instrument you are looking for in the search field at the top of the page.

### [You can see the website live here](https://musicmaniac-157565ad27af.herokuapp.com/)

# UX

This website targets two different groups:

1. Musicians that easily wants to find bands to play music with in their area. 
2. Bands that are looking for a bandmate to play msuic with.

# User Stories

### [Link to my project with user stories](https://github.com/users/ramonabroberg/projects/7)

The goal with this website is to make is easy for musicians to get in touch with other musicians. To display posts that users upload so they can find the right musician in their area.

The users have the ability to create an account. When they're logged in they will be able to create posts and also edit and delete them if necessary. They can use the searchbar on the home page to filter the posts by title, instrument, genre, city, and username to make it easy to find what they're looking for. If they want more information about a user they can click on the username or profile picture to see the user's profile page.

### Navigation & Authentication:
- As a user I can see the navbar from every page so that I easily can navigate through the website.
- As a logged out user I can see the sign in and sign up icons so that I can sign in and sign up if I want to.
- As a logged in user I can see the Sign out icon in the navbar so that I can log out when I want to.
- As a user I can see my avatar with profile picture in the navbar so that I can identify my account.
- As a user I can see my username next to my avatar so that it's even more clear that I'm the one who's logged in.
- As a user I can navigate fast through the website so that I can see the pages without them refreshing.
- As a user I can sign up for an account so that I can do everything that is restricted for logged out users.
- As a user I can sign in so that I can do everything that is restricted for logged out users.
- As a user I can remain logged in as long as I want to so that I don't get logged out before I want to.

### Create and intererested posts:
- As a user I can create new posts so that everyone can see them.
- As a logged in user I can click on a star icon on all the posts so that the user that uploaded the post will know that I'm interested.

## Comments:
- As a logged in user I can comment on a post so that I can share what I think of it.
- As a user I can view comments on posts so that I can see what other users think about the posts.
- As an owner of a comment I can delete my comments so that I can control which of my comments I want to be published.
- As an owner of a comment I can edit my comments so that I can update my comment if I want to change it.

### Posts:
- As a user I can see posts on the home page ordered from newest to oldest so that I get a good overview of the posts that gets uploadedd.
- As a user I can view each post so that I see more information about them.
- As a user I can search for posts by username, title, instrument, genre and city so that it's easy to find specific posts.
- As a user I can kepp scrolling through the posts on the website becuase they're loaded automatically so that I don't have to switch between different pages if there is lot of posts.
- As a user I can click on each post so that I see more information about them.
- As a post owner I can edit my own posts title, image, instrument, genre, city, website and description so that I can update my posts after they're created.
- As a post owner I can delete my own posts so that I can change my mind if I want to and erase them after they're created.

### Profiles:
- As a user I can view users profile pages so that I can see more information about them.
- As a logged in user I can edit my profile page to add/change name, image and description so that I can update it after it was created.
- As a user I can see all the users posts on its profile page ordered by the newest first so that I easy can see what a user has uploaded.
- As a logged in user I can edit my username and password so that I can update it after it was created to keep the account secure.

## User Stories left to implement

### Messages:
- As a logged in user I can see a message icon next to the Interested star icon so that I can message other users.
- As a logged in user I can click on the message icon so that a message form shows up on the post page.
- As a logged in user I can submit the message form and get a success alert.
- As a logged in user I can see a list of unique users that I have sent and received messages from in the inbox so that it looks clean.
- As a logged in user I can click on a conversation in the inbox to open it so that I can read the whole conversation I've had with that user.
- As a logged in user I can see a timestamp in the messageconversations with users so that I know when the messages were sent.

### Interested page:
- As a user I can view all the posts I have clicked Interested for so that I will have all the interesting posts on the same page.

# Features

### Navigation

- The navigation is fixed at the top of the page and shows the "musicManiac" to the left with the menu options to the right.
- The menu options while logged out is: Home, Sign In and Sign Up.
- The menu options while logged in is: Add post, Home, Sign Out and the user's profile picture and username.
- It has a good contrast in colors and are easy to read.

## Sign Up

- When you enter the website you can click on "Sign Up" if you want to register an account.
- It has a link to the Sign In page if the user already has an account.
- The user have to choose a username and a password that has to be filled in twice.

## Sign In

- The Sign In page looks similar to the sign up page. The difference is that the user only has to enter it's username and password to log in on the page.
- It has a link to the Sign Up page.
- The user will land on the home page when logged in.

## Sign Out

- When the user is logged in and clicks on "Sign Out" up on the navigation bar the user will be logged out.

## Add post

- Here the user can upload posts.

# Testing

### General

- The website is tested and works in several web browsers and devices.
- It works on different screen sizes and is responsive.
- The navigation stays at the top.

## Add post

- The form fields recieve the information as they should.
- There's max length on the fields.
- The instrument and genre fields will throw an error if the user doesn't change to a valid option.
- The url field only accepts an url so it has to be in the correct format.
- The image, city and websiste fields are optional, it works to submit the form with those fields empty.
- When the form is correctly submitted the user redirects to the page of the post that they've created.

### Sign Up

- The Sign Up page works good and as planned.
- It shows error messages if the fields are empty or entered incorrect.
- The link to the Sign In page works correctly.

### Sign In

- The Sign In page works good and as planned.
- It shows error messages if the fields are empty or entered incorrect.
- The link to the Sign Up page works well.
- The user has to enter the user details correct to be able to log in.

### Sign Out

- The button works so the user gets logged out by clicking on it.

# Wireframe

![Wireframe](https://res.cloudinary.com/dpk2gl3yf/image/upload/v1705318081/wireframe_jsnrzu.png)

# Deployment

The site was deployed using the following steps:

1. Commit changes.
2. Push to GitHub.
3. Log in on Heroku and click on the app.
4. Click on the tab "Deploy" and then on the button "Deploy Branch" at the bottom of the page.
5. When it's deployed, you can click on "Open App" and see it live.

# Credits

- This website uses Bootstrap, a front-end framework for building responsive and mobile-first websites.
- Images on this website are hosted and managed by Cloudinary.

- React Router
- React Infinite Scroll Component
- Popper
- Rest Framework
- Axios
- GitHub
- Heroku

- Favicon: [Favicon.io](https://favicon.io/)
- Fonts: [Google Fonts](https://fonts.google.com/)
- Piano image: [Piano image](https://unsplash.com/photos/person-playing-piano-hbnH0ILjUZE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Guitarist image: [Piano image](https://unsplash.com/photos/man-in-black-leather-jacket-playing-guitar-TmbMLAvXrZQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)

- I have taken inspiration from [Code Institute's](https://codeinstitute.net/) earlier projects to get started and to have as a base.
- Wireframe was created using [Balsamiq](https://balsamiq.com/wireframes/).
- Icons are from [Font Awesome](https://fontawesome.com/).
