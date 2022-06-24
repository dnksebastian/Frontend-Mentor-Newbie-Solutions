/* <div class="accordion-element">
          <div class="helper">
            <h2 class="faq-question">How many team members can I invite?</h2> <i><img src="./images/icon-arrow-down.svg"
                alt=""></i>
          </div>
          <p class="faq-answer">You can invite up to 2 additional users on the Free plan. There is no limit on
            team members for the Premium plan.</p>
        </div> */

const accordionElements = document.querySelectorAll(".accordion-element");

const accordionClicked = function () {
  this.classList.toggle("active");
  this.querySelector(".faq-question").classList.toggle("question-bolded");
  this.querySelector(".faq-icon").classList.toggle("faq-icon-active");
  this.querySelector(".faq-answer").classList.toggle("faq-answer-visible");

  const siblings =
    this.closest(".accordion-wrapper").querySelectorAll(".accordion-element");

  siblings.forEach((element) => {
    if (element !== this) {
      element.classList.remove("active");
      element
        .querySelector(".faq-question")
        .classList.remove("question-bolded");
      element.querySelector(".faq-icon").classList.remove("faq-icon-active");
      element
        .querySelector(".faq-answer")
        .classList.remove("faq-answer-visible");
    }
  });
};

accordionElements.forEach((el) => {
  el.addEventListener("click", accordionClicked);
});
