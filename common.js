// common.js — 게이지 값 1~100, 입력값만큼 ±
(() => {
  const MIN = 0;
  const MAX = 100;

  document.querySelectorAll('.row').forEach(row => {
    const numInput = row.querySelector('.num');   // 증감 단위 입력칸
    const plusBtn  = row.querySelector('.plus');
    const minusBtn = row.querySelector('.minus');
    const fill     = row.querySelector('.fill');

    let current = MIN; // 시작값

    const clamp = n => Math.max(MIN, Math.min(MAX, n));
    const render = () => {
      fill.style.width = (current / MAX) * 100 + '%';
    };
    const set = n => { current = clamp(Math.round(n)); render(); };

    // +: 입력칸 숫자만큼 더하기
    plusBtn.addEventListener('click', () => {
      const step = parseInt(numInput.value, 10);
      set(current + (Number.isNaN(step) ? MIN : clamp(step)));
    });

    // -: 입력칸 숫자만큼 빼기
    minusBtn.addEventListener('click', () => {
      const step = parseInt(numInput.value, 10);
      set(current - (Number.isNaN(step) ? MIN : clamp(step)));
    });

    // 입력 제약 (1~100)
    numInput.addEventListener('input', () => {
      let v = parseInt(numInput.value, 10);
      if (Number.isNaN(v)) v = MIN;
      if (v < MIN) v = MIN;
      if (v > MAX) v = MAX;
      numInput.value = v;
    });

    render();
  });
})();
