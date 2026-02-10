# Configuration EmailJS

## 📧 Étapes pour activer l'envoi d'emails

### 1. Créer un compte EmailJS
1. Va sur https://www.emailjs.com/
2. Clique sur "Sign Up" (gratuit - 200 emails/mois)
3. Vérifie ton email

### 2. Configurer le Service Email
1. Dans le dashboard EmailJS, va dans **Email Services**
2. Clique sur **Add New Service**
3. Choisis **Gmail**
4. Connecte ton compte `rakotomalalairintsoa285@gmail.com`
5. **Copie le Service ID** (ex: service_abc123)

### 3. Créer un Template Email
1. Va dans **Email Templates**
2. Clique sur **Create New Template**
3. Utilise ce contenu :

**Subject:**
```
Nouveau message de {{from_name}}
```

**Content:**
```
Vous avez reçu un nouveau message depuis votre portfolio :

Nom: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Envoyé depuis votre portfolio
```

4. **Copie le Template ID** (ex: template_xyz789)

### 4. Récupérer la Public Key
1. Va dans **Account** → **General**
2. **Copie ta Public Key** (ex: user_AbCdEfGhIjKlMnOp)

### 5. Mettre à jour le code
Ouvre `src/components/Contact.tsx` et remplace :

```typescript
await emailjs.send(
  'YOUR_SERVICE_ID',      // ← Remplace par ton Service ID
  'YOUR_TEMPLATE_ID',     // ← Remplace par ton Template ID
  {
    from_name: form.name,
    from_email: form.email,
    message: form.message,
  },
  'YOUR_PUBLIC_KEY'       // ← Remplace par ta Public Key
);
```

### 6. Tester
1. Lance ton site : `npm run dev`
2. Va sur la section Contact
3. Remplis le formulaire
4. Clique sur "Envoyer"
5. Vérifie ton email `rakotomalalairintsoa285@gmail.com`

## ✅ C'est fait !
Les emails seront maintenant envoyés automatiquement sans backend !

## 🔒 Sécurité
- La Public Key peut être exposée (c'est normal)
- EmailJS limite à 200 emails/mois en gratuit
- Les emails sont envoyés directement depuis le navigateur

## 📊 Limites gratuites
- 200 emails/mois
- 2 services email
- 2 templates
- Support par email

Pour plus : https://www.emailjs.com/pricing/
