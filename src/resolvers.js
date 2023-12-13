import { colors, goods } from "./mockData.js";
import { getNewId } from "./helpers.js";

export const getGoods = (req, res) => {
  res.send(goods);
};

export const getGoodById = (req, res) => {
  const { id } = req.params;
  const good = goods.find((good) => good.id === Number(id));

  if (!good) {
    res.status(404).send('Good not found');

    return;
  }

  res.send(good);
}

export const postGood = (req, res) => {
  const { body } = req;

  if (!body.name) {
    res.status(400).send('Good name is required');

    return;
  }

  const color = colors.find((color) => color.id === Number(body.colorId));

  if (!color) {
    res.status(400).send('Color not found');

    return;
  }

  const newGood = {
    id: getNewId(goods),
    name: body.name,
    colorId: body.colorId,
  };

  goods.push(newGood);

  res.status(201).send(newGood);
}

export const patchGood = (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const good = goods.find((good) => good.id === Number(id));

  if (!good) {
    res.status(404).send('Good not found');

    return;
  }

  if (body.colorId) {
    const color = colors.find((color) => color.id === Number(body.colorId));

    if (!color) {
      res.status(400).send('Color not found');

      return;
    }
  }

  if (body.name) {
    good.name = body.name;
  }

  if (body.colorId) {
    good.colorId = body.colorId;
  }

  res.send(good);
}

export const deleteGood = (req, res) => {
  const { id } = req.params;

  const goodIndex = goods.findIndex((good) => good.id === Number(id));

  if (goodIndex === -1) {
    res.status(404).send('Good not found');
  }

  goods.splice(goodIndex, 1);

  res.status(204).send();
}

export const getColors = (req, res) => {
  res.send(colors);
}

export const getColorById = (req, res) => {
  const { id } = req.params;
  const color = colors.find((color) => color.id === Number(id));

  if (!color) {
    res.status(404).send('Color not found');

    return;
  }

  res.send(color);
}
