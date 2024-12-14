let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.navigation button:first-child'); 
const nextButton = document.querySelector('.navigation button:last-child'); 

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    if (index === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block'; 
    }

    if (index === slides.length - 1) {
        nextButton.style.display = 'none'; 
    } else {
        nextButton.style.display = 'block'; 
    }
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
}

showSlide(currentSlide);


function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);

function addReference() {
    const referenceInput = document.getElementById('referenceInput');
    const referenceList = document.getElementById('referenceList');
    const referenceText = referenceInput.value.trim();

    if (referenceText) {
        const listItem = document.createElement('li');
        listItem.textContent = referenceText;
        referenceList.appendChild(listItem);
        referenceInput.value = '';
    } else {
        alert('출처를 입력해주세요!');
    }
}
function burnCigarette() {
    const cigarette = document.querySelector('.cigarette-container');
    cigarette.style.animationPlayState = 'running'; // 애니메이션 실행
}

function checkSlide(index) {
    if (index === slides.length - 1) {
        burnCigarette();
    }
}

function burnCigarette() {
    const cigarette = document.querySelector('.cigarette');
    const smoke = document.querySelector('.smoke');
    const skull = document.getElementById('skull');

    cigarette.style.animationPlayState = 'running';
    smoke.style.animationPlayState = 'running';

    cigarette.addEventListener('animationend', () => {
        cigarette.style.display = 'none'; 
        smoke.style.display = 'none'; 
        skull.style.display = 'block'; 
    });
}

function checkSlide(index) {
    if (index === slides.length - 1) {
        burnCigarette();
    }
}

const questions = [
    {
        title: "첫 번째 질문",
        content: "궐련형 전자담배와 연초담배는 소비자 인식에서 어떤 유해성 차이를 보였나요?"
    },
    {
        title: "두 번째 질문",
        content: "사회적 시선과 냄새 문제가 궐련형 전자담배 선택에 영향을 미칠 수 있나요?"
    },
    {
        title: "세 번째 질문",
        content: "왜 궐련형 전자담배가 일부 국가에서는 위해저감 담배로 인정받는 반면, 다른 국가에서는 동일한 규제를 받나요?"
    }
];

function showDetails(index) {
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupContent = document.getElementById('popup-content');

    popupTitle.textContent = questions[index - 1].title;
    popupContent.textContent = questions[index - 1].content;

    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function openPDF() {
    window.open('document/KCI_FI002977278.pdf', '_blank');
}

const tableOfContentsLinks = document.querySelectorAll('#table-of-contents ul li a');

tableOfContentsLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        currentSlide = index + 1;
        showSlide(currentSlide); 
    });
});
