const form = document.querySelector("form");
const aa = document.getElementById("name");
const bb = document.getElementById("email");
const cc = document.getElementById("message");
const dd = document.getElementById("subject");
const ee = document.getElementById("phone");


function sendMail() {
    let aa = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        subject: document.getElementById("subject").value,
        phone: document.getElementById("phone").value,
    }
    Swal.fire({
        title: "Do you want to send the Mail?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Send",

        denyButtonText: `Don't send`
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire("Sent.", "", "success");
            emailjs.send("service_acsfods", "template_bm9pdu9", aa
            );
            form.reset();
            return false;
        } else if (result.isDenied) {
            Swal.fire("Email didn't get sent", "", "info");
        }
    })
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
            // item.parentElement.classList.add("error");
        }


        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (!aa.classList.contains("error") && !bb.classList.contains("error") &&
     !cc.classList.contains("error") && !dd.classList.contains("error") && !ee.classList.contains("error")){
        sendMail();
     }

    
})


function sendEMail() {
    let ax = {
        message1: document.getElementById("message1").value,
    }
    Swal.fire({
        title: "Do you want to send the Mail?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Send",

        denyButtonText: `Don't send`
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire("Sent.", "", "success");
            emailjs.send("service_0idux06", "template_7pmn0rp", ax
            );
            form.reset();
            return false;
        } else if (result.isDenied) {
            Swal.fire("Email didn't get sent", "", "info");
        }
    })
}