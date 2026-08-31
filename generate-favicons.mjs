import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
const pngPath = path.join(publicDir, 'favicon.png');

if (fs.existsSync(pngPath)) {
  const b64 = fs.readFileSync(pngPath).toString('base64');
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <clipPath id="circleClip">
      <circle cx="256" cy="256" r="256" />
    </clipPath>
  </defs>
  <circle cx="256" cy="256" r="256" fill="#ffffff" />
  <image href="data:image/png;base64,${b64}" x="0" y="0" width="512" height="512" clip-path="url(#circleClip)" />
</svg>`;
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent);
  console.log('Circular favicon.svg created.');
}
