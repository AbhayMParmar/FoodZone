    function validate()
    {
         if(document.myForm.username.value=="")
         {
           alert("Please provide your Username!");
           document.myForm.username.focus();
           return false;
         }         
       
    if(document.myForm.password.value==""||isNaN(document.myForm.password.value)||
       document.myForm.password.value.length!=6)
    {
         alert("Please Enter the Password");
         document.myForm.password.focus();
         return false;
     }
     if(document.myForm.password2.value==""||isNaN(document.myForm.password2.value)||
       document.myForm.password2.value.length!=6)
    {
         alert("Please Enter The Confirm Password.");
         document.myForm.password2.focus();
         return false;
     }
         return(true); 
    }