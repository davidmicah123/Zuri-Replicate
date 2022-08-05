
const homeUnderline = document.querySelector('.home_underline');
const impactUnderline = document.querySelector('.impact_underline');
const whyUsUnderline = document.querySelector('.why_us_underline');
    


// Using intersection observer API

const homeSection = document.querySelector('.hero_section');
const revealSection3 = function (entries, observer) {
    const [entry] = entries;
    // console.log(entry);

    if(!entry.isIntersecting) return;
  
    impactUnderline.classList.remove('show');
    homeUnderline.classList.add('show');
    whyUsUnderline.classList.remove('show');

}
