import axios from 'axios';

const API_KEY = import.meta.env.API_KEY;
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

export const getGeminiResponse = async (userMessage) => {
    try {
        const response = await axios.post(API_URL, {
            contents: [{ role: "user", parts: [{ text: userMessage }] }]
        });

        // console.log(response.data.candidates[0].content.parts[0].text);
        return response.data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error("Error fetching Gemini response:", error);
        return "Sorry, something went wrong!";
    }
};
