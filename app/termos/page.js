import Link from "next/link";

export const metadata = {
  title: "Termos de Uso — Nebulari",
  description: "Termos de uso da loja Nebulari.",
};

export default function TermosPage() {
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
        <h1>Termos de Uso</h1>
        <p className="legal-updated">Última atualização: 22 de maio de 2026</p>

        <p className="legal-lead">
          Bem-vindo à Nebulari. Estes Termos de Uso regem o acesso e a utilização do nosso site,
          plataforma e produtos. Ao acessar ou usar nossos serviços, você concorda em estar vinculado a estes termos.
        </p>

        <section>
          <h2>1. Aceitação dos termos</h2>
          <p>
            Ao criar uma conta, realizar uma compra ou navegar pelo site da Nebulari, você declara ter lido,
            compreendido e aceito integralmente estes Termos de Uso, bem como a nossa{" "}
            <Link href="/privacidade" className="link-purple">Política de Privacidade</Link>.
          </p>
        </section>

        <section>
          <h2>2. Cadastro e conta</h2>
          <p>
            Para realizar compras, o usuário deverá criar uma conta fornecendo informações verdadeiras,
            atuais e completas. Você é responsável por manter a confidencialidade da sua senha e por todas
            as atividades realizadas sob seu cadastro.
          </p>
          <ul>
            <li>É proibido criar mais de uma conta por pessoa física.</li>
            <li>Menores de 18 anos devem ter consentimento dos responsáveis para se cadastrar.</li>
            <li>A Nebulari pode suspender contas que apresentarem informações falsas ou inconsistentes.</li>
          </ul>
        </section>

        <section>
          <h2>3. Produtos e pedidos</h2>
          <p>
            Os produtos vendidos pela Nebulari são chaveiros artesanais e personalizáveis. As imagens,
            descrições e preços são informativos e podem sofrer pequenas variações em razão da natureza
            artesanal dos itens.
          </p>
          <p>
            Após a confirmação do pagamento, o pedido entrará em produção. O prazo de envio será exibido
            no momento da compra e poderá variar conforme a localização do destinatário.
          </p>
        </section>

        <section>
          <h2>4. Preços e pagamentos</h2>
          <p>
            Todos os preços estão expressos em reais (BRL) e incluem os impostos aplicáveis. Aceitamos
            cartões de crédito, débito, Pix e outras modalidades indicadas no checkout. A confirmação do
            pedido depende da aprovação do pagamento pela operadora.
          </p>
        </section>

        <section>
          <h2>5. Entrega</h2>
          <p>
            A Nebulari realiza entregas para todo o território nacional. Os prazos são contados a partir
            da confirmação do pagamento e da finalização da produção. Eventuais atrasos causados por
            transportadoras ou eventos imprevisíveis não são de responsabilidade direta da Nebulari.
          </p>
        </section>

        <section>
          <h2>6. Troca e devolução</h2>
          <p>
            O cliente tem o direito de solicitar a troca ou devolução no prazo de até 7 (sete) dias
            corridos após o recebimento do produto, conforme o Código de Defesa do Consumidor. Produtos
            personalizados sob encomenda não podem ser devolvidos por arrependimento, salvo em caso de
            defeito de fabricação.
          </p>
        </section>

        <section>
          <h2>7. Propriedade intelectual</h2>
          <p>
            Todo o conteúdo do site Nebulari, incluindo textos, imagens, logotipos, ilustrações, designs
            e marcas, é de propriedade exclusiva da Nebulari ou licenciado a ela. É vedada a reprodução
            total ou parcial sem autorização expressa.
          </p>
        </section>

        <section>
          <h2>8. Limitação de responsabilidade</h2>
          <p>
            A Nebulari não se responsabiliza por danos indiretos, lucros cessantes ou perdas decorrentes
            do uso inadequado dos produtos ou do acesso a sites de terceiros vinculados ao nosso conteúdo.
          </p>
        </section>

        <section>
          <h2>9. Alterações</h2>
          <p>
            Estes Termos de Uso podem ser modificados a qualquer momento. A versão vigente sempre estará
            disponível nesta página, com a data da última atualização. O uso continuado dos serviços após
            alterações implica a aceitação das novas condições.
          </p>
        </section>

        <section>
          <h2>10. Foro e legislação aplicável</h2>
          <p>
            Estes termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da
            comarca de domicílio do consumidor para dirimir quaisquer controvérsias decorrentes desta
            relação.
          </p>
        </section>

        <section>
          <h2>11. Contato</h2>
          <p>
            Em caso de dúvidas, sugestões ou reclamações, entre em contato pelo e-mail{" "}
            <a href="mailto:contato@nebulari.com.br" className="link-purple">contato@nebulari.com.br</a>.
          </p>
        </section>

      </article>
    </main>
  );
}
