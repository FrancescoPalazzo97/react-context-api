# Ciao Ragazzi

## Esercizio di oggi: **React Context API**

**Repo:** `react-context-api`

---

### 📋 Consegna

Sfruttiamo le **Context API** per rendere disponibile la lista dei post in tutta la nostra app.

Create una nuova repo e seguite questi passaggi:

- 📄 Partiamo col definire la lista dei post all’interno di `App.jsx` (utilizzate il primo "metodo" visto a lezione, senza la personalizzazione del provider).
- 📦 Create un componente `PostsPage.jsx` che conterrà al suo interno un titolo e un componente `PostsList.jsx` che mostra la lista di tutti i post.
- 📁 Creiamo un file per definire il nostro Context ed esportiamolo.
- 📲 Importiamo il Provider in `App.jsx` e wrappiamo la nostra applicazione.
- 📚 Facciamo in modo che il componente `PostsList.jsx` recuperi i post consumando il Context e crei dunque una card per ciascun post.

#### 📐 La struttura dell’App deve essere:
```
App.jsx > PostsPage.jsx > PostsList.jsx > PostCard.jsx
```

---

### 📋 Ecco l'elenco dei posts:

```js
const posts = [
  { id: 1, title: 'React Basis', content: 'React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.', category: 'FrontEnd' },
  { id: 2, title: 'What is Express.js', content: 'Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.', category: 'Backend' },
  { id: 3, title: 'Run JavaScript Everywhere', content: 'Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.', category: 'Backend' },
  { id: 4, title: 'Build fast, responsive sites with Bootstrap', content: 'Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.', category: 'Frontend' },
];
```

---

### 📌 Numero minimo di push:

**10**

---

### 🎁 Bonus

- Implementare un componente `Alert` gestito tramite **Context**.

---

**Buon Lavoro!** 🎉
