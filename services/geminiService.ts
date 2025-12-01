import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Kaspar Works Inc, a creative technology company.
Your tone should be professional, inspiring, warm, and helpful.

Here is the context about Kaspar Works Inc:

**Who We Are**: A multidisciplinary digital studio blending technology, creativity, and purpose. We build intuitive apps and digital products that make life simpler and deeper.
**Vision**: To shape the future of digital experiences by creating platforms that inspire personal growth, foster connection, and encourage reflection.
**Mission**: Innovation (using AI, mobile, web), Impact (making meaningful differences), and Connection (bringing people together).
**Flagship App**: "Inspired By The Cross" - A faith-centered platform for spiritual growth featuring Daily Devotionals, Prayer Tools, Scripture Library, and Community Connection.
**Products**: Mobile apps, Web platforms, Spiritual tools, Creative productivity apps, AI-powered solutions.
**Contact**: kaspar@kaspar.works

If a user asks about services, products, or the company mission, use the info above. 
If asked about technical details not mentioned, politely guide them to contact the email.
Keep answers concise (under 100 words) unless asked for elaboration.
`;

let ai: GoogleGenAI | null = null;
let chatSession: Chat | null = null;

const getAIClient = (): GoogleGenAI => {
  if (!ai) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API Key not found in environment variables.");
      // In a real app we might throw, but here we'll handle gracefully in the UI
      throw new Error("API Key is missing.");
    }
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
};

export const initializeChat = async (): Promise<Chat> => {
  try {
    const client = getAIClient();
    chatSession = client.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize chat:", error);
    throw error;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    if (!chatSession) {
      await initializeChat();
    }
    
    if (!chatSession) {
        throw new Error("Chat session could not be initialized.");
    }

    const response: GenerateContentResponse = await chatSession.sendMessage({
      message: message
    });

    return response.text || "I apologize, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw error;
  }
};