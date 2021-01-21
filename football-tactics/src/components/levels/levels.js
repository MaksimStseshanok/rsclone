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
    leftBlock: [down_right, left_down, right_up, up_left],
    rightBlock: [right_down, down_left, up_right, left_up],
    defs: [88],
  },
  {
    level: 2,
    startCellId: 53,
    leftBlock: [down_right, left_down],
    rightBlock: [right_down],
    defs: [14, 13, 6],
  },
  {
    level: 3,
    startCellId: 53,
    leftBlock: [down_right, left_down, right_up, up_left],
    rightBlock: [down_left, up_right, left_up],
    defs: [5, 66],
  },
];

export default levels;
