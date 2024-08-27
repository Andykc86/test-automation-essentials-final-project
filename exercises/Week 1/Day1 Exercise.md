
#Day1 Exercise 

E-commerce Website: Sign-Up Process

Scenario: Sign up with valid credentials
Given the user is on the sign-up page
When the user enters valid credentials
| Email | testuser@example.com |
| Password | ValidPass123! |
And clicks on the "Sign Up" button
Then the user should be successfully registered
And a confirmation email should be sent to testuser@example.com
And the user should be redirected to a confirmation or welcome page

Scenario: Sign up with invalid email
Given the user is on the sign-up page
When the user enters invalid credentials
| Email | user@test.com |
| Password | ValidPass123! |
And clicks on the "Sign Up" button
Then the user should see an error message indicating the email is invalid


Scenario: Sign up with missing email
Given the user is on the sign-up page
When the user enters credentials
| Email | (blank) |
| Password | ValidPass123! |
And clicks on the "Sign Up" button
Then the user should see an error message stating that the email cannot be blank


Scenario: Sign up with weak password
Given the user is on the sign-up page
When the user enters credentials
| Email | testuser@example.com |
| Password | ABC |
And clicks on the "Sign Up" button
Then the user should see an error message indicating the password does not meet minimum requirements


Social Media Platform: Post Creation

Scenario: Create a post with text
Given the user is on the post creation page
When the user enters text
| Content | I am having a beautiful day! |
And clicks on the "Post" button
Then a confirmation message should appear
And the user should see the created post displayed on their feed

Scenario: Create a post with an image
Given the user is on the post creation page
When the user clicks on the attach icon and uploads an image
And clicks on the "Post" button
Then a confirmation message should appear
And the user should see the image displayed on their feed

Scenario: Create a post with a video
Given the user is on the post creation page
When the user clicks on the attach icon and uploads a video
And clicks on the "Post" button
Then a confirmation message should appear
And the user should see the video displayed on their feed

Scenario: Create a post with an invalid image format
Given the user is on the post creation page
When the user clicks on the attach icon and uploads an image with an invalid format
And clicks on the "Post" button
Then an error message should appear indicating the image format is not supported

Scenario: Create a post with a video that is too large
Given the user is on the post creation page
When the user clicks on the attach icon and uploads a video that exceeds the size limit
And clicks on the "Post" button
Then an error message should appear indicating the video is too large

Online Banking: Fund Transfer

Scenario: Valid transfer success
Given the user is on the transfer funds page
When the user selects the account to transfer from
And enters the amount to transfer
And selects the account to transfer to
And clicks on the "Transfer" button
Then a confirmation message displays the transfer details
And the user clicks on the "Submit" button
Then the user is redirected to the account page showing the transfer details

Scenario: Transfer with insufficient funds
Given the user is on the transfer funds page
When the user selects the account to transfer from
And enters an amount that exceeds the available balance
And selects the account to transfer to
And clicks on the "Transfer" button
Then an error message should appear indicating insufficient funds


Scenario: Transfer with an invalid account number
Given the user is on the transfer funds page
When the user selects the account to transfer from
And enters the amount to transfer
And enters an invalid account number to transfer to
And clicks on the "Transfer" button
Then an error message should appear indicating the account number is invalid


Library Management System: Book Search

Scenario: Search by title
Given the user is on the library website
When the user clicks on the search icon
And types the name of the book
And clicks on the "Submit" button
Then a list of books with the searched title should be displayed, with the exact match on top

Scenario: Search by author
Given the user is on the library website
When the user clicks on the search icon
And types the name of the author
And clicks on the "Submit" button
Then a list of books by the author should be displayed

Scenario: Search by an author not in the system
Given the user is on the library website
When the user clicks on the search icon
And types the name of an author not in the system
And clicks on the "Submit" button
Then a message should be displayed indicating no results were found

Scenario: Search by genre
Given the user is on the library website
When the user clicks on the search icon
And types the name of the genre
And clicks on the "Submit" button
Then a list of books in the genre should be displayed

Health Tracking App: Activity Logging

Scenario: Logging a run/swim
Given the user is on the app
When the user clicks on the "Log Activity" icon
And selects "Run" or "Swim"
And enters the activity details
And clicks on the "Submit" button
Then the activity details should be displayed in the activity log

Scenario: Logging with missing data
Given the user is on the app
When the user clicks on the "Log Activity" icon
And selects "Run" or "Swim"
And clicks on the "Submit" button without entering all required details
Then an error message should appear indicating that data is missing

