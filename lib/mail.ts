import { sendEmail } from "@/lib/actions/mail.action";
const domain = process.env.NEXT_PUBLIC_APP_URL;

// Send verification email
export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/new-verification?token=${token}`;

  const response=await sendEmail({
    to: email,
    subject: "Verify your email address",
    htmldata: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
  });
  console.log("verification email",{response})
};


// Send password reset email
export const sendPasswordResetmail = async (email: string, token: string) => {
  const resetLink = `${domain}/new-password?token=${token}`;

  const response=await sendEmail({
    to: email,
    subject: "Reset your password",
    htmldata: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
  });
  console.log("passwrod reset",{response})
};

// Send two factor token
export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  const response=await sendEmail({
    to: email,
    subject: "2FA Code",
    htmldata: `<p>Your 2FA code is: ${token}</p>`,
  });
  console.log("2fa",{response})
};
