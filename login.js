const clickBtn=()=>{
    const pass=document.getElementById('pass-input').value;
    const logInPassword=parseFloat(pass)
    if(logInPassword===123456){
        const hiddenClass=document.getElementById('main-section-hidden');
        const navsection=document.getElementById('nav-section-hidden')
        const bannerSection=document.getElementById('banner-section')
        bannerSection.classList.add('hidden')
        navsection.classList.remove('hidden')
        hiddenClass.classList.remove('hidden')
        console.log(bannerSection);
        


        // alert('Successfully')
       
            Swal.fire({
                title: "Success!",
                text: "You have logged in successfully.",
                icon: "success",
                confirmButtonText: "OK"
                    
            });
        
    }
    else{
        Swal.fire({
            title: "Wrong Password",
            text: "Please try again.",
            icon: "error",
            confirmButtonText: "Retry"
        });
        
    }
}

