function validate()
{
    //simple form validation using javascript
    if(document.reg.Name.value=="")
    {
        
        alert("please provide the name of yours :")
        document.reg.Name.focus();
        return false;
    }
    if(document.reg.Email.value=="")
        {
            alert("Please provide email :");
            document.reg.Email.focus();
            return false;
        }
    if(document.reg.Phone.value==""||isNaN(document.reg.Phone.value)
            ||document.reg.Phone.value.length!=10)
            {
                alert("Please provide the valid 10 digit phone number :");
                document.reg.Phone.focus();
                return false;
            }
    //complex form validation using javscript
    var em = document.reg.Email.value;
    var atpos = em.indexOf("@");
    var dotpos = em.lastindexOf(".");
    if(dotpos - atpos < 2 || atpos - dotpos <2 || atpos <1 ||dotps <1 
            ||em=="")
            {
                alert("Enter a valid Email address in the a valid formate");
                document.reg.Email.focus();
                return false;
            }
    return true;
}