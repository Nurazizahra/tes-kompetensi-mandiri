// about.js
const About = {
  async render() {
    return `
          <div class="tentang">
              <h1>Tentang Kami</h1>
              <div class="konten-tentang">
                  <p>
                      ABC Food - Your Culinary Delight adalah sebuah startup dinamis di industri kuliner, yang berdedikasi untuk merevolusi cara orang merasakan makanan. Didirikan pada [tahun berdiri], ABC Food dimulai sebagai proyek passion antara penggemar kuliner [Pendiri 1] dan [Pendiri 2], yang ingin berbagi cinta mereka terhadap seni kuliner dengan dunia.
                  </p>
                  <p>
                      Visi kami di ABC Food adalah menciptakan komunitas di mana setiap hidangan adalah perayaan rasa, kreativitas, dan keberlanjutan. Kami berusaha untuk menghubungkan orang melalui makanan, menawarkan pengalaman makan unik yang menggabungkan tradisi dengan inovasi.
                  </p>
                  <p>
                      Di ABC Food, misi kami adalah mempesona pelanggan kami dengan pilihan makanan berkualitas tinggi, lezat, yang bersumber dari produsen lokal dan disiapkan dengan cermat oleh koki-koki berbakat kami. Kami berkomitmen untuk mempromosikan keberagaman makanan dan mendukung komunitas lokal melalui usaha kuliner kami.
                  </p>
              </div>
          </div>
      `;
  },

  async afterRender() {
    // Tambahkan fungsionalitas JavaScript apapun setelah render di sini
  },
};

export default About;
