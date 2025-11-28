# Configuration Google Sheets pour le formulaire de mariage

## Étape 1: Créer un Google Sheet

1. Allez sur [Google Sheets](https://sheets.google.com)
2. Créez un nouveau document
3. Nommez la première feuille **"Réservations"**
4. Ajoutez les en-têtes suivants dans la première ligne (A1 à H1):

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Date | Nom | Prénom | Email | Nb Invités | Préférences Repas | Pré-Mariage | Message |

5. Copiez l'ID du Sheet depuis l'URL:
   ```
   https://docs.google.com/spreadsheets/d/VOTRE_SHEET_ID/edit
   ```

## Étape 2: Créer un compte de service Google Cloud

1. Allez sur [Google Cloud Console](https://console.cloud.google.com)
2. Créez un nouveau projet (ou sélectionnez-en un existant)
3. Activez l'API Google Sheets:
   - Dans le menu, allez à **APIs & Services** > **Library**
   - Recherchez "Google Sheets API"
   - Cliquez sur **Enable**

## Étape 3: Créer les credentials

1. Dans **APIs & Services** > **Credentials**
2. Cliquez sur **Create Credentials** > **Service Account**
3. Donnez un nom au compte (ex: "wedding-form")
4. Cliquez sur **Create and Continue**
5. Ignorez les permissions optionnelles
6. Cliquez sur **Done**

## Étape 4: Générer la clé privée

1. Cliquez sur le compte de service que vous venez de créer
2. Allez dans l'onglet **Keys**
3. Cliquez sur **Add Key** > **Create New Key**
4. Sélectionnez **JSON**
5. Téléchargez le fichier JSON

## Étape 5: Partager le Google Sheet avec le compte de service

1. Ouvrez le fichier JSON téléchargé
2. Copiez la valeur de `client_email`
3. Retournez sur votre Google Sheet
4. Cliquez sur **Share** (Partager)
5. Collez l'email du compte de service
6. Donnez les droits **Editor** (Éditeur)
7. Cliquez sur **Send** (sans décocher "Notify people")

## Étape 6: Configurer les variables d'environnement

1. Ouvrez le fichier `.env.local` à la racine du projet
2. Remplissez les valeurs:

```env
# L'ID de votre Google Sheet
GOOGLE_SHEET_ID=votre_sheet_id_ici

# L'email du compte de service (depuis le JSON)
GOOGLE_CLIENT_EMAIL=wedding-form@project-id.iam.gserviceaccount.com

# La clé privée (depuis le JSON)
# IMPORTANT: Remplacez les \n par \\n dans la clé
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nVOTRE_CLE_ICI\n-----END PRIVATE KEY-----\n"
```

### Note importante sur GOOGLE_PRIVATE_KEY:
Le fichier JSON contient la clé avec de vrais retours à la ligne. Dans le `.env.local`, vous devez:
- Garder les guillemets
- Remplacer les retours à la ligne réels par `\n`
- La valeur doit être sur une seule ligne

Exemple:
```
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhki...\n-----END PRIVATE KEY-----\n"
```

## Étape 7: Tester

1. Redémarrez votre serveur de développement:
   ```bash
   npm run dev
   ```

2. Allez sur la page contact et soumettez le formulaire

3. Vérifiez que les données apparaissent dans votre Google Sheet

## Dépannage

### Erreur 403: Permission denied
- Vérifiez que vous avez partagé le Sheet avec l'email du compte de service
- Vérifiez que le compte a les droits d'édition

### Erreur 400: Invalid credentials
- Vérifiez le format de GOOGLE_PRIVATE_KEY (les `\n` doivent être échappés en `\\n`)
- Vérifiez que GOOGLE_CLIENT_EMAIL est correct

### Les données n'apparaissent pas
- Vérifiez que la feuille s'appelle bien "Réservations" (ou modifiez le nom dans le code)
- Vérifiez GOOGLE_SHEET_ID dans l'URL de votre Sheet

## Sécurité

⚠️ **Important:**
- Ne commitez JAMAIS le fichier `.env.local` dans Git
- Ne partagez JAMAIS vos credentials
- Le fichier `.env.local` est déjà dans `.gitignore`
