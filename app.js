function previewForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let previewContent = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    
    document.getElementById("preview").innerHTML = `
        <h1>Form Data Preview</h1>   ${previewContent}  `;

    
    document.getElementById("preview").style.display = "block";
}