Movie Streaming Service: Login Functionality

Scenario: Login with valid credentials
Given the user is on the home page
When the user clicks on the "Login" button
And enters valid credentials
| Email | testuser@example.com |
| Password | ValidPass123! |
And clicks on the "Submit" button
Then the user should be successfully logged in
And redirected to the confirmation or welcome page

Scenario: Login with invalid credentials
Given the user is on the home page
When the user clicks on the "Login" button
And enters invalid credentials
| Email | ABC@example.com |
| Password | InvalidPass123! |
Then the user should see an error message indicating the credentials are invalid
And should be redirected to the login page

Scenario: Login with unregistered email
Given the user is on the home page
When the user clicks on the "Login" button
And enters an unregistered email
| Email | nonuser@example.com |
| Password | ValidPass123! |
Then the user should see an error message indicating the email is not registered
And should be redirected to the login page

E-learning Platform: Course Enrollment

Scenario: Enrolling for a course
Given the user is on the home page
When the user clicks on the "Enroll" button
And fills in the enrollment form
And clicks on the "Submit" button
Then a confirmation message should appear
And a confirmation email should be sent to the user

Scenario: Cancelling a course
Given the user is on the home page
When the user goes to the user profile
And selects the course to cancel
And clicks on the "Cancel" button
Then a confirmation message should appear
And a confirmation email should be sent to the user

Scenario: Upgrading a course
Given the user is on the home page
When the user goes to the user profile
And selects the course to upgrade
And clicks on the "Upgrade" button
Then a confirmation message should appear
And a confirmation email should be sent to the user

Banking App: Bill Payment

Scenario: Paying a bill
Given the user is on the accounts page
When the user clicks on the "Pay Bill" button
And fills in the payment form
And clicks on the "Submit" button
Then a confirmation message should appear
And the user should see the updated balance

Scenario: Cancelling a bill payment
Given the user is on the accounts page
When the user goes to the payment history
And selects the payment to cancel
And clicks on the "Cancel" button
Then a confirmation message should appear
And the user should see the payment removed from the history

Scenario: Scheduling a bill payment
Given the user is on the accounts page
When the user clicks on the "Schedule Payment" button
And fills in the schedule form
And clicks on the "Submit" button
Then a confirmation message should appear
And the user should see the scheduled payment in the history

Scenario: Viewing payment history
Given the user is on the accounts page
When the user clicks on the "Payment History" button
Then the user should see a list of all past payments
And the user should see the details of each payment

Scenario: Viewing scheduled payments
Given the user is on the accounts page
When the user clicks on the "Scheduled Payments" button
Then the user should see a list of all scheduled payments
And the user should see the details of each scheduled payment

Scenario: Paying a bill with insufficient funds
Given the user is on the accounts page
When the user clicks on the "Pay Bill" button
And fills in the payment form with an amount greater than the balance
And clicks on the "Submit" button
Then an error message should appear indicating insufficient funds

Scenario: Invalid biller
Given the user is on the accounts page
And clicks on the "Pay" button
When the user adds the details (filling all the details to pay) via a JSON file
And clicks on the "Submit" button
Then an error message should appear saying that the biller is not valid

Retail System: Discount Application

Scenario: Valid discount code
Given the user is on the billing page
When the user adds the discount code
| Code | JAN1024 |
Then a validation message should appear
And the discount should be applied, resulting in a change in the total billing amount

Scenario: Invalid discount code
Given the user is on the billing page
When the user adds the discount code
| Code | JA1024 |
Then an error message should appear indicating the discount code is invalid

Scenario: Expired discount code
Given the user is on the billing page
When the user adds the discount code
| Code | JAN1023 |
Then an error message should appear indicating the discount code is expired

Chat Application: Message Sending

Scenario: Sending text
Given the user is on the chat page
And the user enters text
| Greeting | I am having a beautiful day! |
And clicks on the "Post" button
Then the user should see the message displayed in the chat

Scenario: Sending an image
Given the user is on the chat page
And the user clicks on the attach icon
And uploads an image
And clicks on the "Post" button
Then the user should see the image displayed in the chat

Scenario: Sending invalid data
Given the user is on the chat page
And the user clicks on the attach icon
And uploads an image in an invalid format
And clicks on the "Post" button
Then an error message should be displayed to the user indicating the invalid format