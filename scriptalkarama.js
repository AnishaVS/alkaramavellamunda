$(document).ready(function(){
    $("#filling-form").validate({
        rules:{
        fullname:{
            required:true,
            minlength:4
        },
        
        email:{
            required:true,
            email:true

        },
        mobilenumber:{
            required:true,
            minlength:10
        },
        
        
        },
        messages:{
            fnane:{
                required:"enter a value",
                minlength:"enter atleast minimum characters"
            }
        }
    })
})