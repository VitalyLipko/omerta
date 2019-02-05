import { trigger, transition, query, style, animate, group, animateChild, state } from "@angular/animations";

export const fadeInAnimation = trigger(
    'routeAnimations', [
        transition('* <=> *', [
            style({ position: 'relative' }),
            query(':enter, :leave', [style({ position: 'absolute', top: 0, left: 0, width: '100%' })],
                { optional: true }
            ),
            query(':enter', [style({ opacity: 0 })], { optional: true }),
            query('footer', [style({ visibility: 'hidden' })], { optional: true }),
            query(':leave', animateChild(), { optional: true }),
            query(':leave', animate('200ms ease-out', style({ opacity: 0 })), { optional: true }),
            query(':enter', animate('200ms ease-out', style({ opacity: 1 })), { optional: true }),
            query('footer', animate('10ms  ease-out', style({ visibility: 'visible' })), { optional: true }),
            query(':enter', animateChild(), { optional: true })
        ])
    ]
);