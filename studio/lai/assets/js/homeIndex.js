import { TextAnimator } from './text-animator.js';
var direction = document.querySelector('html').getAttribute('dir');
//=========================Hero Section
if(direction !== 'rtl'){
    $(document).ready(function() {
        const init = () => {
            // Text.one animation
            setTimeout(() => {
                document.querySelectorAll('.text.one').forEach(item => {
                    const cols = Array.from(item.querySelectorAll('.scrumble'));
                    const animators = cols.map(col => new TextAnimator(col));

                    animators.forEach(animator => animator.animate());
                    item.style.opacity = '1'; // Set opacity to 1 when animation starts
                });
            }, 1500);

            // Text.two animation
            document.querySelectorAll('.text.two').forEach(item => {
                const cols = Array.from(item.querySelectorAll('.scrumble'));
                const animators = cols.map(col => new TextAnimator(col));

                item.addEventListener('mouseenter', () => {
                    animators.forEach(animator => animator.animate());
                });
                item.addEventListener('mouseleave', () => {
                    animators.forEach(animator => animator.animateBack());
                });
            });
        };

        init();

        //=========================LINE TEXT HOVER
        const initHover = () => {
            // Same for all links
            document.querySelectorAll('a.hover-effect').forEach(item => {
                const animator = new TextAnimator(item);
                item.addEventListener('mouseenter', () => {
                    animator.animate();
                });
                item.addEventListener('mouseleave', () => {
                    animator.animateBack();
                });
            });
        };
        initHover();
    });
}

const initServiceHover = () => {
    document.querySelectorAll('.list__item').forEach(item => {
        const cols = Array.from(item.querySelectorAll('.hover-effect'));
        const animators = cols.map(col => new TextAnimator(col));

        item.addEventListener('mouseenter', () => {
            animators.forEach(animator => animator.animate());
        });
        item.addEventListener('mouseleave', () => {
            animators.forEach(animator => animator.animateBack());
        });
    });
}
initServiceHover();