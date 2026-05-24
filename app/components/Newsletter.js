"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setEmail("");
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <section className="newsletter">
      <div className="container newsletter-inner">
        <div className="newsletter-text">
          <h3>{success ? "Inscrição confirmada." : "Receba o próximo lançamento."}</h3>
          <p>
            {success
              ? "A gente avisa em primeira mão quando soltar a próxima edição."
              : "Avisamos primeiro quando uma nova edição entra. Sem ruído, só o que importa."}
          </p>
        </div>
        {!success && (
          <form className="newsletter-form" onSubmit={onSubmit}>
            <input
              type="email"
              placeholder="seu@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="E-mail"
            />
            <button type="submit" className="btn btn-primary">Quero ser avisado</button>
          </form>
        )}
      </div>
    </section>
  );
}
