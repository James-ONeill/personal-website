"use client"
import { useState } from "react";
import { onSubmit } from "./actions";

export default function Form() {
  const [success, setSuccess] = useState(false);

  async function submit(data: FormData) {
    const res = await onSubmit(data);
    setSuccess(res.submitted);
  }

  return (
    <form action={submit}>
      {success ? "submitted" : "not submitted"}
      <input type="text" name="hello" />
      <button>Submit</button>
    </form>
  );
}
