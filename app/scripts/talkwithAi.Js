import { useState } from "react";
import axios from "axios";

export async function TalkWithAI(question) {
  const dataSend = {
    model: "mistral",
    messages: [{ role: "user", content: `Réponds uniquement à la question suivante en utilisant le format Markdown, sans ajout de texte supplémentaire ni explication :  **Question :** ${question}  Ta réponse doit être strictement au format Markdown.`}],
    stream: false, 
  };

  try {
    const { data } = await axios.post("http://localhost:11434/api/chat", dataSend);
    console.log(data.message.content);
    return data.message.content
  } catch (error) {
    console.error("Erreur lors de la requête :", error);
  }
}
