import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            profile_img: 'require("/src/assets/portfolio_profile_1.jpeg")',
            name: '정건웅',
            birth: '1995.05.04',
            edu_1: "2021.03.영남대학교 졸업",
            edu_2: "2021.12.그린컴퓨터학원 수료",
            content: [
                ``, ``, ``,
            ]
            ,
            skills: 0,
            woongsta: "https://geon-woong.github.io/woongstagram/",
            html: "", css: "", js: "", design: "", vue: "",
            upHere: [0, 1, 2, 3, 4, 5],
            skill_desc: [
                `긍정적이고 유쾌한 마인드를 가진 사람이 되기위해 노력합니다. 보기 좋은 UI와 유저친화적인 UX를 고민하며 생각한대로 구현하기 위해 꾸준히 공부하고 있습니다. 새로운 기술을 배우는 것이 즐겁고, 지속적으로 성장하고 싶습니다. 다양한 경험을 바탕으로 상황에 유연하게 대처가능하며, 사람들과 어울리는 것을 좋아합니다.`
                , `HTML을 이용해 웹페이지를 구조화하여 CSS로 스타일을 적용할 수 있습니다. Javascript , Jquery ui를 조작할 수 있으며, AJAX 개념을 알고있습니다`, `Adobe Photosop , 피그마 디자인툴을 다룰 수 있습니다. 포트폴리오 페이지를 디자인했습니다.`,
                `Vue.js로 포트폴리오 페이지를 구현했습니다. option api, composition api를 이해하고 있으며 Vuex를 이용한 상태관리를 포트폴리오에 적용했습니다.`],
            contact: "https://open.kakao.com/o/gQvxgiJd",
            gitHub: "https://github.com/geon-woong",
            qr: require("/src/assets/openchat.jpeg"),
            pub_img: [
                require("/src/assets/dominos.png"),
                require("/src/assets/pullmu.png"),
                require("/src/assets/hanhwa.png"),
                require("/src/assets/sidiz.png"),
            ],
            pub_tit: ["도미노피자", "풀무원녹즙", "한화 라이프캔버스", "시디즈"],
            pub_link: ["https://geon-woong.github.io/dominos/", "https://geon-woong.github.io/pullmuone/", "https://geon-woong.github.io/hanhwalife/", "https://geon-woong.github.io/sidiz/"],
            origin_link: ["https://web.dominos.co.kr/main", "https://greenjuice.pulmuone.com", "https://lifecanvas.hanwhalife.com/p/main/SF_PCMA000_P10000.do", "https://www.sidiz.com/"],
            git_link: "https://github.com/geon-woong",
            pub_tit_2: ["인하대학교", "넥서스", "STX 건설", "소니코리아"],
            pub_desc_2: ["도미노피자", "풀무원녹즙", "STX 건설", "소니코리아"],
            pub_img_2: [
                require("/src/assets/inha.png"),
                require("/src/assets/nexus.png"),
                require("/src/assets/stx.png"),
                require("/src/assets/sony.png"),
            ],
            pub_link_2: ["https://geon-woong.github.io/inha/", "https://geon-woong.github.io/nexus/", "https://geon-woong.github.io/stxconst/", "https://geon-woong.github.io/sony/"],
            origin_link_2: ["https://www.inha.ac.kr/kr/index.do", "https://nexus-official.com", "http://www.stxconst.co.kr", "https://www.sony.co.kr"],



            desg_img: [require("/src/assets/livenation_logo.png"), require("/src/assets/livenation_logo.png"),],
            desg_tit: ["라이브네이션", "포트폴리오 페이지"],
            vue_img: [require("/src/assets/sidiz.png"),
            require("/src/assets/sidiz.png"),],

        }
    },
    mutations: {
        upHere(state) {
            if (state.skills != 1)
                state.skills = 1;
        },
        upHereD(state) {
            if (state.skills != 2)
                state.skills = 2;
        },
        upHereV(state) {
            if (state.skills != 3)
                state.skills = 3;
        },
        outHere(state) {
            if (state.skills != 0)
                state.skills = 0;
        },




    },
})

export default store