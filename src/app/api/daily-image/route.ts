import path from 'path';
import fs from 'fs';

export async function GET(req: any) {
  const imageFolder = path.join(process.cwd(), 'public', 'images');
  const files = fs.readdirSync(imageFolder);

  const today = new Date().toISOString().slice(0, 10);
  const index = new Date(today).getDate() % files.length;
  const chosenImage = files[index];

  const imagePath = path.join(imageFolder, chosenImage);
  const imageBuffer = fs.readFileSync(imagePath);

  return new Response(imageBuffer, {
    headers: {
      'Content-Type': 'image/jpeg',
    },
  });
}
