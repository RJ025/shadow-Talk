import { resend } from "@/lib/resend";
import VerificationEmail from "@/emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

interface sendVerificationEmailParams {
    email : string ;
    username : string;
    verifyCode : string;
}

export async function sendVerificationEmail(
    {email,
    username,
    verifyCode}
 : sendVerificationEmailParams):Promise<ApiResponse> {
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Verification code',
            react: VerificationEmail({username, otp:verifyCode}),
        });
        return {success: true , message : 'email send successfully'}
    } catch(error) {
        console.log('error sending verification email' , error)
        return {success: false , message : 'failed to send email'}
    }
}
