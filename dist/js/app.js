/*------------------------------------
---> utility functions
--------------------------------------*/
function toggler(element, className) {
  document.querySelector(element).classList.toggle(className);
}

/*------------------------------------
---> alart box
--------------------------------------*/

/*how to use
-->  showAlart("provide alart id in string", "provide alart message in string");
*/

// show alart box
function showAlart(alartName, alartMessage) {
  const alartType = document.getElementById(alartName);
  const alartContent = alartType.querySelector(".alart-message");
  alartContent.innerHTML = alartMessage;
  alartType.classList.add("top-4");
}
//hide alart box
const alartCloseBtns = document.querySelectorAll(".alart-close");
alartCloseBtns.forEach((alartCloseBtn) => {
  alartCloseBtn.addEventListener("click", () => {
    alartCloseBtn.parentElement.classList.remove("top-4");
    console.log();
  });
});

/*------------------------------------
---> expend navbar links for mobile
--------------------------------------*/
const menuBarBtn = document.getElementById("menu-bar-btn");

menuBarBtn.addEventListener("click", () => {
  toggler("#nav-list", "scale-y-100");
  toggler("#layer", "hidden");
});

/*--------------------------------
---> product description tab
----------------------------------*/
const tabBtns = document.querySelectorAll(".tab-btn");
tabBtns.forEach((tabBtn) => {
  tabBtn.addEventListener("click", () => {
    const tabData = tabBtn.dataset;
    let tabContent = document.getElementById(tabData.tab);

    const allTabContent = document.querySelectorAll(".tab-content");
    allTabContent.forEach((eachTabContent) => {
      eachTabContent.classList.add("hidden");
    });

    tabBtns.forEach((allTabBtn) => {
      allTabBtn.classList.remove("underline");
    });

    tabBtn.classList.add("underline");
    tabContent.classList.remove("hidden");
  });
});

/*--------------------------------
---> qustion and answer
----------------------------------*/
const qsInput = document.getElementById("qs-input");
const qsSubmitbtn = document.getElementById("qs-submit-btn");
const qsContainer = document.getElementById("qs-container");

qsSubmitbtn.addEventListener("click", () => {
  const question = `
  <div
    class="shadow-custom-blue bg-custom-purple100/10 max-w-[800px] mt-8 rounded cursor-pointer active:scale-95 duration-200"
  >
    <div
      class="faq-qs flex justify-between items-center px-8 py-6 gap-10 sm:gap-20"
    >
      <p class="font-bold">
        ${qsInput.value}
      </p>
      <span class="duration-200 text-xl">
        <i class="fa-solid fa-caret-down"></i>
      </span>
    </div>
      <div class="faq-ans hidden px-8 py-6">
        <p class="sub-text">Answer will be replyed soon.</p>
      </div>
  </div>
`;
  if (qsInput.value === "") {
    showAlart("alart-warning", "You didn't write any message");
  } else {
    const qsAsNode = document.createElement("div");
    qsAsNode.innerHTML = question;
    qsContainer.appendChild(qsAsNode);
    qsInput.value = "";
  }
});

/*--------------------------------
---> FAQ accordion
----------------------------------*/
const faqQustions = document.querySelectorAll(".faq-qs");

faqQustions.forEach((faqQustion) => {
  faqQustion.addEventListener("click", () => {
    const faqAns = faqQustion.nextElementSibling;
    const faqIcon = faqQustion.children[1];

    faqQustions.forEach((ans) => {
      if (faqAns === ans.nextElementSibling) {
        return;
      } else {
        ans.nextElementSibling.classList.add("hidden");
      }
    });

    faqQustions.forEach((icon) => {
      if (faqIcon === icon.children[1]) {
        return;
      } else {
        icon.children[1].classList.remove("rotate-180");
      }
    });

    faqAns.classList.toggle("hidden");
    faqIcon.classList.toggle("rotate-180");
  });
});

/*--------------------------
---> price filter          
----------------------------*/
let priceRange = document.getElementById("price-range");
let selectedPrice = document.getElementById("selected-price");

priceRange.addEventListener("input", () => {
  selectedPrice.innerText = priceRange.value;
});
