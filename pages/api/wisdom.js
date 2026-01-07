import { GoogleGenerativeAI } from "@google/generative-ai";

// 1. Initialize the Google Generative AI with your Key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// 2. Setup the model with the correct name and system instructions
const model = genAI.getGenerativeModel({ 
  model: "gemini-1.5-flash-latest",
  systemInstruction: "You are SaraswatiAI, an expert in Indian Vedic philosophy. Always provide Sanskrit shlokas and English translations." 
});

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const { prompt } = req.body;
    
    // 3. Generate the response using the initialized model
    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    res.status(200).json({ text: response.text() });
  } catch (error) {
    console.error("API Error:", error);
    // Returns the specific error message to help us debug
    res.status(500).json({ text: "The scrolls are tangled: " + error.message });
  }
}