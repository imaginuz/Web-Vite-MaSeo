document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.statistic-number');
    counters.forEach(counter => {
      counter.innerText = '0';
      const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
  
        const increment = target / 400;
  
        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`;
          setTimeout(updateCounter, 1);
        } else {
          counter.innerText = target.toLocaleString();
        }
      };
  
      updateCounter();
    });
  });