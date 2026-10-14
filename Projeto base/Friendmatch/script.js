// Controle do menu mobile (hambúrguer)
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const icon = document.getElementById('menuIcon');
    menu.classList.toggle('hidden');
    if (menu.classList.contains('hidden')) {
        icon.className = "fa-solid fa-bars text-xl";
    } else {
        icon.className = "fa-solid fa-xmark text-xl";
    }
}

// Abrir e fechar modais
function openModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

// Detalhes dos treinos informativos
function openWorkoutModal(title, details) {
    document.getElementById('workoutModalTitle').innerText = title;
    document.getElementById('workoutModalContent').innerText = details;
    openModal('workoutModal');
}

// Notificações flutuantes (Toast)
function showToast(message) {
    const toast = document.getElementById('toast');
    const msg = document.getElementById('toastMessage');
    msg.innerText = message;
    toast.classList.remove('translate-y-24', 'opacity-0');
    setTimeout(() => {
        toast.classList.add('translate-y-24', 'opacity-0');
    }, 3000);
}

// Copiar cupons de desconto
function copyCoupon(code) {
    navigator.clipboard.writeText(code);
    showToast(`Cupom ${code} copiado para a área de transferência!`);
}

// Filtrar parceiros de treino por modalidade e objetivo
function filterPartners() {
    const modalidade = document.getElementById('modalidadeFilter').value;
    const objetivo = document.getElementById('objetivoFilter').value;
    const cards = document.querySelectorAll('.partner-card');

    cards.forEach(card => {
        const cardMod = card.getAttribute('data-modalidade');
        const cardObj = card.getAttribute('data-objetivo');

        const matchesMod = (modalidade === 'todos' || cardMod === modalidade);
        const matchesObj = (objetivo === 'todos' || cardObj === objetivo);

        if (matchesMod && matchesObj) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}