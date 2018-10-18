import Idea from '../models/Idea';

export const createIdea = async (req, res) => {
  const { content, impact, ease, confidence } = req.body;

  const newIdea = await Idea.query().insert({
    content,
    impact,
    ease,
    confidence
  });

  res.json(newIdea);
};

export const deleteIdea = async (req, res) => {
  const id = parseInt(req.params.id);
  const deletedIdea = await Idea.query().deleteById(id);

  if (deletedIdea) {
    res.status(204).send();
  } else {
    res.status(400).json({ error: 'Invalid id' });
  }
};
export const getIdeas = async (req, res) => {
  const { page } = req.query;
  const offset = (page - 1) * 10;

  const ideaList = await Idea.query()
    .limit(10)
    .offset(offset);

  res.json(ideaList);
};

export const updateIdea = async (req, res) => {
  const { content, impact, ease, confidence } = req.body;
  const id = parseInt(req.params.id);

  const updatedIdea = await Idea.query().updateAndFetchById(id, {
    content,
    impact,
    ease,
    confidence
  });

  res.json(updatedIdea);
};
