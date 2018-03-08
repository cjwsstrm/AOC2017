// 147  142  133  122   59
// 304    5    4    2   57
// 330   10    1    1   54
// 351   11   23   25   26
// 362  747  806--->   ...


const number = 10;

let spiralMatrix = (x, y, step, count) => {
  let distance = 0;
  let range = 1;
  let direction = 'right';
  let value = 1;
  let increase = 0;
  xyvalues = {
  };

  for (let i = 0; i < count; i++) {
    xyvalues[i] = {
      x: x,
      y: y,
      value: value
    }

    if (x && y) {
      // take the values at x - 1 + y - 1 and add to new value
    //  console.log(xyvalues[i].value) 
     increase = xyvalues[i].value
    }
    console.log(increase)
    value += increase
    // console.log('x: ' + x + ', y: ' + y + ', value: ' + value);
    distance++;
    switch (direction) {
      case 'up':
        y += step;
        if (distance >= range) {
          direction = 'left';
          distance = 0;
        }
        break;
      case 'right':
        x += step;
        if (distance >= range) {
          direction = 'up';
          distance = 0;
          range += 1;
        }
        break;
      case 'bottom':
        y -= step;
        if (distance >= range) {
          direction = 'right';
          distance = 0;
        }
        break;
      case 'left':
        x -= step;
        if (distance >= range) {
          direction = 'up';
          distance = 0;
          range += 1;
        }
        break;
      default:
        break;
    }
  }
  // console.log(xyvalues)
  return xyvalues
}

console.log(spiralMatrix(0, 0, 1, number))
