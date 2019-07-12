const OFFSET = 0.8;

export const scroll = {
    add: target => {
        if (window.scrollY >= target.$el.offsetTop - (window.outerHeight * OFFSET)) {
            target.animate = true;
        } else {
            target.handler = () => {
                if (window.scrollY >= target.$el.offsetTop - (window.outerHeight * OFFSET)) {
                    target.animate = true;
                    window.removeEventListener('scroll', target.handler, { passive: true });
                }
            };
            window.addEventListener('scroll', target.handler, { passive: true });
        }
    },
    remove: target => {
        window.removeEventListener('scroll', target.handler, { passive: true });
    }
};