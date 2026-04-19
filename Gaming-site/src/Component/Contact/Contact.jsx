import React from "react"
import ContactCss from "./Contact.module.css"

export default function Contact() {
  return (
    <section className={ContactCss.contact}>
      <div className={ContactCss.contact_head}>
        <h1>Fale com a nossa equipe</h1>
        <div className={ContactCss.contact_head_text}>
          <div className={ContactCss.line}></div>
          <h1>Seu proximo projeto começa aqui</h1>
        </div>
      </div>

      <div className={ContactCss.contact_ontainer}>
        <div className={ContactCss.Contact_form}>
          <div className={ContactCss.Contact_form_head}>
            <h2>COMO PODEMOS AJUDAR NO SEU PROJETO?</h2>
            <div className={ContactCss.Contact_btns}>
              <button className={ContactCss.Contact_btn}>Game Design</button>
              <button className={ContactCss.Contact_btn}>
                Desenvolvimento
              </button>
              <button className={ContactCss.Contact_btn}>Arte e Animação</button>
              <button className={ContactCss.Contact_btn}>Publicação</button>
            </div>
          </div>
          <div className={ContactCss.contact_inputs}>
            <div className={ContactCss.contact_inputs_head}>
              <div className={ContactCss.inputs}>
                <input type="text" placeholder="Seu nome" />
                <i className="ri-user-3-line"></i>
              </div>
              <div className={ContactCss.inputs}>
                <input type="text" placeholder="Seu melhor e-mail" />
                <i className="ri-mail-open-line"></i>
              </div>
            </div>
            <div className={ContactCss.textarea}>
              <textarea
                name=""
                id=""
                placeholder="Conte-nos sobre seu projeto"
              ></textarea>
              <i className="ri-pencil-fill"></i>
            </div>
          </div>
          <button>
            Enviar proposta
            <i className="ri-arrow-right-line"></i>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={ContactCss.Contact_content}>
          <p>
            Somos um studio focado em experiencias gamer. Da ideia inicial ao
            lançamento, combinamos estratégia, criatividade e tecnologia para
            criar jogos que engajam comunidades e fortalecem marcas.
          </p>
          <div className={ContactCss.socials}>
            <i className="ri-facebook-fill"></i>
            <i className="ri-twitter-fill"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-google-fill"></i>
            <i className="ri-github-fill"></i>
          </div>
        </div>
      </div>
    </section>
  )
}
