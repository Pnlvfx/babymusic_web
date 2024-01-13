export interface MessageProps {
  category: 'Queue' | 'Connection' | 'YDSP' | 'YDSPRecommendation' | 'ContextQueue';
  msg: string;
  color: 'red' | 'green' | 'blue' | 'yellow' | 'purple' | 'brown';
}
