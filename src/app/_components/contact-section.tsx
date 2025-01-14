"use client";

import Link from "next/link";

import { sendMail } from "@/hooks/send-mail";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2Icon, SendIcon } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome obrigatório" }),
  email: z
    .string()
    .min(5, { message: "Email obrigatório" })
    .email({ message: "Email inválido" }),
  message: z.string().min(10, { message: "Mensagem muito curta" }),
});

export function ContactSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await sendMail(values);

      toast.success("Mensagem enviada com sucesso!");
    } catch (error) {
      toast.error("Erro ao enviar mensagem");
    } finally {
      form.reset();
    }
  }

  const { isValid, isDirty, isSubmitting } = form.formState;

  return (
    <section
      id="contact"
      className="flex flex-col gap-y-12 items-center justify-center min-h-[90vh] relative py-24 px-6 max-w-screen-lg mx-auto"
    >
      <div className="flex flex-col text-center gap-6">
        <div className="flex items-center justify-center gap-x-4">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-accent-foreground">
            Entrar em contato
          </h1>
        </div>
        <p className="text-muted-foreground tracking-wide">
          Envie uma mensagem para mim e eu responderei o mais rápido possível.
          Se você tiver alguma dúvida ou sugestão, fique à vontade para me
          enviar uma mensagem.
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 max-w-screen-lg mx-auto w-full"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
            <FormField
              control={form.control}
              name="name"
              disabled={isSubmitting}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              disabled={isSubmitting}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Digite seu email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            disabled={isSubmitting}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensagem</FormLabel>
                <FormControl>
                  <Textarea placeholder="Digite sua mensagem" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-end">
            <Button
              type="button"
              variant="secondary"
              size="lg"
              onClick={() => form.reset()}
              disabled={isSubmitting || !isDirty}
            >
              Limpar
            </Button>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting || !isValid || !isDirty}
            >
              {isSubmitting ? (
                <Loader2Icon className="size-4 animate-spin" />
              ) : (
                <SendIcon className="size-4" />
              )}
            </Button>
          </div>
        </form>
      </Form>

      <span className="text-sm text-muted-foreground">
        Ou envie um email para:{" "}
        <Link href="mailto:lj251004@gmail.com" className="font-semibold">
          lj251004@gmail.com
        </Link>
        .
      </span>
    </section>
  );
}
