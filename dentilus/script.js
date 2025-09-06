// Script pour gérer l'interface du logiciel dentaire

document.addEventListener('DOMContentLoaded', function() {
    // Gérer l'état actif des éléments du menu
    const menuItems = document.querySelectorAll('.menu a');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Retirer la classe active de tous les éléments
            menuItems.forEach(item => item.classList.remove('active'));
            
            // Ajouter la classe active à l'élément cliqué
            this.classList.add('active');
            
            // Simuler le chargement du contenu (dans une application réelle, cela chargerait le contenu correspondant)
            simulateContentLoading(this.querySelector('span').textContent);
        });
    });
    
    // Animation des cartes au chargement de la page
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
    
    // Animation des cartes patients
    const patientCards = document.querySelectorAll('.patient-card');
    patientCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
        card.classList.add('fade-in');
    });
    
    // Mettre à jour l'heure d'attente des patients toutes les minutes
    setInterval(updateWaitingTimes, 60000);
    
    // Fonction pour simuler le chargement du contenu
    function simulateContentLoading(sectionName) {
        console.log(`Chargement de la section: ${sectionName}`);
        // Dans une application réelle, on chargerait le contenu approprié ici
    }
    
    // Fonction pour mettre à jour les temps d'attente
    function updateWaitingTimes() {
        const timeElements = document.querySelectorAll('.patient-card p:first-child');
        timeElements.forEach(element => {
            const text = element.textContent;
            const timeMatch = text.match(/(\d+)\s*min/);
            if (timeMatch) {
                const currentTime = parseInt(timeMatch[1]);
                element.textContent = text.replace(
                    `${currentTime} min`, 
                    `${currentTime + 1} min`
                );
            }
        });
    }
    
    // Simulation de données en temps réel (dans une application réelle, ces données viendraient d'un backend)
    simulateRealTimeData();
    
    function simulateRealTimeData() {
        // Simuler des changements de données toutes les 30 secondes
        setInterval(() => {
            // Mettre à jour le nombre de patients en salle d'attente
            const waitingCount = document.querySelectorAll('.patient-card').length;
            document.querySelector('.waiting-room h3').innerHTML = 
                `<i class="fas fa-clock"></i> Salle d'attente (${waitingCount})`;
                
            // Mettre à jour légèrement les statistiques
            const stats = document.querySelectorAll('.stat');
            stats.forEach(stat => {
                const currentValue = parseInt(stat.textContent.replace(/,|€/g, ''));
                const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
                if (stat.textContent.includes('€')) {
                    stat.textContent = (currentValue + change) + '€';
                } else {
                    stat.textContent = currentValue + change;
                }
            });
        }, 30000);
    }
    
    // Gestion des interactions des cartes patients
    patientCards.forEach(card => {
        card.addEventListener('click', function() {
            const patientName = this.querySelector('h4').textContent;
            console.log(`Carte patient cliquée: ${patientName}`);
            // Ici on pourrait ouvrir un modal avec les détails du patient
        });
    });
    
    // Initialiser les tooltips (simplifié)
    initTooltips();
    
    function initTooltips() {
        const elementsWithTooltip = document.querySelectorAll('.card-header i, .patient-card');
        elementsWithTooltip.forEach(element => {
            element.addEventListener('mouseenter', function(e) {
                // Dans une application réelle, on afficherait une infobulle
            });
        });
    }
});
// Script pour gérer l'interface du logiciel dentaire

