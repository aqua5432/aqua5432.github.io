document.addEventListener('DOMContentLoaded', () => {
    const projectModal = document.getElementById('project-modal');
    const modalProjectTitle = document.getElementById('modal-project-title');
    const modalProjectDate = document.getElementById('modal-project-date');
    const modalProjectDescription = document.getElementById('modal-project-description');
    const modalProjectRole = document.getElementById('modal-project-role');
    const modalProjectDetail = document.getElementById('modal-project-detail');
    const modalProjectTech = document.getElementById('modal-project-tech');
    const closeButton = document.querySelector('.close-button');
    const projectCards = document.querySelectorAll('.project-card-trigger');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            modalProjectTitle.textContent = card.dataset.title;
            modalProjectDate.textContent = card.dataset.date;
            modalProjectDescription.textContent = card.dataset.description;
            modalProjectTech.textContent = card.dataset.tech;
            modalProjectRole.textContent = card.dataset.role;
            modalProjectDetail.textContent = card.dataset.detail; 
            projectModal.style.display = 'flex'; // Flexbox for centering
            // プロジェクトカードをクリックした時の処理内
            const notionUrl = card.dataset.notion; // 以前のまま、URLを格納
            const notionBtn = document.getElementById('modal-notion-link');
            const btnText = notionBtn.querySelector('span');

            if (notionUrl) {
                notionBtn.href = notionUrl;
                notionBtn.style.display = 'inline-block';

                // URLに "zenn.dev" が含まれている場合は見た目を変える
                if (notionUrl.includes('zenn.dev')) {
                    notionBtn.className = 'zenn-button'; // Zenn用のクラスに変更
                    btnText.innerText = 'Zennで技術検証記事を読む';
                } else {
                    notionBtn.className = 'notion-button'; // 通常のNotion用
                    btnText.innerText = 'Notionで開発の裏側を詳しく見る';
                }
            } else {
                notionBtn.style.display = 'none';
            }
        });
    });

    closeButton.addEventListener('click', () => {
        projectModal.style.display = 'none';
    });

    // Close the modal when clicking outside of the modal content
    projectModal.addEventListener('click', (event) => {
        if (event.target === projectModal) {
            projectModal.style.display = 'none';
        }
    });
});
