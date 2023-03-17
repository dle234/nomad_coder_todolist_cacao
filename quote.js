const quotes = [{ quote: "혼자서는 작은 한 방울이지만 함께 모이면 바다를 이룹니다", author: "Ryunosuke Satoro" },
{ quote: "열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다 ", author: "윈스턴 처칠" },
{ quote: "괴로운 시련처럼 보이는 것이 뜻밖의 좋은 일일 때가 많다", author: "오스카 와일드" },
{ quote: "성공은 매일 반복한 작은 노력들의 합이다.", author: "로버트 콜리어" },
{ quote: " 성공이란 절대 실수를 하지 않는 게 아니라 같은 실수를 두 번 하지 않는 것에 있다", author: "조지버나드 쇼" },
];

const quote = document.querySelector(".saying p:first-child");
const author = document.querySelector(".saying p:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}`;