import EmailMessage from "@/app/emails/EmailMessage";
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const { name, emailId, message } = await request.json();

        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "suyashdeshpande479@gmail.com",
            subject: "New message from your portfolio",
            react: EmailMessage({ name, emailId, message }),
        });

        return new Response(JSON.stringify({ success: true, message: "Email sent successfully!" }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error("Error sending email:", error);

        return new Response(JSON.stringify({ success: false, message: "Failed to send email." }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
