import { createStore } from 'vuex'
export default createStore(
    {
        state() {
            return {
                openChat: 'https://open.kakao.com/o/gQvxgiJd',
                img_slide: 0,
            }
        },
        mutations: {
            img_slide(state) {
                if (state.img_slide < 3) {
                    state.img_slide++
                } else {
                    state.img_slide == 0
                }
            }
        }
    }
);
