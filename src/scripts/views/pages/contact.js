const Contact = {
  async render() {
    return `
          <div class="contact-container">
              <h1>Contact Us</h1>
              <form id="contact-form">
                  <div class="form-group">
                      <label for="name">Nama:</label>
                      <input type="text" id="name" name="name" required>
                  </div>
                  <div class="form-group">
                      <label for="email">Email:</label>
                      <input type="email" id="email" name="email" required>
                  </div>
                  <div class="form-group">
                      <label for="message">Pesan:</label>
                      <textarea id="message" name="message" rows="4" required></textarea>
                  </div>
                  <button type="submit" class="send-button">Send</button>
              </form>
          </div>
      `;
  },

  async afterRender() {
    // Validasi form
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (validateForm()) {
        // Kirim data ke backend atau proses sesuai kebutuhan
        alert('Form is valid. Data can be submitted.');
        form.reset();
      } else {
        alert('Please fill in all fields correctly.');
      }
    });

    // Fungsi untuk validasi form
    function validateForm() {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (name === '' || email === '' || message === '') {
        return false;
      }
      return true;
    }
  },
};

export default Contact;
