import {defineNuxtPlugin} from "nuxt/app";

export default defineNuxtPlugin(() => {
    return {
        provide: {
            addSpacesToNumber: (number, delimiter = ' ')  => {
                if (number === null || number === undefined) {
                    number = '0';
                }

                if (typeof number !== 'string') {
                    number = number.toString();
                }

                number = number.split('.');
                number[0] = number[0].replace(/\s/g, '');
                number[0] = number[0].replace(/\B(?=(\d{3})+(?!\d))/g, delimiter);
                number = number.join('.');

                return number;
            },
        },
    };
});
