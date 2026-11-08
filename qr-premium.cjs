const QRCode = require('qrcode');
const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

(async () => {
  const url = 'https://maayaa-the-cafe.vercel.app';
  const logo = await loadImage('screenshot-exact-match-main/src/assets/logo-gold.png');

  // ---- palette (matches the site) ----
  const ESPRESSO = '#2b1a0e';
  const CREAM = '#f7f1e6';
  const GOLD = '#c9a24b';

  // ---- canvas: tall card, print-friendly ----
  const W = 1400, H = 1900;
  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext('2d');

  // background: cream with subtle vignette
  ctx.fillStyle = CREAM;
  ctx.fillRect(0, 0, W, H);
  const grad = ctx.createRadialGradient(W / 2, H / 2, 200, W / 2, H / 2, 1200);
  grad.addColorStop(0, 'rgba(0,0,0,0)');
  grad.addColorStop(1, 'rgba(43,26,14,0.08)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // gold double border
  ctx.strokeStyle = GOLD;
  ctx.lineWidth = 6;
  ctx.strokeRect(40, 40, W - 80, H - 80);
  ctx.lineWidth = 2;
  ctx.strokeRect(58, 58, W - 116, H - 116);

  // ---- QR code (high error correction so logo overlay is safe) ----
  const qrSize = 980;
  const qrCanvas = createCanvas(qrSize, qrSize);
  await QRCode.toCanvas(qrCanvas, url, {
    width: qrSize,
    margin: 1,
    errorCorrectionLevel: 'H',
    color: { dark: ESPRESSO, light: '#ffffff' },
  });

  // white rounded card behind QR
  const qrX = (W - qrSize) / 2;
  const qrY = 300;
  const cardPad = 40;
  const cardR = 36;
  ctx.save();
  ctx.shadowColor = 'rgba(43,26,14,0.25)';
  ctx.shadowBlur = 40;
  ctx.shadowOffsetY = 12;
  ctx.fillStyle = '#ffffff';
  roundRect(ctx, qrX - cardPad, qrY - cardPad, qrSize + cardPad * 2, qrSize + cardPad * 2, cardR);
  ctx.fill();
  ctx.restore();

  ctx.drawImage(qrCanvas, qrX, qrY);

  // ---- logo in the center of the QR ----
  const ls = Math.round(qrSize * 0.24);
  const lx = (W - ls) / 2;
  const ly = qrY + (qrSize - ls) / 2;
  const lpad = 16;
  ctx.fillStyle = '#ffffff';
  roundRect(ctx, lx - lpad, ly - lpad, ls + lpad * 2, ls + lpad * 2, 20);
  ctx.fill();
  ctx.drawImage(logo, lx, ly, ls, ls);

  // ---- header text ----
  ctx.textAlign = 'center';
  ctx.fillStyle = ESPRESSO;
  ctx.font = '600 74px Georgia, "Times New Roman", serif';
  ctx.fillText('MAAYAA', W / 2, 165);
  ctx.font = '400 34px Georgia, serif';
  ctx.fillStyle = GOLD;
  ctx.fillText('T H E   C A F E', W / 2, 215);

  // divider flourish
  ctx.strokeStyle = GOLD;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(W / 2 - 160, 245);
  ctx.lineTo(W / 2 + 160, 245);
  ctx.stroke();
  ctx.fillStyle = GOLD;
  ctx.beginPath();
  ctx.arc(W / 2, 245, 6, 0, Math.PI * 2);
  ctx.fill();

  // ---- footer text ----
  const fy = qrY + qrSize + cardPad + 110;
  ctx.fillStyle = ESPRESSO;
  ctx.font = '600 52px Georgia, serif';
  ctx.fillText('Scan to View Our Menu', W / 2, fy);

  ctx.font = '400 30px Georgia, serif';
  ctx.fillStyle = '#6b543f';
  ctx.fillText('Open Every Day  ·  10:00 AM – 11:00 PM', W / 2, fy + 60);
  ctx.fillText('Medak Highway Road, Hyderabad', W / 2, fy + 105);

  // small gold dots row
  ctx.fillStyle = GOLD;
  [-30, 0, 30].forEach((dx) => {
    ctx.beginPath();
    ctx.arc(W / 2 + dx, fy + 160, 5, 0, Math.PI * 2);
    ctx.fill();
  });

  fs.writeFileSync('maayaa-qr-premium.png', canvas.toBuffer('image/png'));
  console.log('saved maayaa-qr-premium.png');

  function roundRect(c, x, y, w, h, r) {
    c.beginPath();
    c.moveTo(x + r, y);
    c.arcTo(x + w, y, x + w, y + h, r);
    c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r);
    c.arcTo(x, y, x + w, y, r);
    c.closePath();
  }
})().catch((e) => { console.error(e); process.exit(1); });
