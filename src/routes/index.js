import {
  createIdea,
  deleteIdea,
  getIdeas,
  updateIdea
} from '../controllers/ideas';

import {
  signup
  // getUserInfo,
  // refreshToken,
  // login,
  // logout
} from '../controllers/user';

export default router => {
  // Ideas
  router.post('/ideas', createIdea); // Create Idea
  router.delete('/ideas/:id', deleteIdea); // Delete Idea
  router.get('/ideas', getIdeas); // Get list of ideas (10)
  router.put('/ideas/:id', updateIdea); // Update Idea

  // User
  router.post('/users', signup);
  // router.get('/me', getUserInfo);
  // router.post('/access-tokens/refresh', refreshToken);
  // router.post('/access-tokens', login);
  // router.delete('/access-tokens', logout);
};
