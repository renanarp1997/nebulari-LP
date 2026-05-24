import Link from "next/link";

export const metadata = {
  title: "Política de Privacidade — Nebulari",
  description: "Como a Nebulari coleta, usa e protege seus dados.",
};

export default function PrivacidadePage() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <div className="container legal-header-inner">
          <Link href="/" className="brand" aria-label="Nebulari">
            <img className="brand-logo brand-logo-desktop" src="/logo.png" alt="Nebulari" />
            <img className="brand-logo brand-logo-mobile" src="/logo-tight.png" alt="Nebulari" />
          </Link>
          <Link href="/" className="auth-back">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            Voltar
          </Link>
        </div>
      </header>

      <article className="legal-content container">
        <span className="pill">
          <span className="pill-dot">+</span>
          DOCUMENTO LEGAL
        </span>
        <h1>Política de Privacidade</h1>
        <p className="legal-updated">Última atualização: 22 de maio de 2026</p>

        <p className="legal-lead">
          A sua privacidade é importante para nós. Esta Política descreve quais dados pessoais
          coletamos, como utilizamos e protegemos as informações coletadas durante o uso do site,
          em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
        </p>

        <section>
          <h2>1. Quais dados coletamos</h2>
          <p>
            Coletamos os dados estritamente necessários para o funcionamento dos nossos serviços:
          </p>
          <ul>
            <li><strong>Dados de cadastro:</strong> nome, e-mail, senha, CPF e telefone.</li>
            <li><strong>Dados de pagamento:</strong> dados de cobrança processados por gateways
              seguros (não armazenamos números de cartão).</li>
            <li><strong>Dados de entrega:</strong> endereço completo para envio dos pedidos.</li>
            <li><strong>Dados de navegação:</strong> IP, dispositivo, páginas visitadas e cookies.</li>
          </ul>
        </section>

        <section>
          <h2>2. Como usamos seus dados</h2>
          <p>Utilizamos os dados coletados exclusivamente para as seguintes finalidades:</p>
          <ul>
            <li>Processar e entregar seus pedidos.</li>
            <li>Comunicar status de compra, prazos e eventuais ofertas.</li>
            <li>Personalizar sua experiência na loja.</li>
            <li>Cumprir obrigações legais, fiscais e regulatórias.</li>
            <li>Prevenir fraudes e proteger a segurança da plataforma.</li>
          </ul>
        </section>

        <section>
          <h2>3. Compartilhamento com terceiros</h2>
          <p>
            A Nebulari não vende nem aluga seus dados pessoais. Os dados podem ser compartilhados
            apenas com parceiros essenciais à operação, tais como:
          </p>
          <ul>
            <li>Operadoras de pagamento e antifraude.</li>
            <li>Transportadoras responsáveis pela entrega.</li>
            <li>Serviços de e-mail e atendimento ao cliente.</li>
            <li>Autoridades públicas, quando exigido por lei.</li>
          </ul>
        </section>

        <section>
          <h2>4. Cookies</h2>
          <p>
            Utilizamos cookies para melhorar a experiência de navegação, lembrar suas preferências
            e gerar estatísticas anônimas de uso. Você pode desativar cookies nas configurações do
            seu navegador, mas algumas funcionalidades podem ser afetadas.
          </p>
        </section>

        <section>
          <h2>5. Segurança</h2>
          <p>
            Adotamos medidas técnicas e administrativas para proteger seus dados, incluindo
            criptografia em trânsito (HTTPS), controle de acesso interno e monitoramento contínuo.
            Apesar disso, nenhum sistema é absolutamente imune a riscos.
          </p>
        </section>

        <section>
          <h2>6. Seus direitos como titular</h2>
          <p>De acordo com a LGPD, você pode a qualquer momento solicitar:</p>
          <ul>
            <li>Confirmação da existência de tratamento de dados.</li>
            <li>Acesso aos seus dados.</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários.</li>
            <li>Portabilidade dos dados a outro fornecedor.</li>
            <li>Revogação do consentimento.</li>
          </ul>
          <p>
            Para exercer esses direitos, envie um e-mail para{" "}
            <a href="mailto:privacidade@nebulari.com.br" className="link-purple">privacidade@nebulari.com.br</a>.
          </p>
        </section>

        <section>
          <h2>7. Retenção dos dados</h2>
          <p>
            Mantemos os dados pelo tempo necessário ao cumprimento das finalidades para as quais
            foram coletados, observadas as obrigações legais de guarda (por exemplo, fiscais, de até
            5 anos após a última transação).
          </p>
        </section>

        <section>
          <h2>8. Marketing e comunicações</h2>
          <p>
            Caso opte por receber novidades e ofertas, enviaremos comunicações ocasionais por e-mail.
            Você pode cancelar a inscrição a qualquer momento pelo link presente em cada mensagem ou
            entrando em contato conosco.
          </p>
        </section>

        <section>
          <h2>9. Alterações nesta política</h2>
          <p>
            Esta Política pode ser atualizada periodicamente. A versão vigente estará sempre
            disponível nesta página, com a respectiva data de atualização.
          </p>
        </section>

        <section>
          <h2>10. Encarregado pelo tratamento de dados (DPO)</h2>
          <p>
            Em conformidade com a LGPD, mantemos um Encarregado pelo Tratamento de Dados Pessoais
            (DPO). Para contato, escreva para{" "}
            <a href="mailto:dpo@nebulari.com.br" className="link-purple">dpo@nebulari.com.br</a>.
          </p>
        </section>

        <div className="legal-foot">
          <Link href="/cadastro" className="btn btn-primary btn-sm">
            Voltar ao cadastro
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </Link>
        </div>
      </article>
    </main>
  );
}
