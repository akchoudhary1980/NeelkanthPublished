// Wait for the DOM to be ready
$(function () { 
    // Signing Form Validation 
    $("form[name='signinform']").validate({       
        rules: {            
            CustomerName: "required",           
            Email: {
                required: true,               
                email: true
            },
            Mobile: {
                required: true,
                minlength: 10
            },
            Password: {
                required: true,
                minlength: 5
            },
            CaptchaCode: {
                required: true,
                minlength: 6
            },
            AcceptTerms: "required",
        },
        // Specify validation error messages
        messages: {
            CustomerName: "Please enter your name",

            Mobile: {
                required: "Please provide a mobile",
                minlength: "Your mobile must be at least 10 characters long"
            },
            
            Password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            Email: "Please enter a valid email address",
            CaptchaCode: {
                required: "Please enter captcha code",
                minlength: "Your captcha code must be at least 6 characters long"
            },
            AcceptTerms: "Please select term and condition",
        },
        
        submitHandler: function (form) {
            form.submit();
        }
    });
    // Registration Form Validation  
    $("form[name='registrationform']").validate({
        rules: {
            CustomerName: "required",
            Mobile: {
                required: true,
                minlength: 10
            },
            Email: {
                required: true,
                email: true
            },            
            Password: {
                required: true,
                minlength: 5
            },      
            Address: {
                required: true,
                minlength: 20
            },
            City: "required",
            State: "required",            
            CaptchaCode: {
                required: true,
                minlength: 6
            },           
            AcceptTerms: "required",
        },
        // Specify validation error messages
        messages: {
            CustomerName: "Please enter your name",   
            Mobile: {
                required: "Please provide a mobile",
                minlength: "Your mobile must be at least 10 characters long"
            },
            Password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            Email: "Please enter a valid email address",
            CaptchaCode: {
                required: "Please enter captcha code",
                minlength: "Your captcha code must be at least 6 characters long"
            },
            Address: {
                required: "Please enter your address",
                minlength: "Your address must be at least 20 characters long"
            },           
            City: "Please enter your city name",
            State: "Please enter your state name",
            AcceptTerms: "Please select term and condition",
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
    // Customer Login Form Validation  
    $("form[name='cloginpasswordform']").validate({
        rules: {           
            Mobile: {
                required: true,
                minlength: 10
            },           
            Password: {
                required: true,
                minlength: 5
            },           
            CaptchaCode: {
                required: true,
                minlength: 6
            },           
        },
        // Specify validation error messages
        messages: {
           
            Mobile: {
                required: "Please provide a mobile",
                minlength: "Your mobile must be at least 10 characters long"
            },
            Password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },            
            CaptchaCode: {
                required: "Please enter captcha code",
                minlength: "Your captcha code must be at least 6 characters long"
            },            
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
    // Admin Login Form Validation  
    $("form[name='aloginpasswordform']").validate({
        rules: {
            Mobile: {
                required: true,
                minlength: 10
            },
            Password: {
                required: true,
                minlength: 5
            },
            CaptchaCode: {
                required: true,
                minlength: 6
            },
        },
        // Specify validation error messages
        messages: {

            Mobile: {
                required: "Please provide a mobile",
                minlength: "Your mobile must be at least 10 characters long"
            },
            Password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            CaptchaCode: {
                required: "Please enter captcha code",
                minlength: "Your captcha code must be at least 6 characters long"
            },
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
    // Delivery Form Validation  
    $("form[name='deliveryform']").validate({
        rules: {
            CustomerName: "required",
            Address: "required",
            Area: "required",
            Pin: {
                required: true,
                minlength: 6
            },
            City: "required",
            State: "required",            
        },
        // Specify validation error messages
        messages: {

            CustomerName: "Please enter your name",
            Address: "Please enter your address",
            Area: "Please enter your area",
            Pin: {
                required: "Please provide a password",
                minlength: "Your pin code must be at least 6 characters long"
            },
            City: "Please enter your",
            State: "Please enter your",
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
    // Contact Form Validation  
    $("form[name='contactform']").validate({
        rules: {
            CustomerName: "required",
            Mobile: {
                required: true,
                minlength: 10
            },
            Email: {
                required: true,
                email: true
            },
            City: "required",
            State: "required",            
            Message: {
                required: true,
                minlength: 20
            },            
        },
        // Specify validation error messages
        messages: {
            CustomerName: "Please enter your name",
            Mobile: {
                required: "Please provide a mobile",
                minlength: "Your mobile must be at least 10 characters long"
            },     
            City: "Please enter your city name",
            State: "Please enter your state name",
            Email: "Please enter a valid email address",
            
            Message: {
                required: "Please enter your message",
                minlength: "Your message must be at least 20 characters long"
            },
           
            
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});
