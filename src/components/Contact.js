export default function Contact() {
    return (
        <div className="Contact">
            <h1>Contact Us</h1>
            <p>Please send all inquiries to below:</p>
            <ul>
                <li>Working Link:</li>
                <li><a href="https://www.google.com" target="_blank">works@aol.com</a></li>
                <li>Non-Working Link:</li>
                <li><a href="www.google.com" target="_blank">doesntwork@aol.com</a></li>
                <li>123 Main St</li>
                <li>Chicago, IL, 12345</li>
            </ul>
        </div>
    )
}