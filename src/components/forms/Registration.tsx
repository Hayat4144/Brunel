import React, { useState, Fragment } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import registrationSchema from "@/lib/validation/form/registration";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { PiSpinner } from "react-icons/pi";

type registrationInput = z.infer<typeof registrationSchema>;

export default function Registration() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<registrationInput>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const navigate = useNavigate();
  const { toast } = useToast();

  const onSubmit = async (data: registrationInput) => {
    setIsLoading((prevState) => !prevState);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading((prevState) => !prevState);
    toast({
      title: "Registration has been successfull.",
    });
    navigate("/success");
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="rounded-full bg-secondary h-14"
                  placeholder="Enter your name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="rounded-full bg-secondary h-14"
                  placeholder="Enter your email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="rounded-full h-14 w-full disabled:cursor-not-allowed"
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? (
            <Fragment>
              <PiSpinner className="animate-spin mr-2" size={30} />
              Please wait ...
            </Fragment>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
}
