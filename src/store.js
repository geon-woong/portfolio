import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            profile: ['이름 정건웅', "영남대학교 GTEP 사업단 수료", "학력 영남대학교 무역학부 졸업", "그린컴퓨터학원 PWA 웹앱과정 수료"],
            skills: 0,
            modalState: false,
            woongsta: "https://geon-woong.github.io/woongstagram/",
            icon: {
                icon: "icon-box",
                main_icon: " fab",
                icon_size: " fa-2x",
                menu: ["fa-html5", "fa-css3-alt", "fa-bootstrap", "fa-js-square", "fa-figma", "fa-vuejs","fa-react"],
                menu_2: ["fa-node-js", "fa-sass"],
                work_icon: [
                    ['fa-vuejs', 'fa-js-square', 'fa-html5', 'fa-css3-alt', 'fa-bootstrap', 'fa-figma'],
                    ['fa-vuejs', 'fa-html5', 'fa-css3-alt', 'fa-bootstrap', 'fa-figma'],
                    ['fa-vuejs', 'fa-html5', 'fa-css3-alt', 'fa-bootstrap',],
                    ['fa-html5', "fa-css3-alt", "fa-js-square",],
                    ['fa-html5', "fa-css3-alt", "fa-js-square",],
                    ['fa-html5', "fa-css3-alt", "fa-js-square",],
                    ['fa-html5', "fa-css3-alt", "fa-js-square",],
                    ['fa-html5', "fa-css3-alt", "fa-js-square",],
                    ['fa-html5', "fa-css3-alt", "fa-js-square",],
                    ['fa-html5', "fa-css3-alt", "fa-js-square",],
                    ['fa-html5', "fa-css3-alt", "fa-js-square",],
                    ['fa-html5', "fa-css3-alt", "fa-js-square",],
                ],
            },
            skill_desc: [
                `PWA 웹앱 과정을 수료하면서 기본적으로 웹페이지를 구현하는 방법을 익혔습니다. 교육 과정을 이수하면서 부족한 부분은 책과 인강으로 공부하고 있습니다. HTML,CSS,JavaScript, Vue.js로 프로젝트를 하며 연습하고 있습니다.`,
                `HTML 문서를 구조화할 수 있습니다.웹표준 및 검색엔진 최적화(SEO)를 이해하고 있으며 적용할 수 있습니다. 작성된 문서를 CSS요소로 렌더링 할 수 있습니다.`,
                `CSS의 핵심개념을 이해하고 있으며, 구조화된 웹페이지를 디자인에 맞게 스타일링할 수 있습니다. 미디어쿼리를 이용한 반응형 사이트를 구축할 수 있습니다.`,
                `Bootstrap 사용법을 익히기 위해 포트폴리오 페이지와 리디자인 페이지에 적극적으로 적용했습니다. 부트스트랩 Grid를 사용해서 손쉽게 반응형 페이지를 작성할 수 있습니다.`,
                `자바스크립트 , JQuery로 UI를 조작할 수 있으며, 서버에 데이터를 요청해 화면에 렌더링할 수 있습니다. 자바스크립트의 원리를 이해하기 위해 모던 자바스크립트를 공부하고 있습니다.`,
                `Adobe Photosop, 피그마 디자인툴을 가본적으로 다룰 수 있으며, 포토샵을 사용해 라이브네이션 웹사이트를 리디자인했으며 피그마를 이용해 포트폴리오 페이지를 디자인했습니다.`,
                `Vue.js를 사용해 리디자인 페이지와 포트폴리오 페이지를 구현했습니다.Public API를 활용한 간단한 프로젝트를 진행했습니다.Vuex패턴을 이해하고 있으며 적용할 수 있습니다.. Router 페이지 구현, 동적라우팅을 경험했습니다. `],
          
            gitHub: "https://github.com/geon-woong",
            work_page2 :[
                    {
                        img: require("/src/assets/acnh_page.png"),
                        title: "동물의숲 사전",
                        link: "https://acnh-book.web.app/",
                        git_link: "https://github.com/geon-woong/ACNH_BOOK",
                        description : ["Public API 데이터를 이용한 모여봐요 동물의숲 생물 도감","Vue.js , Bootstrap","Firebase"],
                    },
                    {
                        img: require("/src/assets/woong_mall.png"),
                        title: "Nuxt 쇼핑몰 사이트",
                        link: "https://woong-mall.herokuapp.com/",
                        git_link: "https://github.com/geon-woong/woong-mall",
                        description : ["Public API 데이터를 이용해 SSR 학습","Nuxt.js ,Vue.js , Bootstrap","Heroku"],
                    },
                    {
                        img: require("/src/assets/livenation.png"),
                        title: "라이브네이션 리디자인",
                        link: "https://geon-woong.github.io/live_nation/",
                        git_link: "https://github.com/geon-woong/live_nation",
                        description : ["리디자인페이지 Vue.js를 이용해 마크업","Vue.js ,Figma, Bootstrap","Github Page"],

                    },
                    {
                        img: require("/src/assets/ing.png"),
                        title: "리액트 게시판 ( 진행중 )",
                        link: "https://github.com/geon-woong/woong-community",
                        git_link: "https://github.com/geon-woong/woong-community",
                        description : ["리액트 JS + 파이어베이스 게시판 만들기","React + Firebase","Firebase"],

                    },
            ] ,
            work : 
                [
                    {
                        img:require("/src/assets/dominos.png"),
                        title:"도미노피자",
                        link:"https://geon-woong.github.io/dominos/",
                        git_link:"https://github.com/geon-woong/dominos",
                    },
                    {
                        img:require("/src/assets/pullmu.png"),
                        title:"풀무원 녹즙",
                        link:"https://geon-woong.github.io/pullmuone/",
                        git_link:"https://github.com/geon-woong/pullmuone",
                    },
                    {
                        img:require("/src/assets/hanhwa.png"),
                        title:"한화 라이프캔버스",
                        link:"https://geon-woong.github.io/hanhwalife/",
                        git_link:"https://github.com/geon-woong/hanhwalife",
                    },
                    {
                        img:require("/src/assets/sidiz.png"),
                        title:"시디즈",
                        link:"https://geon-woong.github.io/sidiz/",
                        git_link:"https://github.com/geon-woong/sidiz",
                    },
                    {
                        img:require("/src/assets/inha.png"),
                        title:"인하대학교",
                        link:"https://geon-woong.github.io/inha/",
                        git_link:"https://github.com/geon-woong/inha",
                    },
                    {
                        img:require("/src/assets/nexus.png"),
                        title:"넥서스",
                        link:"https://geon-woong.github.io/nexus/",
                        git_link:"https://github.com/geon-woong/nexus",
                    },
                    {
                        img:require("/src/assets/stx.png"),
                        title:"STX 건설",
                        link:"https://geon-woong.github.io/stx/",
                        git_link:"https://github.com/geon-woong/stx",
                    },
                    {
                        img: require("/src/assets/sony.png"),
                        title:"소니코리아",
                        link:"https://geon-woong.github.io/sony/",
                        git_link:"https://github.com/geon-woong/sony",
                    },
                ],
             

            work_desc: 
                    [
                    // ['동물의숲 도감','Public API를 이용한 데이터호출 연습', 'Vuex / Router ','작업기간 1주','개인프로젝트'],
                    // ['Nuxt.js를 활용한 쇼핑몰사이트 ','Public API를 이용한 데이터호출 연습', 'Vuex / Router','작업기간 1주','개인프로젝트'],
                    // ['라이브네이션 리디자인페이지','디자인, 구현 개인작업','Vue.js 마크업 연습','작업기간 1주'],
                    ['도미노피자 퍼블리싱','100% 개인작업','HTML CSS JQuery 사용하여 구현','작업기간 1주',],
                    ['풀무원 녹즙 퍼블리싱','학원 과제 100% 개인작업','HTML CSS JQuery 사용하여 구현','작업기간 1주',],
                    ['한화 라이프캔버스 퍼블리싱','100% 개인작업','HTML CSS JQuery 사용하여 구현','작업기간 1주',],
                    ['시디즈 퍼블리싱','학원 과제 100% 개인작업','HTML CSS JQuery 사용하여 구현','작업기간 1주' ],
                    ['인하대학교 퍼블리싱','학원 강의 중 클론코딩','HTML CSS JQuery 사용하여 구현','작업기간 1달'],
                    ['넥서스 퍼블리싱','학원 강의 중 클론코딩','HTML CSS JQuery 사용하여 구현','작업기간 2주'],
                    ['STX건설 퍼블리싱','학원 강의 중 클론코딩','HTML CSS JQuery 사용하여 구현','작업기간 2주'],
                    ['소니 퍼블리싱','학원 강의 중 클론코딩','HTML CSS JQuery 사용하여 구현','작업기간 2주'],

                    ],
        }
    },
    mutations: {
        // 타이머에 따라 state 변경
        increment(state) {
            this.timer = setInterval(() => {
                if (state.skills < state.icon.menu.length) {
                    state.skills++
                } else {
                    state.skills = 0
                }
            }, 5000);
        },
       
        upHere(state, payload) {
             state.skills =  payload.index + 1            
        },
        outHere(state) {
            if (state.skills != 0)
                state.skills = 0;
        },
        stopTimer(){
            clearInterval(this.timer);
        },
        skill_modal(state){
            console.log(state.modalState)
            if(state.modalState == false) state.modalState = true;
        }
    },
   
})

export default store