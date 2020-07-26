import { Route, RouteModel } from '../controller/routes/Route.ts';
import { generateSentence, generateWord } from './generateString.ts';
import { uuidv4 } from './uuidv4.ts';

export function generateContent({ count, model }: Route): Array<any> | any {
  let content;
  if (count > 0) {
    content = new Array(count).fill(null).map(() => createObjectFromModel(model));
  } else {
    content = createObjectFromModel(model);
  }

  return content;
}

function createObjectFromModel(model: RouteModel[]): any {
  return model.reduce<any>((res, keyOptions) => {
    let value;
    switch (keyOptions.type) {
      case 'number': {
        value = getRandomInt(keyOptions.size as number);
        break;
      }

      default: {
        if (keyOptions.size === 'word') {
          value = generateWord();
        } else {
          value = generateSentence();
        }
      }
    }

    return {
      ...res,
      [keyOptions.name]: value,
    };
  }, { id: uuidv4() });
}

function getRandomInt(max = 100) {
  return Math.floor(Math.random() * Math.floor(max));
}
