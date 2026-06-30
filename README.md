# Site para Agronegócios

## 📋 Descrição
Site educacional sobre agronegócios, desenvolvido do zero com tecnologias web modernas.

## 🎯 Objetivo
Criar uma plataforma informativa sobre:
- Boas práticas em agronegócios
- Técnicas de cultivo e pecuária
- Tendências do mercado agrícola
- Consultoria e recursos

## 🛠️ Tecnologias Utilizadas
- **HTML5** - Estrutura
- **CSS3** - Estilo e responsividade
- **JavaScript** - Interatividade
- **GitHub Pages** - Hosting gratuito

## 📁 Estrutura do Projeto

```
Site-para-a-aula/
├── index.html          # Página inicial
├── about.html          # Sobre nós
├── services.html       # Serviços/Produtos
├── blog.html           # Blog
├── contact.html        # Contato
├── css/
│   └── style.css       # Estilos principais
├── js/
│   └── script.js       # Scripts JavaScript
└── images/             # Imagens do site
    ├── hero/
    ├── products/
    └── gallery/
```

## ✨ Seções Principais

### 1. **Home (index.html)**
- Banner atraente com imagem agrícola
- Destaques do site
- Chamadas para ação (CTA)

### 2. **Sobre (about.html)**
- Missão, visão e valores
- Histórico da empresa/projeto
- Equipe

### 3. **Serviços (services.html)**
- Consultoria agrícola
- Produtos e soluções
- Preços

### 4. **Blog**
- Artigos sobre agronegócios
- Dicas e tendências
- Notícias do setor

### 5. **Contato**
- Formulário de contato
- Informações de localização
- Redes sociais

## 🚀 Como Começar

### Pré-requisitos
- Git instalado
- Editor de código (VS Code recomendado)
- Navegador moderno

### Passos Iniciais

1. **Clone o repositório**
```bash
git clone https://github.com/brunin-07cwb/Site-para-a-aula.git
cd Site-para-a-aula
```

2. **Crie a estrutura de pastas**
```bash
mkdir -p css js images/{hero,products,gallery}
```

3. **Crie os arquivos HTML básicos**
```bash
touch index.html about.html services.html blog.html contact.html
```

4. **Abra no navegador**
- Clique duplo em `index.html` ou use extensão Live Server

## 💻 HTML Básico para Começar

Seu primeiro arquivo `index.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agronegócios - Site Educacional</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <h1>🌾 Agronegócios</h1>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">Sobre</a></li>
                <li><a href="services.html">Serviços</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="contact.html">Contato</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="hero">
            <h2>Bem-vindo ao Mundo do Agronegócios</h2>
            <p>Explore práticas sustentáveis e inovadoras</p>
            <button class="btn-primary">Saiba Mais</button>
        </section>

        <section class="features">
            <div class="card">
                <h3>🌱 Sustentabilidade</h3>
                <p>Práticas agroecológicas e sustentáveis</p>
            </div>
            <div class="card">
                <h3>📊 Tecnologia</h3>
                <p>Ferramentas digitais para o agro</p>
            </div>
            <div class="card">
                <h3>💼 Consultoria</h3>
                <p>Especialistas em negócios rurais</p>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 Agronegócios. Todos os direitos reservados.</p>
    </footer>

    <script src="js/script.js"></script>
</body>
</html>
```

## 🎨 CSS Básico

Crie `css/style.css`:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
    line-height: 1.6;
}

header {
    background: linear-gradient(135deg, #2d5016 0%, #5a8f3c 100%);
    color: white;
    padding: 1rem 0;
    position: sticky;
    top: 0;
}

.navbar {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
}

.navbar ul {
    list-style: none;
    display: flex;
    gap: 2rem;
}

.navbar a {
    color: white;
    text-decoration: none;
    transition: 0.3s;
}

.navbar a:hover {
    color: #ffd700;
}

.hero {
    background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), 
                url('images/hero/farm.jpg');
    background-size: cover;
    background-position: center;
    color: white;
    padding: 6rem 2rem;
    text-align: center;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.features {
    max-width: 1200px;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 0 2rem;
}

.card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    text-align: center;
}

.card h3 {
    color: #2d5016;
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.btn-primary {
    background: #5a8f3c;
    color: white;
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s;
}

.btn-primary:hover {
    background: #2d5016;
}

footer {
    background: #2d5016;
    color: white;
    text-align: center;
    padding: 2rem;
    margin-top: 3rem;
}
```

## 📱 Responsividade

Sua `<meta viewport>` já está configurada. Adicione media queries no CSS para mobile.

## 🌐 Publicar com GitHub Pages

1. Vá para **Settings** do seu repositório
2. Em **Pages**, selecione `main` como branch
3. Seu site estará em: `https://brunin-07cwb.github.io/Site-para-a-aula`

## 📝 Próximos Passos

- [ ] Criar todos os arquivos HTML
- [ ] Adicionar mais estilos CSS
- [ ] Implementar formulário de contato
- [ ] Adicionar imagens de qualidade
- [ ] Criar seção de blog
- [ ] Otimizar SEO
- [ ] Melhorar acessibilidade

## 📚 Recursos Úteis

- [MDN Web Docs](https://developer.mozilla.org/)
- [W3Schools HTML/CSS](https://www.w3schools.com/)
- [Imagens Agro Gratuitas](https://unsplash.com/natures/farming)
- [Ícones](https://fontawesome.com/)

## 👤 Autor
Desenvolvido por: brunin-07cwb

## 📄 Licença
MIT License

---


