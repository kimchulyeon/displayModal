'use strict';

// 변수.. 요소들 가져오기
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const showBtn = document.querySelectorAll('.show-modal'); // 중요.. selectorAll => 배열로 가져온다

// 함수..
const showModalFunc = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const hideModalFunc = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// 설명.. 버튼 3개 누르면 모달창 열기
for (let i = 0; i < showBtn.length; i++) {
  showBtn[i].addEventListener('click', showModalFunc);
}

// 설명.. X누르면 모달창 닫힘
// 설명.. overlay부분 클릭하면 원래대로 돌아옴
closeBtn.addEventListener('click', hideModalFunc);
overlay.addEventListener('click', hideModalFunc);

// 설명.. keypress 이벤트 //중요.. keypress이벤트는 글로벌 이벤트
document.addEventListener('keydown', function (e) {
  // if (e.key === 'Escape') {
  //   //중요..  !(= not연산자)는 불린값을 역전?시킴
  //   if (!modal.classList.contains('hidden')) {
  //     hideModalFunc();
  //   }
  // }
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    hideModalFunc();
  }
});
