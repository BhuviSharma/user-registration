/**
 * This is root js file to process user registration application
 * @author maninders
 * @module UserRegistration
 */
UserRegistrationApp = Ember.Application.create();


// Dummy Data

UserRegistrationApp.DummyUserData = [
    {userId : 1 , firstName : "maninder" , middleName : "",lastName : "singh"},
    {userId : 2 , firstName : "bhuvneshwar" , middleName : "",lastName : "sharma"},
    {userId : 3 , firstName : "ashok" , middleName : "",lastName : "c"}
];

// Root api Url
UserRegistrationApp.BaseUrl = "http://localhost:8083/user-registration/rest/";