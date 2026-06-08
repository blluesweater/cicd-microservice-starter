import { Router, Request, Response } from 'express';

const router = Router();

const users = [
  { id: 1, name: 'Amrouni', email: 'amrouni@email.com' },
  { id: 2, name: 'Yasser', email: 'yasser@email.com' },
];

router.get('/', (req: Request, res: Response) => {
  res.json(users);
});

router.get('/:id', (req: Request, res: Response) => {
  const user = users.find(u => u.id === parseInt(req.params.id as string));
  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }
  res.json(user);
});

export default router;