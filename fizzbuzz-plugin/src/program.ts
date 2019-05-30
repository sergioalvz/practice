import { Reporter } from './plugins/Reporter';
import { Transformer } from './plugins/Transformer';

export interface ProgramOptions {
  numberOfElements: number;

  plugins: {
    reporters: Reporter[];
    transformers: Transformer[];
  };
}

export async function program({ numberOfElements, plugins }: ProgramOptions) {
  const values = Array(numberOfElements)
    .fill(null)
    .map((_, idx) => idx + 1)
    .map((value) => {
      let result: string = value.toString();

      plugins.transformers.forEach((transformer) => (result = transformer(result)));

      return result;
    });

  await Promise.all(
    plugins.reporters.map(async (reporter) => {
      await reporter(values);
    }),
  );
}
