const tombol = document.getElementById('tombol');
const rahasia = document.getElementById('rahasia');
tombol.addEventListener('click', () => {
  rahasia.style.display = 'block';
  tombol.style.display = 'none';
});
