import emailjs from "@emailjs/browser";

export const sendMail = async ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  const params = {
    name,
    email,
    message,
  };

  const request = await emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY as string,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY as string,
    params,
    {
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
    }
  );

  if (request.status !== 200) throw new Error("Erro ao enviar o e-mail!");
};
