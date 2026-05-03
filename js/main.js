
const container = document.querySelector('.scroll-container');
const items = document.querySelectorAll('.item');

container.addEventListener('scroll', () => {
  const center = container.scrollLeft + container.offsetWidth / 2;
  items.forEach(item => {
    const itemCenter = item.offsetLeft + item.offsetWidth / 2;
    const distance = Math.abs(center - itemCenter);
    const scale = Math.max(1, 1.3 - distance / 400);
    item.style.transform = `scale(${scale})`;
  });
});

// Google Sign-in Example (replace YOUR_GOOGLE_CLIENT_ID)
window.onGoogleSignIn = function(response) {
  const profile = response.credential; // Use JWT to get user info
  // Auto-subscribe, personalize, save email to backend etc.
  alert('Welcome! You are signed in.');
};

// Modal logic
function showOptions(product) {
  const modal = document.getElementById('option-modal');
  const optionFields = document.getElementById('option-fields');
  const title = document.getElementById('modal-title');
  optionFields.innerHTML = ''; // Clear previous
  
  if(product === 'coffee') {
    title.textContent = 'Customize Coffee Beans';
    optionFields.innerHTML = `
      <label>Size:
        <select name="size">
          <option value="250g">250g</option>
          <option value="500g">500g</option>
          <option value="1kg">1kg</option>
        </select>
      </label>
      <label>Quantity:
        <input type="number" name="quantity" min="1" value="1">
      </label>
    `;
  } else if(product === 'mug') {
    title.textContent = 'Customize Coffee Mug';
    optionFields.innerHTML = `
      <label>Color:
        <select name="color">
          <option value="white">White</option>
          <option value="brown">Brown</option>
          <option value="black">Black</option>
        </select>
      </label>
      <label>Size:
        <select name="size">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </label>
      <label>Quantity:
        <input type="number" name="quantity" min="1" value="1">
      </label>
    `;
  } else if(product === 'spoon') {
    title.textContent = 'Customize Coffee Spoon';
    optionFields.innerHTML = `
      <label>Type:
        <select name="type">
          <option value="wood">Wood</option>
          <option value="metal">Metal</option>
        </select>
      </label>
      <label>Quantity:
        <input type="number" name="quantity" min="1" value="1">
      </label>
    `;
  }
  
  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('option-modal').style.display = 'none';
}

// Option form submit
document.getElementById('options-form').addEventListener('submit', function(e) {
  e.preventDefault();
  // Gather and send option data, add to cart, etc.
  closeModal();
  alert('Item added to cart!');
});
const ctx = document.getElementById('coffeeChart').getContext('2d');
const coffeeChart = new Chart(ctx, {
    type: 'line',
    data: { /* your data */ },
    options: {
        responsive: true,
        maintainAspectRatio: false // allows custom height
    }
});
// Initialize EmailJS

emailjs.send("service_hjw8acs","template_p4t79df",{
  name: order.name,
  email: order.email,
  address: order.address,
  cart: JSON.stringify(order.cart)
});
