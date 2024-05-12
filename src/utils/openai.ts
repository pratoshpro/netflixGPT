import OpenAI from "openai";
import { OPEN_AI_KEY } from "./constants";

const openAI = new OpenAI({
  apiKey: OPEN_AI_KEY,
  dangerouslyAllowBrowser: true, // This is the default and can be omitted
});

async function main() {
  await openAI.chat.completions.create({
    messages: [{ role: "user", content: "Say this is a test" }],
    model: "gpt-3.5-turbo",
  });
}
export default openAI;
main();
