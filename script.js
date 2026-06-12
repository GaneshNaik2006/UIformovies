const faqs = document.querySelectorAll('.faq-item');

faqs.forEach(faq => {
  faq.querySelector('.q').addEventListener('click', () => {
    // close others
    faqs.forEach(item => {
      if (item !== faq) item.classList.remove('active');
    });

    // toggle clicked
    faq.classList.toggle('active');
  });
});

