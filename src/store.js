import { createStore } from 'vuex'
import axios from 'axios'



const store = createStore({
    state() {
        return {
            profile: ['이름 정건웅', "2021.03 영남대학교 졸업", "2021.12 그린컴퓨터학원 <br> PWA 웹앱과정 수료"],
            profile_img: 'require("/src/assets/portfolio_profile_1.jpeg")',
            skills: 0,
            woongsta: "https://geon-woong.github.io/woongstagram/",
            html: "", css: "", js: "", design: "", vue: "",
            upHere: [0, 1, 2, 3, 4, 5],

            skill_desc: [
                `긍정적이고 유쾌한 마인드를 가진 사람이 되기위해 노력합니다. 보기 좋은 UI와 유저친화적인 UX를 고민하며 생각한대로 구현하기 위해 꾸준히 공부하고 있습니다. 새로운 기술을 배우는 것이 즐겁고, 지속적으로 성장하고 싶습니다. 다양한 경험을 바탕으로 상황에 유연하게 대처가능하며, 사람들과 어울리는 것을 좋아합니다.`,
                `HTML 문서를 구조화할 수 있습니다.웹표준 및 검색엔진 최적화(SEO)를 이해하고 있으며 적용할 수 있습니다. 작성된 문서를 CSS요소로 렌더링 할 수 있습니다.`,
                `CSS의 핵심개념을 이해하고 있으며, 구조화된 웹페이지를 디자인에 맞게 스타일링할 수 있습니다. 미디어쿼리를 이용한 반응형 사이트를 구축할 수 있고, 최신 CSS 기법을 익히기 위해 노력합니다. SCSS를 사용할 수 있으며, 불필요하거나 중복된 스타일을 줄이기 위해 고민합니다. `,
                `자바스크립트 , JQuery로 UI를 조작할 수 있으며, Ajax로 서버에 데이터를 요청할 수 있습니다. Node.js로 express서버를 구현하여 MongDB 에서 데이터를 불러오고 업데이트하는 실습을 개인적으로 경험해봤습니다. 자바스크립트의 원리를 이해하기 위해 개인적으로 공부하고 있습니다.`,
                `Adobe Photosop, 피그마 디자인툴을 가본적으로 다룰 수 있으며, 간단한 디자인 작업물을 만들 수 있습니다. 포토샵을 사용해 라이브네이션 웹사이트를 리디자인했으며 피그마를 이용해 포트폴리오 페이지를 디자인했습니다.`,
                `Vue.js를 사용해 라이브네이션 리디자인 페이지와 포트폴리오 페이지를 구현했습니다. Option API를 사용해 작업했으며, Composition api를 이해하고 있으며, 포트폴리오 페이지에 Vuex를 이용해 상태관리를 적용했습니다. Router를 이해하고 있으며 적용할 수 있습니다. `],
            contact: "https://open.kakao.com/o/gQvxgiJd",
            gitHub: "https://github.com/geon-woong",
            qr: require("/src/assets/openchat.jpeg"),

            pub_img: [
                require("/src/assets/logo.png"),
                require("/src/assets/livenation_logo_.png"),
                require("/src/assets/dominos.png"),
                require("/src/assets/pullmu.png"),
                require("/src/assets/hanhwa.png"),
                require("/src/assets/sidiz.png"),
                require("/src/assets/inha.png"),
                require("/src/assets/nexus.png"),
                require("/src/assets/stx.png"),
                require("/src/assets/sony.png"),
            ],

            pub_tit: ["포트폴리오", "라이브네이션", "도미노피자", "풀무원녹즙", "라이프캔버스", "시디즈", "인하대학교", "넥서스", "STX 건설", "소니코리아"],
            pub_link: ["https://geon-woong.github.io/", "https://geon-woong.github.io/live_nation", "https://geon-woong.github.io/dominos/", "https://geon-woong.github.io/pullmuone/", "https://geon-woong.github.io/hanhwalife/", "https://geon-woong.github.io/sidiz/",
                "https://geon-woong.github.io/inha/", "https://geon-woong.github.io/nexus/", "https://geon-woong.github.io/stxconst/", "https://geon-woong.github.io/sony/"],
            origin_link: ["", "", "https://web.dominos.co.kr/main", "https://greenjuice.pulmuone.com", "https://lifecanvas.hanwhalife.com/p/main/SF_PCMA000_P10000.do", "https://www.sidiz.com/", "https://www.inha.ac.kr/kr/index.do", "https://nexus-official.com", "http://www.stxconst.co.kr", "https://www.sony.co.kr"],
            git_link: "https://github.com/geon-woong",

            desg_img: [require("/src/assets/livenation_logo.png"), require("/src/assets/livenation_logo.png"),],
            desg_tit: ["라이브네이션", "포트폴리오 페이지"],
            vue_img: [require("/src/assets/sidiz.png"),
            require("/src/assets/sidiz.png"),],
            datas: {},

        }
    },
    mutations: {
        upHere: function (state, payload) {
            return state.skills = payload.index + 1
        },
        outHere(state) {
            if (state.skills != 0)
                state.skills = 0;
        },



    },
    //액션에서 호출하고 mutation에서 사용?
    actions: {
        // context는 제거 될 확률이 높다. context 는 store 자체를 말한다.
        자료호출(context) {
            axios.get('https://tarolong.github.io/more0.json')
                .then((res) => {
                    //mutation에 접근할 때 는 커밋으로 접근한다.
                    context.commit("dataUpdate", res.data);
                })
                .catch()

        }
    }
})

export default store