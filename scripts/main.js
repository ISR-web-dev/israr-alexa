
const testimonialData = [
    `<img src="images/Sarah J.png" alt="" class="headshot">
    <p class="open-blue name">
        <b>Sarah J.</b> <br>
        Homeowner
    </p>
    <p class="light testimonial">
        "My life is so much easier with the smart home hub! I can control everything with my voice, and I never have to worry about forgetting to turn off the lights again."
    </p>`,

    `<img src="images/David.png" alt="" class="headshot">
    <p class="open-blue name">
        <b>David & Lisa M.</b> <br>
        Parents
    </p>
    <p class="light testimonial">
        "We love being able to control our home from anywhere in the world. It gives us peace of mind knowing that everything is secure and under control."
    </p>`,
    `<img src="images/John S.png" alt="" class="headshot">
    <p class="open-blue name">
        <b>John S.</b> <br>
        Retiree
    </p>
    <p class="light testimonial">
        "This smart home hub has made my life so much more comfortable and convenient. I can now adjust the temperature and lighting from my armchair."
    </p>`

];

let testimonialCount = 0;

function countControlNext() {
    if (testimonialCount < 2) {
        testimonialCount++;
    }
    else {
        testimonialCount = 0;
    }
}

function countControlPre() {
    if (testimonialCount > 0) {
        testimonialCount--;
    }
    else {
        testimonialCount = 2;
    }
}

document.querySelector('.left').addEventListener('click', () => {
    countControlPre();
    document.querySelector('.testimonial').innerHTML = testimonialData[testimonialCount];
});
document.querySelector('.right').addEventListener('click', () => {
    countControlNext();
    document.querySelector('.testimonial').innerHTML = testimonialData[testimonialCount];
});