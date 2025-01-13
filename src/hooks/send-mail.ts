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
    "service_4zh7eyf",
    "template_hsj9w4s",
    params,
    {
      publicKey: "pORv958XfCWHbFbX9",
    }
  );

  if (request.status === 200) {
    return { success: true };
  } else {
    throw new Error("Erro ao enviar o e-mail!");
  }
};
