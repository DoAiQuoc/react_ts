import { history } from './history';

export function forwardTo(location: string) {
  history.push(location);
}
