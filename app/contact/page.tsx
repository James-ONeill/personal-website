import type { Metadata } from "next";
import Container from "@/components/Container";
import Form from "./Form";

export const metadata: Metadata = {
  title: "Contact | James O'Neill",
};

export default function Contact() {
  return (
    <main>
      <Container>Contact</Container>
      <Form />
    </main>
  );
}
