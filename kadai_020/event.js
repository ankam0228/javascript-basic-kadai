//クリック後表示が変わる、clickを使用。"ボタンをクリックしました。"

const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    text.textContent = 'ボタンをクリックしました。'
});

