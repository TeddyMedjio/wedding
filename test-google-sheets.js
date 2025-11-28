// Script de test pour vérifier la connexion à Google Sheets
const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Charger les variables d'environnement manuellement
const envPath = path.join(__dirname, '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const envLines = envContent.split('\n');

envLines.forEach(line => {
  const match = line.match(/^([^#][^=]+)=(.*)$/);
  if (match) {
    const key = match[1].trim();
    let value = match[2].trim();
    // Enlever les guillemets si présents
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }
    process.env[key] = value;
  }
});

async function testGoogleSheets() {
  console.log('🔍 Test de connexion Google Sheets...\n');

  // Vérifier les variables d'environnement
  console.log('✓ GOOGLE_SHEET_ID:', process.env.GOOGLE_SHEET_ID);
  console.log('✓ GOOGLE_CLIENT_EMAIL:', process.env.GOOGLE_CLIENT_EMAIL);
  console.log('✓ GOOGLE_PRIVATE_KEY présente:', !!process.env.GOOGLE_PRIVATE_KEY);
  console.log('✓ Longueur de la clé:', process.env.GOOGLE_PRIVATE_KEY?.length || 0);
  console.log('');

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    console.log('✓ Authentification créée');

    const client = await auth.getClient();
    console.log('✓ Client authentifié');

    const sheets = google.sheets({ version: 'v4', auth: client });
    console.log('✓ API Sheets initialisée');

    // Test d'écriture
    const testData = [
      [
        new Date().toLocaleString('fr-FR'),
        'Test',
        'Nom',
        'test@example.com',
        '2',
        'Végétarien',
        'Oui',
        'Message de test',
      ],
    ];

    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A:H',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: testData,
      },
    });

    console.log('✅ Test réussi !');
    console.log('📊 Données insérées:', result.data.updates.updatedRows, 'ligne(s)');
    console.log('📍 Range mise à jour:', result.data.updates.updatedRange);
  } catch (error) {
    console.error('❌ Erreur:', error.message);
    if (error.response) {
      console.error('📋 Détails:', error.response.data);
    }
    console.error('\n🔧 Stack complet:', error);
  }
}

testGoogleSheets();
