// identify and select value of user input "goals"
document.addEventListener('DOMContentLoaded', (event) => {
    const selectElement = document.getElementById('goals');

    selectElement.addEventListener('change', (event) => {
        const selectedValue = event.change.target.value;

        switch (selectedValue) {
            case 'option 1':
                console.log('option 1 selected');
                loseWeight = document.getElementById("createdContent");

                loseWeight = ("You want to lose weight: ")
                break;
            case 'option 2' :
                console.log('option 2 selected');
                gainMuscle = document.getElementById("createdContent");

                gainMuscle = ("You want to gain muscle mass: ")
                break;
        }
    })
})

// validate email
function validateEmail(event) {}
    const validate = document.getElementById('email').value;
    
    if (validate === "") {
        alert("You must enter an email address");
        event.preventDefault(); // prevent form submission
    } else {
        return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
        );
    };

const form = document.getElementById('form');
form.addEventListener('submit', validateEmail);


// change contents of div "content"
function makeContent() {
    const newContent = document.getElementById('createdContent');
    newContent.textContent = "";
    newContent += ("New Content")
}
makeContent();

    //function to clear meal plan
    function clearPlan() {
        const clearButton = document.getElementById("clear");
        const contentDiv = document.getElementById("createdContent");

        clearButton.addEventListener('click' , () => {
            contentDiv.innerHTML = "";
        });

        console.log("meal plan contents cleared")
    }

    //function to download meal plan
     function downloadPlan() {
        document.addEventListener('DOMContentLoaded', (event) => {
            const downloadButton = document.getElementById('download');
            const content = document.getElementById('createdContent');
        
            downloadButton.addEventListener('click', () => {
                const { jsPDF } = window.jspdf;
                const doc = new jsPDF();
        
                // Adding text to the PDF
                doc.text(content.innerText, 10, 10);
        
                // Save the PDF
                doc.save('content.pdf');
            });
        });
    }

    //attach download function to download button
    document.getElementById("download").addEventListener('click', downloadPlan);
