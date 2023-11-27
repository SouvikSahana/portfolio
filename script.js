const form=document.getElementById("myForm")
const submit=document.getElementById("Submit")

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    const name=form.elements.name.value
    const mobile=form.elements.contact.value
    const reason=form.elements.reason.value
    const description=form.elements.description.value

    if(name && reason && description){
        sendEmail(name, mobile, reason, description)
    }else{
        alert("Plesae fill first")
    }
   
})

function sendEmail(name,mobile,reason,description) {
    var to = 'souviksahana35@gmail.com';
    var subject = "website "+ reason
    var body = `
    Name:- ${name}
    Conatct Number:- ${mobile}

    ${description}
    `

    var mailtoLink = 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    window.location.href = mailtoLink;
}