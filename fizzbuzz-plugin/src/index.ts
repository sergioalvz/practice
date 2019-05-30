import { reporter } from './plugins/reporters/console';
import { transformer as buzz } from './plugins/transformers/buzz';
import { transformer as fizz } from './plugins/transformers/fizz';
import { transformer as fizzbuzz } from './plugins/transformers/fizzbuzz';
import { program } from './program';

(async function run() {
  await program({
    numberOfElements: 100,
    plugins: {
      reporters: [reporter],
      transformers: [fizzbuzz, buzz, fizz],
    },
  });
})();
