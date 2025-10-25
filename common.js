(() => {
  const MIN = 0;
  const MAX = 100;

  document.querySelectorAll('.row').forEach(row => {
    const numInput = row.querySelector('.num');
    const plusBtn  = row.querySelector('.plus');
    const minusBtn = row.querySelector('.minus');
    const fill     = row.querySelector('.fill');

    let current = MIN;

    const clamp = n => Math.max(MIN, Math.min(MAX, n));
    const render = () => { fill.style.width = (current / MAX) * 100 + '%'; };
    const set = n => { current = clamp(Math.round(n)); render(); };

    const handlePlus = () => {
      const step = parseInt(numInput.value, 10) || 0;
      set(current + step);
      numInput.value = 0;
    };

    const handleMinus = () => {
      const step = parseInt(numInput.value, 10) || 0;
      set(current - step);
      numInput.value = 0;
    };

    plusBtn.addEventListener('click', handlePlus);
    minusBtn.addEventListener('click', handleMinus);

    numInput.addEventListener('input', () => {
      let v = parseInt(numInput.value, 10);
      if (Number.isNaN(v)) v = MIN;
      if (v < MIN) v = MIN;
      if (v > MAX) v = MAX;
      numInput.value = v;
    });

    numInput.addEventListener('keydown', e => {
      switch (e.key) {
        case 'Enter':
        case '+':
        case 'Add':
          e.preventDefault();
          handlePlus();
          break;

        case '-':
        case 'Subtract':
          e.preventDefault();
          handleMinus();
          break;
      }
    });

    render();
  });
})();
