<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $country = htmlspecialchars($_POST['country']);
    $company = htmlspecialchars($_POST['company']);
    $position = htmlspecialchars($_POST['position']);
    $message = htmlspecialchars($_POST['message']);

    $to = "info@cosmolinkship.com"; // where you want to receive email
    $subject = "New Contact Form Enquiry";
    
    $body = "
    Name: $name\n
    Email: $email\n
    Country: $country\n
    Company: $company\n
    Position: $position\n\n
    Message:\n$message
    ";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Sorry, something went wrong. Please try again.";
    }
}
?>