document.addEventListener('DOMContentLoaded', function() {
    // Gérer l'état actif des éléments du menu
    const menuItems = document.querySelectorAll('.menu a');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Retirer la classe active de tous les éléments
            menuItems.forEach(item => item.classList.remove('active'));
            
            // Ajouter la classe active à l'élément cliqué
            this.classList.add('active');
            
            // Simuler le chargement du contenu (dans une application réelle, cela chargerait le contenu correspondant)
            simulateContentLoading(this.querySelector('span').textContent);
        });
    });
    
    // Animation des cartes au chargement de la page
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
    
    // Animation des cartes patients
    const patientCards = document.querySelectorAll('.patient-card');
    patientCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
        card.classList.add('fade-in');
    });
    
    // Mettre à jour l'heure d'attente des patients toutes les minutes
    setInterval(updateWaitingTimes, 60000);
    
    // Fonction pour simuler le chargement du contenu
    function simulateContentLoading(sectionName) {
        console.log(`Chargement de la section: ${sectionName}`);
        // Dans une application réelle, on chargerait le contenu approprié ici
    }
    
    // Fonction pour mettre à jour les temps d'attente
    function updateWaitingTimes() {
        const timeElements = document.querySelectorAll('.patient-card p:first-child');
        timeElements.forEach(element => {
            const text = element.textContent;
            const timeMatch = text.match(/(\d+)\s*min/);
            if (timeMatch) {
                const currentTime = parseInt(timeMatch[1]);
                element.textContent = text.replace(
                    `${currentTime} min`, 
                    `${currentTime + 1} min`
                );
            }
        });
    }
    
    // Simulation de données en temps réel (dans une application réelle, ces données viendraient d'un backend)
    simulateRealTimeData();
    
    function simulateRealTimeData() {
        // Simuler des changements de données toutes les 30 secondes
        setInterval(() => {
            // Mettre à jour le nombre de patients en salle d'attente
            const waitingCount = document.querySelectorAll('.patient-card').length;
            const waitingRoomTitle = document.querySelector('.waiting-room h3');
            if (waitingRoomTitle) {
                waitingRoomTitle.innerHTML = 
                    `<i class="fas fa-clock"></i> Salle d'attente (${waitingCount})`;
            }
                
            // Mettre à jour légèrement les statistiques
            const stats = document.querySelectorAll('.stat');
            stats.forEach(stat => {
                const currentValue = parseInt(stat.textContent.replace(/,|€|%/g, ''));
                if (!isNaN(currentValue)) {
                    const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
                    if (stat.textContent.includes('€')) {
                        stat.textContent = (currentValue + change) + '€';
                    } else if (stat.textContent.includes('%')) {
                        // Pour les pourcentages, on limite à 100% max
                        const newValue = Math.min(100, currentValue + change);
                        stat.textContent = newValue + '%';
                    } else {
                        stat.textContent = currentValue + change;
                    }
                }
            });
        }, 30000);
    }
    
    // Gestion des interactions des cartes patients
    patientCards.forEach(card => {
        card.addEventListener('click', function() {
            const patientName = this.querySelector('h4').textContent;
            console.log(`Carte patient cliquée: ${patientName}`);
            // Ici on pourrait ouvrir un modal avec les détails du patient
        });
    });
    
    // Initialiser les tooltips (simplifié)
    initTooltips();
    
    function initTooltips() {
        const elementsWithTooltip = document.querySelectorAll('.card-header i, .patient-card');
        elementsWithTooltip.forEach(element => {
            element.addEventListener('mouseenter', function(e) {
                // Dans une application réelle, on afficherait une infobulle
            });
        });
    }
    
    // Gestion de la navigation entre les pages
    handleNavigation();
    
    function handleNavigation() {
        // Marquer l'élément du menu actif en fonction de la page courante
        const currentPage = window.location.pathname.split('/').pop() || 'Accueil.html';
        menuItems.forEach(item => {
            const href = item.getAttribute('href');
            if (href === currentPage) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
    
    // Simulation de chargement de données spécifiques à chaque page
    loadPageSpecificData();
    
    function loadPageSpecificData() {
        const currentPage = window.location.pathname.split('/').pop() || 'Accueil.html';
        
        switch(currentPage) {
            case 'ordonnance.html':
                console.log('Chargement des données des ordonnances...');
                break;
            case 'médicaments.html':
                console.log('Chargement des données des médicaments...');
                break;
            case 'traitement.html':
                console.log('Chargement des données des traitements...');
                break;
            case 'travauxode.html':
                console.log('Chargement des données des travaux ODE...');
                break;
            case 'laboratoire.html':
                console.log('Chargement des données du laboratoire...');
                break;
            case 'Rdvs.html':
                console.log('Chargement des données des rendez-vous...');
                break;
            case 'galerie.html':
                console.log('Chargement des données de la galerie...');
                break;
            case 'complément.html':
                console.log('Chargement des données complémentaires...');
                break;
            case 'statistique.html':
                console.log('Chargement des données statistiques...');
                break;
            case 'paramètres.html':
                console.log('Chargement des paramètres...');
                break;
            case 'documentation.html':
                console.log('Chargement de la documentation...');
                break;
            default:
                console.log('Chargement des données du tableau de bord...');
        }
    }
});