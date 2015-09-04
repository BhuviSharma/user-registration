/**
 * @author bhuvneshwars
 */

UserRegistrationApp.DeleteUserRoute = Ember.Route.extend({
    model : function(params){
    	this.set("success","");
    	this.set("errors","");
        // return UserRegistrationApp.DummyUserData.findBy('userId',parseInt(params.userId));
       var url = UserRegistrationApp.BaseUrl + "registration/delete-user/" + params.userId;
       return Ember.$.getJSON(url).then(function (response) {
           if(response.hasOwnProperty("status") && response["status"] === "ok"){
               this.set("success","User is deleted successfully");
           } else {
        	   this.set("errors","Oops!! Problem in deleting user user.");
           }
       });
    }
});
