import { LatLngBoundsExpression } from "leaflet";

interface plass {
  name: string;
  bounds: LatLngBoundsExpression;
  id: string;
  color: string;
  available: boolean;
}

interface Fields {
  [field: string]: plass[];
}

const drawRetangles = (field: string, posXIn: number) => {
  const newField: plass[] = [
    {
      name: "Plass 0",
      bounds: [
        [0, 0],
        [10, 10],
      ],
      id: "0",
      color: "cyan",
      available: true,
    },
  ];

  let posX = posXIn;

  for (let index = 0; index < 25; index++) {
    let step = 7 * index;
    if (index >= 5) {
      posX = posXIn + 6;
      step = 7 * (index - 5);
    }
    if (index >= 10) {
      posX = posXIn + 12;
      step = 7 * (index - 10);
    }
    if (index >= 15) {
      posX = posXIn + 18;
      step = 7 * (index - 15);
    }
    if (index >= 20) {
      posX = posXIn + 24;
      step = 7 * (index - 20);
    }
    newField.push({
      name: "Plass " + (index + 1).toString(),
      bounds: [
        [296 + step, posX],
        [303 + step, posX + 6],
      ],
      id: field + (index + 1).toString(),
      color: "cyan",
      available: true,
    });
  }
  return newField;
};

const fieldM: plass[] = drawRetangles("M", 264);
const fieldJ: plass[] = drawRetangles("J", 234);
const fieldD: plass[] = drawRetangles("D", 164);
const fieldG: plass[] = drawRetangles("G", 194);

export const fields: Fields = {
  fieldM: fieldM,
  fieldJ: fieldJ,
  fieldD: fieldD,
  fieldG: fieldG,
};
