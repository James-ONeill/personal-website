"use server";

export async function onSubmit(data: FormData) {
  let submitted = false;

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_KEY}`,
      },
      body: JSON.stringify({
        from: `${data.get("name")} <${data.get("email")}>`,
        to: process.env.RESEND_TO_EMAIL,
        subject: `${data.get("name")} sent a message`,
        text: data.get("text"),
      }),
    });

    submitted = true;
  } catch {}

  return { submitted };
}
