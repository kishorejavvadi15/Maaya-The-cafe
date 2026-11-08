const QRCode = require('qrcode');
const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

(async () => {
  const url = 'https://maayaa-the-cafe.vercel.app';
  const logo = await loadImage('screenshot-exact-match-main/src/assets/logo-gold.png');
  const size = 1200;
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  await QRCode.toCanvas(canvas, url, {
    width: size,
    margin: 2,
    errorCorrectionLevel: 'H',
    color: { dark: '#2b1a0e', light: '#ffffff' },
  });
  // rounded white plate behind the logo
  const ls = Math.round(size * 0.26);
  const lx = (size - ls) / 2;
  const pad = 18;
  const r = 24;
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.moveTo(lx - pad + r, lx - pad);
  ctx.arcTo(lx + ls + pad, lx - pad, lx + ls + pad, lx + ls + pad, r);
  ctx.arcTo(lx + ls + pad, lx + ls + pad, lx - pad, lx + ls + pad, r);
  ctx.arcTo(lx - pad, lx + ls + pad, lx - pad, lx - pad, r);
  ctx.arcTo(lx - pad, lx - pad, lx + ls + pad, lx - pad, r);
  ctx.closePath();
  ctx.fill();
  ctx.drawImage(logo, lx, lx, ls, ls);
  fs.writeFileSync('maayaa-qr-logo.png', canvas.toBuffer('image/png'));
  console.log('saved maayaa-qr-logo.png');
})().catch((e) => { console.error(e); process.exit(1); });
