# 🍎 Gordo Frutas

Projeto desenvolvido em **Angular** para representar uma frutaria fictícia chamada **Gordo Frutas**. O objetivo é apresentar um catálogo de frutas de forma moderna, responsiva e componentizada, aplicando boas práticas de desenvolvimento Front-end.

## 📖 Sobre o projeto

O Gordo Frutas é um site institucional composto por diferentes páginas que apresentam a empresa, seu catálogo de produtos e um canal de contato com os clientes.

O projeto foi desenvolvido com foco em:

- Componentização utilizando Angular;
- Responsividade para diferentes tamanhos de tela;
- Organização do código;
- Reutilização de componentes;
- Separação entre estrutura, lógica e estilos.

---

## 🚀 Tecnologias utilizadas

- Angular
- TypeScript
- HTML5
- CSS3

---

## 📁 Estrutura do projeto

```text
src/
│
├── app/
│   ├── components/
│   │   ├── card/
│   │   ├── filter/
│   │   ├── layout/
│   │   │   ├── header/
│   │   │   └── footer/
│   │   ├── hero/
│   │   ├── fruit-list/
│   │   ├── fruits-container/
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── home/
│   │   ├── fruits/
│   │   ├── about/
│   │   └── contact/
│   │
│   ├── app.routes.ts
│   └── app.ts
│
└── assets/
```

---

## 📄 Páginas

### 🏠 Home

Página inicial contendo:

- Hero principal
- Destaque para frutas mais vendidas
- Navegação para as demais páginas

---

### 🍊 Frutas

Catálogo de frutas contendo:

- Cards reutilizáveis
- Painel de filtros
- Organização em Grid responsivo

---

### 📖 Sobre

Apresenta informações da empresa, incluindo:

- História
- Missão
- Fundador

---

### 📞 Contato

Página destinada ao contato dos clientes contendo:

- Formulário
- Horários de funcionamento
- Localização através do Google Maps

---

## 🧩 Componentização

O projeto foi desenvolvido utilizando componentes reutilizáveis.

Exemplos:

- Header
- Footer
- Hero
- Card
- Fruit List
- Filter

Essa abordagem facilita manutenção, reutilização e organização do código.

---

## 📱 Responsividade

O layout foi adaptado para diferentes dispositivos utilizando Media Queries.

O projeto possui adaptações para:

- Desktop
- Tablets
- Smartphones

---

## ▶️ Executando o projeto

Clone o repositório:

```bash
git clone <url-do-repositorio>
```

Entre na pasta:

```bash
cd GordoFrutas
```

Instale as dependências:

```bash
npm install
```

Execute a aplicação:

```bash
ng serve
```

Depois acesse:

```
http://localhost:4200
```

---

## 👨‍💻 Autor

Desenvolvido por **Lucas Diniz** como projeto de estudos utilizando Angular.
