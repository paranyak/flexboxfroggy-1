function createForm() {
    $("#form1").append(
// Creating Form Div and Adding <h2> and <p> Paragraph Tag in it.
        $("<h3/>").text("Contact Form"), $("<p/>").text("This is my form. Please fill it out. It's awesome!"), $("<form/>", {
            action: '#',
            method: '#'
        }).append(
// Create <form> Tag and Appending in HTML Div form1.
            $("<input/>", {
                type: 'text',
                id: 'vname',
                name: 'name',
                placeholder: 'Your Name'
            }), // Creating Input Element With Attribute.
            $("<input/>", {
                type: 'text',
                id: 'vemail',
                name: 'email',
                placeholder: 'Your Email'
            }), $("<textarea/>", {
                rows: '5px',
                cols: '27px',
                type: 'text',
                id: 'vmsg',
                name: 'msg',
                placeholder: 'Message'
            }), $("<br/>"), $("<input/>", {
                type: 'submit',
                id: 'submit',
                value: 'Submit',
            })))
}

$(document).ready(function() {
    $("#form1").submit(function(e) {
        e.preventDefault();
        alert("hi");
        $.ajax({
            type: 'POST',
            url: 'https://mandrillapp.com/api/1.0/messages/send.json',
            data: {
                'key': 'YOUR API KEY HERE',
                'message': {
                    'from_email': 'YOUR@EMAIL.HERE',
                    'to': [
                        {
                            'email': 'RECIPIENT@EMAIL.HERE',
                            'name': 'RECIPIENT NAME (OPTIONAL)',
                            'type': 'to'
                        }
                    ],
                    'autotext': 'true',
                    'subject': 'YOUR SUBJECT HERE!',
                    'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
                }
            }
        }).done(function(response) {
            console.log(response); // if you're into that sorta thing
        });
    })
});


//<div id="container">
//     <h2>Dynamically Created Form Using jQuery</h2>
//     <form id="form1">
//       <!-- Dynamic Form Div -->
//     </form>
//   </div>