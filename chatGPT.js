

window.onload=function() {
    const input = document.getElementById('lname');
    var submitbutton = document.getElementsByClassName('submitbutton')
    var chatzone = document.getElementsByClassName('chatzone')
    precheck(input)
    function precheck(input) {
        if (input.value === '') {
            submitbutton[0].classList.add("invalid");
            submitbutton[0].classList.add("prevented")
        }
        else{
            submitbutton[0].classList.remove("invalid");
            submitbutton[0].classList.remove("prevented");
        }
        
    }
    submitbutton[0].addEventListener('click',(e) => {
        //callAPI somehow idk ¯\_(ツ)_/¯
        if (submitbutton[0].classList.contains('prevented')){
            e.preventDefault()
        }
        else {
        let div = document.createElement("div")
        div.innerHTML = `
                <div class="userask">
                <img class="user_avatar" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"></img>
                <div class="user_info">
                    <div class="user_name">Bạn</div>
                    <div class="user_promt">${input.value}</div>
                </div>
            </div>
        `
        chatzone[0].appendChild(div);
        // api trả về thì thay avt name thành GPT với promt là data của nó trả về
        }
    })
    input.addEventListener('input', function(e) {
        console.log(e.target)
    if (e.target.value === ''){
        submitbutton[0].classList.add("invalid");
        submitbutton[0].classList.add("prevented");
    }
    else{
        submitbutton[0].classList.remove("invalid");
        submitbutton[0].classList.remove("prevented");
    }
})
}
    /*
function addtask(){
    if (input.value == '')
        {
            alert("alo");
        }

}
*/


