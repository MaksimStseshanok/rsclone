import down_left from '../../assets/images/arrows/down_left.png';
import down_right from '../../assets/images/arrows/down_right.png';
import left_down from '../../assets/images/arrows/left_down.png';
import left_up from '../../assets/images/arrows/left_up.png';
import right_down from '../../assets/images/arrows/right_down.png';
import right_up from '../../assets/images/arrows/right_up.png';
import up_left from '../../assets/images/arrows/up_left.png';
import up_right from '../../assets/images/arrows/up_right.png';

const levels = [
  {
    level: 1,
    startCellId: 53,
    finishCellId: 52,
    leftBlock: [
      { img: down_right, entry: 'down', output: 'right' },
      { img: left_down, entry: 'left', output: 'down' },
      {},
      {},
    ],
    rightBlock: [
      {},
      {},
      { img: up_right, entry: 'up', output: 'right' },
      { img: left_up, entry: 'left', output: 'up' },
    ],
    defs: [87],
  },
  {
    level: 2,
    startCellId: 53,
    finishCellId: 52,
    leftBlock: [
      { img: down_right, entry: 'down', output: 'right' },
      { img: left_down, entry: 'left', output: 'down' },
      {},
      {},
    ],
    rightBlock: [
      {},
      {},
      { img: up_right, entry: 'up', output: 'right' },
      { img: left_up, entry: 'left', output: 'up' },
    ],
    defs: [24, 48, 63, 102, 87],
  },
  {
    level: 3,
    startCellId: 53,
    finishCellId: 52,
    leftBlock: [
      {},
      {},
      { img: down_right, entry: 'down', output: 'right' },
      { img: left_down, entry: 'left', output: 'down' },
    ],
    rightBlock: [
      { img: up_right, entry: 'up', output: 'right' },
      { img: left_up, entry: 'left', output: 'up' },
      {},
      {},
    ],
    defs: [16, 68],
  },
  {
    level: 4,
    startCellId: 53,
    finishCellId: 52,
    leftBlock: [
      { img: down_right, entry: 'down', output: 'right' },
      { img: left_down, entry: 'left', output: 'down' },
      {},
      {},
    ],
    rightBlock: [
      {},
      {},
      { img: up_right, entry: 'up', output: 'right' },
      { img: left_up, entry: 'left', output: 'up' },
    ],
    defs: [17, 23, 82, 88],
  },
  {
    level: 5,
    startCellId: 53,
    finishCellId: 52,
    leftBlock: [
      { img: down_right, entry: 'down', output: 'right' },
      { img: left_down, entry: 'left', output: 'down' },
      { img: right_up, entry: 'right', output: 'up' },
      {},
    ],
    rightBlock: [
      {},
      { img: down_left, entry: 'down', output: 'left' },
      { img: up_right, entry: 'up', output: 'right' },
      { img: left_up, entry: 'left', output: 'up' },
    ],
    defs: [60],
  },
  {
    level: 6,
    startCellId: 53,
    finishCellId: 52,
    leftBlock: [
      {},
      { img: left_down, entry: 'left', output: 'down' },
      { img: up_right, entry: 'up', output: 'right' },
      {},
    ],
    rightBlock: [
      { img: right_down, entry: 'right', output: 'down' },
      { img: down_left, entry: 'down', output: 'left' },
      { img: up_right, entry: 'up', output: 'right' },
      { img: left_up, entry: 'left', output: 'up' },
    ],
    defs: [34, 58, 64, 84],
  },
  {
    level: 7,
    startCellId: 53,
    finishCellId: 52,
    leftBlock: [
      { img: down_right, entry: 'down', output: 'right' },
      { img: left_down, entry: 'left', output: 'down' },
      { img: up_right, entry: 'up', output: 'right' },
      { img: left_up, entry: 'left', output: 'up' },
    ],
    rightBlock: [
      { img: right_down, entry: 'right', output: 'down' },
      { img: down_left, entry: 'down', output: 'left' },
      { img: up_right, entry: 'up', output: 'right' },
      { img: left_up, entry: 'left', output: 'up' },
    ],
    defs: [15, 47, 60, 80],
  },
  {
    level: 8,
    startCellId: 53,
    finishCellId: 52,
    leftBlock: [
      { img: down_right, entry: 'down', output: 'right' },
      {},
      {},
      { img: left_up, entry: 'left', output: 'up' },
    ],
    rightBlock: [
      { img: right_down, entry: 'right', output: 'down' },
      { img: down_left, entry: 'down', output: 'left' },
      { img: up_right, entry: 'up', output: 'right' },
      { img: left_up, entry: 'left', output: 'up' },
    ],
    defs: [15, 21, 80, 86],
  },
];

export default levels;
