import axios from 'axios';

const CHATGPT_API_URL = 'https://api.openai.com/v1/chat/completions';
const API_KEY = 'your-openai-api-key'; // OpenAI API 키

// ChatGPT API 요청 함수
export const sendMessageToChatGPT = async (message) => {
  try {
    const response = await axios.post(
      CHATGPT_API_URL,
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data.choices[0].message.content; // 응답에서 메시지 내용 반환
  } catch (error) {
    console.error('Error with ChatGPT API:', error);
    throw error;
  }
};
