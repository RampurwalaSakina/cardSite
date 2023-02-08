var i = 0;               
    function myLoop() {        
        setTimeout(function() {   
            let chatboxes=document.getElementsByClassName("chatbox"); 
            chatboxes[i].classList.add("show");
            document.body.addEventListener("mousemove", function () {
                document.getElementById("myaudio").play(); 
            })
            
            i++;                    
            if (i < chatboxes.length) {           
                myLoop();            
            }
            else{
                setTimeout(function(){
                    let contact=document.getElementsByClassName("contact")[0];
                    contact.classList.add("show");  
                },2000)
                
            }                      
        }, 1000)
    }
    setTimeout(myLoop,2000); 
        


    // Get the current URL
    const currentUrl = window.location.href;

    // Extract the query parameters from the URL
    const params = new URLSearchParams(window.location.search);

    // Get the value of the "name" parameter
    const name = params.get('name');

    // Update the header element with the birthday person's name
    const header = document.querySelector('#personName');
    header.textContent = `Happy Birthday, ${name}!`;

    // Update the URL in the browser's address bar
    const updatedUrl = currentUrl.replace(/name=\w+/, `name=${name}`);
    window.history.pushState({}, '', updatedUrl);


        // let params = new URLSearchParams(location.search);
        // document.getElementById("invitee").innerText=params.get('name');
        // document.getElementById("invite").innerText=params.get('invites');