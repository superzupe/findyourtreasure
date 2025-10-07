const quotes = [
  "Saat kamu berkata 'Hello, hello neoneun nal dasi sum swige hae', aku merasa dunia mulai bernapas lagi.",
  "Di bawah bintang, aku tersenyum karena 'Yeogin paradise', bersamamu semuanya terasa sempurna.",
  "Kamu adalah segalanya bagiku — 'You're my everything, doesn't matter without you.'",
  "Aku ingin mencintaimu sepenuh hati — 'He ain't better than me.'",
  "Malam itu indah — 'Beautiful last night', dan aku tak ingin lupa senyummu.",
  "Aku ingin waktu berhenti — 'Can we stay in right now forever?' karena setiap detik bersamamu berharga.",
  "Hatiku berdegup liar — 'My heart is like King Kong' setiap kali melihatmu.",
  "Aku berlari menuju kamu — 'As long as I have you, everything's all right.'",
  "Aku jatuh cinta padamu — 'Michyeogane nege michyeogane', dan tak ingin sembuh.",
  "Aku hanya ingin cintamu — 'I want your love tonight.'",
  "Aku terjebak dalammu — 'Neoraneun byeong-e geollyeo isseo', dan aku tak ingin keluar.",
  "Hatiku menyala untukmu — 'Nan neoreul hyanghae divin', all in.'",
  "Cintaku dimulai hari aku bertemu — 'Nae mam saekkkareun yellow, yellow, yellow.'",
  "Aku ingin mendengar namamu — 'Sareureureureureu.'",
  "Malam gelap tak menakutkan kalau kamu di sini — 'Be with me.'",
  "Kamu menyinari hatiku — 'Bling bling bichi naneun neoro neukkyeojin mi.'",
  "Aku mengikuti ritmemu — 'Show me your move.'",
  "Dunia berputar cepat, tapi senyummu berkata 'Hello', dan semuanya tenang.",
  "Aku ingin berhenti di sini — 'Can we stay in right now forever?'",
  "Aku terus berlari untukmu — 'RUN, as long as I have you, everything's all right.'",
];

const usesIndexes = new Set(); //nyimpen index yang pernah muncul di box
const quote = document.getElementById("quote");

function generateQuote() {
  if (usesIndexes.size >= quotes.length) { //jika isi box lebih dari isi quotes, maka hapus isi box
    usesIndexes.clear(); // bila nggak ada ini, jadinya web nge freeze, karena ngulangin kondisi while continue itu
  }

  while (true) {
    const randomIdx = Math.floor(Math.random() * quotes.length);
    if (usesIndexes.has(randomIdx)) continue; //jika duplikat, ulangi loop

    //tampilkan quote
    quote.innerHTML = quotes[randomIdx];
    usesIndexes.add(randomIdx) // index yang udah digunakan taruh sini

    //tampilkan card
    const quoteCard = document.getElementById("card");
    quoteCard.classList.add("show");
    break;
  }
}

