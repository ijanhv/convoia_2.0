/* eslint-disable new-cap */

// import VerificationEmail from "@/emails/verification";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
// const domain = process.env.NEXT_PUBLIC_APP_URL;

// export const sendVerificationEmail = async (email: string, token: string, name: string) => {
//   const confirmLink = `${domain}/auth/new-verification?token=${token}`;

//   await resend.emails.send({
//     from: "onboarding@resend.dev",
//     to: email,
//     subject: "[🔐Auth]: Please verify your email.",
//     react: VerificationEmail({ confirmLink: confirmLink, name: name })
//   })
// }

import { render } from "@react-email/render";
import { VerificationEmail } from "@/emails/verification";

import nodemailer from "nodemailer";
import PasswordResetEmail from "@/emails/password-reset";
import TwoFactorEmail from "@/emails/two-factor";

export const sendVerificationEmail = async (
  email: string,
  token: string,
  name: string
) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  // const transporter = nodemailer.createTransport({
  //   host: "gmail",

  //   auth: {
  //     user: process.env.NEXT_PUBLIC_EMAIL,
  //     pass: process.env.NEXT_PUBLIC_PASSWORD,
  //   },
  // });

  const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_PASSWORD,
    },
  });

  const emailHtml = render(
    VerificationEmail({ confirmLink: confirmLink, name: name })
  );

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL,
    to: email,
    subject: "[🔐Auth]: Please verify your email.",
    html: emailHtml,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return { error: error };
    } else {
      return true;
    }
  });
};

// export const sendPasswordResetEmail = async (email: string, token: string, name: string) => {
//   const resetPasswordLink = `${domain}/auth/new-password?token=${token}`;

//   await resend.emails.send({
//     from: "onboarding@resend.dev",
//     to: email,
//     subject: "[🔐Auth]: Reset you password.",
//     react: PasswordResetEmail({ resetPasswordLink: resetPasswordLink, name: name })
//   })
// }

export const sendPasswordResetEmail = async (
  email: string,
  token: string,
  name: string
) => {
  const resetPasswordLink = `http://localhost:3000/auth/new-password?token=${token}`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_PASSWORD,
    },
  });

  const emailHtml = render(
    PasswordResetEmail({ resetPasswordLink: resetPasswordLink, name: name })
  );

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL,
    to: email,
    subject: "[🔐Auth]: Reset you password.",
    html: emailHtml,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return { error: error };
    } else {
      return true;
    }
  });
};

// export const sendTwoFactorTokenEmail = async (email: string, token: string, name: string) => {
//   await resend.emails.send({
//     from: "onboarding@resend.dev",
//     to: email,
//     subject: "[🔐Auth]: Please verify Login Attempt.",
//     react: TwoFactorEmail({ token, name })
//   })
// }

export const sendTwoFactorTokenEmail = async (
  email: string,
  token: string,
  name: string
) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_PASSWORD,
    },
  });

  const emailHtml = render(TwoFactorEmail({ token, name }));

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL,
    to: email,
    subject: "[🔐Auth]: Please verify Login Attempt.",
    html: emailHtml,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return { error: error };
    } else {
      return true;
    }
  });
};
