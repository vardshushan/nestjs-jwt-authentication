

import { sign } from 'jsonwebtoken';

class RefreshToken {
  constructor(init?: Partial<RefreshToken>) {
    Object.assign(this, init);
  }

  id: number;
  userId: number;
  userAgent: string;
  ipAddress: string;

  sign(): string {
    return sign({ ...this }, 'D57684B7221F533C1F23F31FD3949');
  }
}

export default RefreshToken;