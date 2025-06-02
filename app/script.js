// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialisation de la page
    initializePage();
    
    // Détection des informations du navigateur
    detectBrowserInfo();
    
    // Animation d'entrée
    animateElements();
});

function initializePage() {
    // Année actuelle
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Timestamp de déploiement
    const deploymentTime = new Date().toLocaleString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    document.getElementById('deployment-time').textContent = deploymentTime;
    
    // Protocole actuel
    document.getElementById('protocol').textContent = location.protocol === 'https:' ? 'HTTPS ✅' : 'HTTP ⚠️';
    
    // Informations sur la région (simulée)
    getRegionInfo();
}

function detectBrowserInfo() {
    const userAgent = navigator.userAgent;
    let browserInfo = '';
    
    if (userAgent.includes('Chrome')) {
        browserInfo = 'Chrome 🌐';
    } else if (userAgent.includes('Firefox')) {
        browserInfo = 'Firefox 🦊';
    } else if (userAgent.includes('Safari')) {
        browserInfo = 'Safari 🧭';
    } else if (userAgent.includes('Edge')) {
        browserInfo = 'Edge 🌊';
    } else {
        browserInfo = 'Navigateur inconnu';
    }
    
    // Ajouter l'info du navigateur quelque part si nécessaire
    console.log(`🌐 Navigateur détecté: ${browserInfo}`);
    
    // Performance logging
    if (window.performance && window.performance.timing) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log(`⚡ Page chargée en ${loadTime}ms`);
        
        if (loadTime < 1000) {
            console.log('🚀 Performance excellente!');
        } else if (loadTime < 3000) {
            console.log('✅ Performance correcte');
        } else {
            console.log('⚠️ Performance à améliorer');
        }
    }
}

function getRegionInfo() {
    // Simulation de détection de région via CloudFront headers
    // En production, cela pourrait être obtenu via une API ou des headers
    const regions = [
        'eu-west-1 (Irlande)',
        'eu-west-3 (Paris)',
        'us-east-1 (Virginie)',
        'ap-southeast-1 (Singapour)'
    ];
    
    // Sélection aléatoire pour la démo
    const randomRegion = regions[Math.floor(Math.random() * regions.length)];
    document.getElementById('region').textContent = randomRegion;
}

function animateElements() {
    // Animation d'apparition progressive
    const elements = document.querySelectorAll('.feature-card, .info-item, .command-block');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 100 * index);
    });
}

function copyCommand(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent || element.innerText;
    
    // Utiliser l'API Clipboard moderne
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showCopySuccess(element);
        }).catch(err => {
            console.error('Erreur lors de la copie:', err);
            fallbackCopy(text, element);
        });
    } else {
        fallbackCopy(text, element);
    }
}

function fallbackCopy(text, element) {
    // Méthode de fallback pour les navigateurs plus anciens
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopySuccess(element);
    } catch (err) {
        console.error('Erreur lors de la copie fallback:', err);
        alert('Impossible de copier automatiquement. Veuillez copier manuellement le texte.');
    }
    
    document.body.removeChild(textArea);
}

function showCopySuccess(element) {
    const button = element.nextElementSibling;
    if (button && button.classList.contains('copy-btn')) {
        const originalText = button.textContent;
        button.textContent = '✅ Copié!';
        button.classList.add('copied');
        
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('copied');
        }, 2000);
    }
}

// Gestion des erreurs globales
window.addEventListener('error', function(e) {
    console.error('Erreur JavaScript:', e.error);
});

// Détection du mode sombre (bonus)
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log('🌙 Mode sombre détecté');
    // Pourrait ajouter des styles spécifiques au mode sombre
}

// Service Worker pour le cache (optionnel, avancé)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log('✅ ServiceWorker enregistré');
        }, function(err) {
            console.log('❌ ServiceWorker non supporté');
        });
    });
}

// Analytics simple (sans tracker externe)
const analyticsData = {
    pageLoad: new Date().toISOString(),
    userAgent: navigator.userAgent,
    language: navigator.language,
    referrer: document.referrer,
    url: window.location.href
};

console.log('📊 Analytics:', analyticsData);
