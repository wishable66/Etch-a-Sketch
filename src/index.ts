const bts = document.querySelectorAll('.settings > button');

bts.forEach((btn: HTMLButtonElement) => {
  btn.addEventListener('click', (e: PointerEvent) => {
    const target = e.target as HTMLButtonElement;
    const activeBtn = document.querySelector('.active');
    let btnElement: HTMLElement;
    let pElement: Element;

    if (target.nodeName === 'P') {
      btnElement = target.parentElement;
      pElement = target;
    } else {
      btnElement = target;
      pElement = target.children.item(0);
    }

    // Adding styling

    activeBtn.classList.remove('active');
    pElement.classList.add('active');
  });
});
