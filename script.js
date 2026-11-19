// Waktu acara: Sabtu, 21 November 2026 pukul 13.00 WIB (UTC+7)
const eventDate = new Date("2026-11-21T13:00:00+07:00");
const countdown = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
  const distance = eventDate - now;
  if (distance <= 0) {
    countdown.innerHTML = '<p class="col-span-4 py-3 text-lg font-black text-orange">Yeay! Hari bahagia Abyan sudah tiba! 🎉</p>';
    return;
  }
  const values = {
    days: Math.floor(distance / 86400000),
    hours: Math.floor((distance / 3600000) % 24),
    minutes: Math.floor((distance / 60000) % 60),
    seconds: Math.floor((distance / 1000) % 60)
  };
  Object.entries(values).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(value).padStart(2, "0");
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Musik mulai setelah pengunjung menekan "Buka Undangan" (aturan autoplay browser).
const music = document.getElementById("bgMusic");
const openButton = document.getElementById("openInvitation");
const welcome = document.getElementById("welcome");
const musicButton = document.getElementById("musicButton");

openButton.addEventListener("click", async () => {
  welcome.classList.add("hidden");
  try {
    await music.play();
    musicButton.textContent = "⏸️ Musik";
    musicButton.setAttribute("aria-label", "Jeda musik");
  } catch (error) {
    musicButton.textContent = "▶️ Putar Musik";
  }
});

musicButton.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicButton.textContent = "⏸️ Musik";
      musicButton.setAttribute("aria-label", "Jeda musik");
    } catch (error) {
      alert("Musik belum bisa diputar. Coba tekan tombol sekali lagi.");
    }
  } else {
    music.pause();
    musicButton.textContent = "▶️ Putar Musik";
    musicButton.setAttribute("aria-label", "Putar musik");
  }
});

// Konfirmasi WhatsApp ke nomor keluarga.
const whatsappNumber = "6285655704609";
const message = "Halo, kami ingin mengonfirmasi kehadiran di acara tasyakuran khitanan Muhammad Abyan Hade Al Fatih pada Sabtu, 21 November 2026. Terima kasih!";
document.getElementById("rsvpButton").href =
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
