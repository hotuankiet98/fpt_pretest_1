var singinBtn=$("#register-id");
var memInfo=$(".member-info");
var display=memInfo.css('display');
var check=false;
var checkdisplay=false;
var notificationBackground=$("#notification-background");
//Hidden form member info
    singinBtn.click(function(){
        if(checkdisplay!=true){
            if(check==false){
                // memInfo.removeClass("member-info-form-hide")
                memInfo.removeClass("member-info")  
                memInfo.addClass("member-info-form-hide")
                check=true;
            }else{
                memInfo.removeClass("member-info-form-hide")
                memInfo.addClass("member-info")
                check=false;
            }
        }
    })

//add form info
function submitInfo(){
    var uname=$("#username").val();
    var gender=$(".gender:checked").val();
    var hob=$(".hobbies:checked");
    var birthday=$("#birthday").val();
    var address=$("#address").val();
    var email=$("#email").val();
    var city=$(".city option:selected").val();
    var comment=$("#comment").val();
    var hobArr=[];
    var today=new Date();
    var birthdayValue=new Date(birthday);
    var age=(today-birthdayValue)/(1000*60*60*24*365.2);
    var notificationContent=document.getElementById("info");
    if(hob.length>0){
        hob.each(function(){
            hobArr.push($(this).val());
            })
    }
    if(age<17){
        alert("Error");
        notificationContent.innerHTML="Your age:"+parseInt(age.toFixed(1))+"<17.You can't register!";
    }else{
        alert("Successfully");
        notificationContent.innerHTML="<br>Username:"+uname
        +"<br>Gender:"+gender
        +"<br>Hobbies:"+hobArr
        +"<br>Birthday:"+birthday
        +"<br>Address:"+address
        +"<br>Email:"+email
        +"<br>City:"+city
        +"<br>Comment:"+comment
        +"<br>Your are register successfully!"
    }
    memInfo.removeClass("member-info-form")
    memInfo.addClass("member-info-form-hide")
    if(checkdisplay==false)
    {
        notificationBackground.css("display","flex");
        checkdisplay = true;
    }
    check=false;
    return false;
}

var closeIcon=$(".close-icon");
closeIcon.click(function(){
    notificationBackground.hide();
    memInfo.addClass("member-info")  
    memInfo.removeClass("member-info-form-hide")
    checkdisplay=false;
})

