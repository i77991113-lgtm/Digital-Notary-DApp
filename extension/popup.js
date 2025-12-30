// Digital Notary Extension
document.getElementById('openApp').addEventListener('click', function() {
    // Открывает PWA версию для Microsoft Store (тестовые сети)
    chrome.tabs.create({
        url: "https://stirring-piroshki-54e01d.netlify.app/"
    });
});

// Информация для отладки
console.log('Digital Notary Extension loaded');
console.log('Opens PWA version for Microsoft Store (test networks)');
console.log('Main website: https://digitalnotary.online');
