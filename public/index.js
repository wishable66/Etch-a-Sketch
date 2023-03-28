const bts = document.querySelectorAll('.settings > button');
bts.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const target = e.target;
        const activeBtn = document.querySelector('.active');
        let btnElement;
        let pElement;
        if (target.nodeName === 'P') {
            btnElement = target.parentElement;
            pElement = target;
        }
        else {
            btnElement = target;
            pElement = target.children.item(0);
        }
        // Adding styling
        activeBtn.classList.remove('active');
        pElement.classList.add('active');
    });
});
