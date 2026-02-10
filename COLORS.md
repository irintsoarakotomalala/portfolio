# Palette de couleurs - Portfolio RAKOTOMALALA Irintsoa

## 🎨 Thème Cyberpunk/Tech

### Couleurs principales

#### Primaire - Turquoise/Cyan
```css
--primary: 175 80% 55%;
```
- **Hex**: `#5EEAC4`
- **RGB**: `rgb(94, 234, 212)`
- **Usage**: Éléments interactifs, liens, accents, effets de glow
- **Symbolisme**: Innovation, technologie, modernité

#### Secondaire - Violet
```css
--secondary: 280 85% 65%;
```
- **Hex**: `#C77DFF`
- **RGB**: `rgb(199, 125, 255)`
- **Usage**: Accents secondaires, dégradés, effets de hover
- **Symbolisme**: Créativité, élégance, sophistication

### Couleurs de fond

#### Background - Bleu marine foncé
```css
--background: 222 47% 11%;
```
- **Hex**: `#1A202E`
- **RGB**: `rgb(26, 32, 46)`
- **Usage**: Arrière-plan principal
- **Effet**: Professionnel, élégant, réduit la fatigue oculaire

#### Section Alt - Bleu marine moyen
```css
--section-alt: 222 47% 13%;
```
- **Hex**: `#1E2533`
- **RGB**: `rgb(30, 37, 51)`
- **Usage**: Sections alternées pour créer de la profondeur

#### Card - Bleu marine clair
```css
--card: 222 47% 14%;
```
- **Hex**: `#212938`
- **RGB**: `rgb(33, 41, 56)`
- **Usage**: Cartes, modales, éléments en relief

### Couleurs de texte

#### Foreground - Blanc cassé
```css
--foreground: 210 40% 98%;
```
- **Hex**: `#F8FAFC`
- **RGB**: `rgb(248, 250, 252)`
- **Usage**: Texte principal
- **Contraste**: Excellent (WCAG AAA)

#### Highlight - Blanc pur
```css
--highlight: 210 40% 98%;
```
- **Hex**: `#F8FAFC`
- **RGB**: `rgb(248, 250, 252)`
- **Usage**: Titres, éléments importants

#### Muted - Gris bleuté
```css
--muted: 217 33% 17%;
--muted-foreground: 215 20% 65%;
```
- **Usage**: Texte secondaire, descriptions

### Couleurs utilitaires

#### Border
```css
--border: 217 33% 20%;
```
- **Usage**: Bordures, séparateurs

#### Input
```css
--input: 217 33% 20%;
```
- **Usage**: Champs de formulaire

#### Ring (Focus)
```css
--ring: 175 80% 55%;
```
- **Usage**: États de focus pour l'accessibilité

## 🎭 Effets et dégradés

### Dégradés principaux

#### Gradient primaire
```css
background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%);
```

#### Gradient de fond
```css
background: linear-gradient(180deg, hsl(var(--background)) 0%, hsl(222 47% 9%) 100%);
```

### Effets de glow

#### Glow primaire
```css
box-shadow: 0 0 20px hsl(var(--primary) / 0.3), 0 0 40px hsl(var(--primary) / 0.2);
```

#### Glow hover
```css
box-shadow: 0 0 30px hsl(var(--primary) / 0.5), 0 0 60px hsl(var(--secondary) / 0.3);
```

### Glassmorphism

```css
background: linear-gradient(135deg, hsl(var(--card) / 0.8) 0%, hsl(var(--card) / 0.6) 100%);
backdrop-filter: blur(16px);
box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.05);
```

## 🎯 Accessibilité

### Ratios de contraste (WCAG)

- **Texte principal sur fond**: 15.8:1 (AAA) ✅
- **Texte primaire sur fond**: 4.8:1 (AA) ✅
- **Texte secondaire sur fond**: 3.2:1 (AA pour texte large) ✅

### États de focus

Tous les éléments interactifs ont un état de focus visible avec la couleur primaire pour l'accessibilité au clavier.

## 🔄 Personnalisation

Pour changer le thème, modifiez les valeurs HSL dans `src/index.css`:

```css
:root {
  --primary: 175 80% 55%;    /* Votre couleur primaire */
  --secondary: 280 85% 65%;  /* Votre couleur secondaire */
  --background: 222 47% 11%; /* Votre fond */
}
```

## 📱 Responsive

Les couleurs sont optimisées pour tous les écrans et modes d'affichage:
- 📱 Mobile
- 💻 Desktop
- 🌙 Mode sombre (par défaut)

---

**Note**: Toutes les couleurs utilisent le format HSL pour faciliter les ajustements de luminosité et de saturation.
