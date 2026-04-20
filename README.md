<div align="center">
  <h1 style="font-size: 5rem; font-weight: bold; margin-bottom: 0;">
    Zex<span style="color: #45f882;">ora</span>
  </h1>
  <p style="font-size: 1.2rem; color: #c5c5c5;">
    <i>NEXORA <span style="color: #45f882;">GAMING</span></i>
  </p>
  
  <p>
    <strong>Um site moderno e responsivo focado em experiências gamer.</strong>
  </p>

  <p>
    <!-- Substitua o link "#" abaixo pela URL do site quando estiver hospedado -->
    <a href="#" target="_blank"><strong>🔗 Acessar o site ao vivo</strong></a>
  </p>

  <p>
    <!-- Substitua a URL abaixo pela imagem/screenshot do seu projeto -->
    <img src="./src/assets/zexora_print.png" alt="Preview do Projeto Zexora" width="100%" style="max-width: 800px; border-radius: 8px; margin: 15px 0;" />
  </p>

  <p>
    <a href="#sobre">Sobre</a> • 
    <a href="#tecnologias">Tecnologias</a> • 
    <a href="#funcionalidades">Funcionalidades</a> • 
    <a href="#estrutura-do-projeto">Estrutura</a> • 
    <a href="#instalação">Instalação</a>
  </p>
</div>

---

## 🎮 Sobre o Projeto

**Zexora (Nexora Gaming)** é uma landing page completa desenvolvida para um estúdio de games (ou portal gamer), focada em alta performance, design moderno com efeitos imersivos (como *frosted glass* na navegação) e totalmente adaptável para qualquer tamanho de tela.

Da ideia inicial ao lançamento, este projeto combina **estratégia, criatividade e tecnologia** para criar uma experiência de usuário incrível, com animações suaves e sliders interativos.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes ferramentas:

* **[React 19](https://react.dev/)** - Biblioteca JavaScript para criação da interface.
* **[Vite](https://vitejs.dev/)** - Bundler ultrarrápido para desenvolvimento frontend.
* **[Swiper](https://swiperjs.com/)** - Utilizado para os sliders e carrosséis (como Depoimentos, Equipe e Instagram).
* **[CSS Modules](https://github.com/css-modules/css-modules)** - Para o escopo de estilos de cada componente, evitando conflitos de classes.
* **[Remix Icon](https://remixicon.com/)** - Biblioteca de ícones elegante para os elementos visuais.
* **Google Fonts** - Utilizando as fontes *Anton*, *Kaushan Script* e *Poppins*.

---

## ✨ Funcionalidades

* **Totalmente Responsivo**: Layout que se adapta fluidamente desde smartphones muito pequenos (<380px) até monitores ultrawide (>1400px).
* **Navegação com Frosted Glass**: Barra de navegação fixa com fundo semi-transparente e efeito de desfoque (`backdrop-filter`).
* **Ancoragem Suave (Smooth Scroll)**: Navegação em uma única página clicando no menu que leva o usuário para as respectivas seções suavemente.
* **Carrosséis Dinâmicos**: Seções de equipe, depoimentos e redes sociais (Instagram) integradas com sliders fluidos usando Swiper.
* **Design Moderno**: Identidade visual baseada em tema dark (cores escuras) com detalhes vibrantes em verde fluorescente (`#45f882`).

---

## 📂 Estrutura do Projeto

O código está organizado em uma arquitetura modular por componentes. As pastas principais são:

```text
Gaming-site/
├── public/                 # Assets públicos
├── src/
│   ├── assets/             # Imagens, backgrounds e ícones do projeto
│   ├── Component/          # Componentes React do site
│   │   ├── Contact/        # Formulário de contato
│   │   ├── Copyright/      # Rodapé secundário e direitos autorais
│   │   ├── Footer/         # Rodapé principal com links
│   │   ├── GameCards/      # Grade de apresentação de jogos
│   │   ├── Header/         # Hero section inicial (Topo da página)
│   │   ├── Insta/          # Feed / Galeria do Instagram (Slider)
│   │   ├── Marquee/        # Barra de texto com rolagem contínua
│   │   ├── Mission/        # Seção Sobre/Nossa Missão
│   │   ├── Nav/            # Menu de navegação superior (Navbar)
│   │   ├── Services/       # Serviços oferecidos
│   │   ├── Team/           # Cards de apresentação da equipe (Slider)
│   │   ├── Testimonials/   # Depoimentos de clientes (Slider)
│   │   ├── VideoBg/        # Seção com fundo de vídeo
│   │   └── Works/          # Trabalhos recentes e projetos
│   ├── App.jsx             # Componente raiz que une todas as seções
│   ├── index.css           # Estilos globais e variáveis de cores (CSS)
│   └── main.jsx            # Ponto de entrada do React
└── package.json            # Dependências e scripts do projeto
```

---

## 🛠️ Instalação e Execução

Siga os passos abaixo para rodar o projeto na sua máquina local:

### 1. Pré-requisitos
Certifique-se de ter o **Node.js** instalado na sua máquina.

### 2. Passos

Clone o repositório ou acesse o diretório do projeto no terminal e instale as dependências:
```bash
npm install
```

Para rodar o projeto em ambiente de desenvolvimento local (com Hot Module Replacement):
```bash
npm run dev
```

Abra o seu navegador no link indicado pelo terminal (geralmente `http://localhost:5173`).

### 3. Build para Produção
Caso deseje criar os arquivos minificados e otimizados para deploy:
```bash
npm run build
```
Para testar como ficou o build localmente antes de fazer o deploy:
```bash
npm run preview
```

---

<div align="center">
  <p>Feito com paixão e tecnologia. 🎮</p>
</div>