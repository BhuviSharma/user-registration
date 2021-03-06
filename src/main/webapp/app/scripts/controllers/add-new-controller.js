/**
 * This controller class have functionality to validate user registration form 
 * and register new user
 * @author maninders
 * @author bhuvnshwars
 * @class  AddUserController
 * @module UserRegistration
 * @submodule AddUser
 */

UserRegistrationApp.AddUserController = Ember.Controller.extend({
	/**
	 * This method to observe changes in attributes of User and after change, hide alert message.
	 * @method validAddUserForm
	 */
	validAddUserForm : function(){
        this.set("errors","");
    }.observes('firstName','middleName','lastName','email','city','address','state','zip','country'),
    actions : {
    	/**
    	 * This method to register new user after validating user registration form.
    	 * @method addNewUser
    	 */
        addNewUser : function(){

            if(!UserRegistrationApp.validateForm(this))
                return;
            var self = this;
            var user = {};
            user["firstName"] = this.get('firstName');
            user["middleName"] = this.get('middleName');
            user["lastName"] = this.get('lastName');
            user["email"] = this.get("email");
            user["address"] = this.get("address");
            user["city"] = this.get("city");
            user["state"] = this.get("state");
            user["zip"] = this.get("zip");
            user["country"] = this.get("country");

            var url = UserRegistrationApp.BaseUrl + "registration/add-user";
            $.ajax({
            	/**
                 * Method type to contact server.
                 * @property type
                 * @type String
                 * @default "POST"
                 */
                type: "POST",
                /**
                 * URL to communicate with server.
                 * @property url
                 * @type String
                 * @default 
                 */
                url: url,
                /**
                 * Variable to hold response data coming from server.
                 * @property data
                 * @type Json
                 * @default 
                 */
                data: JSON.stringify(user),
                /**
                 * Content type of response coming form server.
                 * @property contentType
                 * @type String
                 * @default application/json; charset=utf-8
                 */
                contentType:"application/json; charset=utf-8",
                /**
                 * Success - Callback method which will be called 
                 * after successful interaction with server.
                 */
                success: function(data){
                    console.log("success");
                    self.transitionToRoute('get-all-users');
                    self.set('firstName',"");
                    self.set('middleName',"");
                    self.set('lastName',"");
                    self.set('email',"");
                    self.set('address',"");
                    self.set('city',"");
                    self.set('state',"");
                    self.set('zip',"");
                    self.set('country',"");
                },
                error: function (jqXHR, textStatus, errorThrown){
                    console.log("error");
                },
                dataType: "json"
            });
        }
    }
});