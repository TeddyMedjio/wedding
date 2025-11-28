import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

// Configuration Google Sheets
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

async function getGoogleSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: SCOPES,
  });

  const client = await auth.getClient();
  const sheets = google.sheets({ version: "v4", auth: client as any });

  return sheets;
}

async function appendToSheet(data: any) {
  const sheets = await getGoogleSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  const values = [
    [
      data.dateEnvoi,
      data.nom,
      data.prenom,
      data.email,
      data.nombreInvites,
      data.repas,
      data.preMariage,
      data.message,
    ],
  ];

  const resource = {
    values,
  };

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "A:H", // Utilise la première feuille par défaut
    valueInputOption: "USER_ENTERED",
    requestBody: resource,
  });
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validation des champs requis
    const requiredFields = ["nom", "prenom", "email", "nombreInvites", "preMariage"];
    const missingFields = requiredFields.filter((field) => !data[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Champs manquants: ${missingFields.join(", ")}` },
        { status: 400 }
      );
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Format d'email invalide" },
        { status: 400 }
      );
    }

    // Structure des données
    const contactData = {
      nom: data.nom,
      prenom: data.prenom,
      email: data.email,
      nombreInvites: parseInt(data.nombreInvites),
      repas: data.repas || "",
      preMariage: data.preMariage,
      message: data.message || "",
      dateEnvoi: new Date().toLocaleString("fr-FR", {
        timeZone: "Europe/Paris",
      }),
    };

    console.log("Nouvelle réservation reçue:", contactData);

    // Envoyer à Google Sheets
    await appendToSheet(contactData);

    return NextResponse.json(
      {
        success: true,
        message: "Réservation enregistrée avec succès",
        data: contactData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors du traitement de la réservation:", error);
    return NextResponse.json(
      { error: "Erreur serveur lors du traitement de votre demande" },
      { status: 500 }
    );
  }
}
