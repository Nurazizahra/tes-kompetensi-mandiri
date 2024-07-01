import menuData from '../../../public/data/data.json';

const Menu = {
  async render() {
    let menuItems = '';
    menuData.menuData.forEach(item => {
      menuItems += `
                <div class="menu-item">
                    <div class="menu-item-image">
                        <img src="${item.pictureId}" alt="${item.name}">
                    </div>
                    <div class="menu-item-details">
                        <div class="menu-item-name">${item.name}</div>
                        <div class="menu-item-description">${item.description}</div>
                        <div class="menu-item-price">${item.price}</div>
                        <button class="order-button">Order Now</button>
                    </div>
                </div>
            `;
    });

    return `
            <div class="menu-container">
            <h1>Menu</h1>
            <div class="menu-items">
                ${menuItems}
            </div>
            </div>
        `;
  },

  async afterRender() {

  },
};

export default Menu;
