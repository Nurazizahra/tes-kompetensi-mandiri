import menuData from '../../../public/data/data.json';

const Home = {
  async render() {
    const firstThreeMenus = menuData.menuData.slice(0, 3);

    const menuItems = firstThreeMenus.map(item => `
            <div class="menu-item">
                <div class="menu-item-image">
                    <img src="${item.pictureId}" alt="${item.name}">
                </div>
                <div class="menu-item-details">
                    <div class="menu-item-name">${item.name}</div>
                    <div class="menu-item-description">${item.description}</div>         
                </div>
            </div>
        `).join('');

    return `
            <div class="homeContent">
                <h1>Welcome to ABC Food - Your Culinary Delight</h1>
                <p>Perusahaan ABC Food merupakan sebuah perusahaan yang fokus pada industri makanan dan minuman dengan komitmen untuk menyediakan pengalaman kuliner yang istimewa bagi pelanggannya. Dikenal sebagai "Your Culinary Delight", perusahaan ini menghadirkan beragam produk makanan yang berkualitas tinggi dan beragam, mulai dari makanan siap saji hingga produk makanan organik dan makanan ringan. ABC Food dikenal dengan standar kebersihan dan keamanan pangan yang ketat serta inovasi dalam pengembangan menu yang memenuhi selera dan kebutuhan konsumen modern. Perusahaan ini juga aktif dalam berbagai kegiatan sosial dan lingkungan, menunjukkan komitmennya terhadap keberlanjutan dan tanggung jawab sosial perusahaan. Dengan reputasi yang solid dan fokus pada kualitas, ABC Food terus tumbuh dan mengembangkan pasar untuk menjadi pilihan utama dalam dunia kuliner.</p>
                
                <div class="featured-menu">
                    <h2>Featured Menus</h2>
                    <div class="menu-items">
                        ${menuItems}
                    </div>
                </div>
            </div>
        `;
  },

  async afterRender() {

  },
};

export default Home;
