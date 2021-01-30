function createField() {
  const canvas = document.querySelector('.field');
  const ctx = canvas.getContext('2d');

  canvas.width = 836;
  canvas.height = 519;

  const pitch = {
    draw: function () {
      ctx.beginPath();
      ctx.rect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#006e1e';
      ctx.fill();
      ctx.closePath();

      // Outer lines
      ctx.beginPath();
      ctx.rect(50, 30, canvas.width - 100, canvas.height - 60);
      ctx.fillStyle = '#006e1e';
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#FFF';
      ctx.stroke();
      ctx.closePath();

      ctx.fillStyle = '#FFF';

      // Mid line
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, 30);
      ctx.lineTo(canvas.width / 2, canvas.height - 30);
      ctx.stroke();
      ctx.closePath();

      //Mid circle
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 73, 0, 2 * Math.PI, false);
      ctx.stroke();
      ctx.closePath();
      //Mid point
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 2, 0, 2 * Math.PI, false);
      ctx.fill();
      ctx.closePath();

      //Home penalty box
      ctx.beginPath();
      ctx.rect(50, (canvas.height - 322) / 2, 132, 322);
      ctx.stroke();
      ctx.closePath();
      //Home goal box
      ctx.beginPath();
      ctx.rect(50, (canvas.height - 146) / 2, 44, 146);
      ctx.stroke();
      ctx.closePath();
      //Home goal
      ctx.beginPath();
      ctx.rect(0, canvas.height / 2 - 58, 50, 114);
      ctx.stroke();
      ctx.closePath();

      //Home penalty point
      ctx.beginPath();
      ctx.arc(138, canvas.height / 2, 1, 0, 2 * Math.PI, true);
      ctx.fill();
      ctx.closePath();
      //Home half circle
      ctx.beginPath();
      ctx.arc(138, canvas.height / 2, 73, 0.29 * Math.PI, 1.71 * Math.PI, true);
      ctx.stroke();
      ctx.closePath();

      //Away penalty box
      ctx.beginPath();
      ctx.rect(canvas.width - 182, (canvas.height - 322) / 2, 132, 322);
      ctx.stroke();
      ctx.closePath();
      //Away goal box
      ctx.beginPath();
      ctx.rect(canvas.width - 94, (canvas.height - 146) / 2, 44, 146);
      ctx.stroke();
      ctx.closePath();
      //Away goal
      ctx.beginPath();
      ctx.rect(canvas.width - 50, canvas.height / 2 - 58, 50, 114);
      ctx.stroke();
      ctx.closePath();

      //Away penalty point
      ctx.beginPath();
      ctx.arc(canvas.width - 138, canvas.height / 2, 1, 0, 2 * Math.PI, true);
      ctx.fill();
      ctx.closePath();
      //Away half circle
      ctx.beginPath();
      ctx.arc(
        canvas.width - 138,
        canvas.height / 2,
        73,
        0.71 * Math.PI,
        1.29 * Math.PI,
        false
      );
      ctx.stroke();
      ctx.closePath();

      //Home L corner
      ctx.beginPath();
      ctx.arc(50, 30, 8, 0, 0.5 * Math.PI, false);
      ctx.stroke();
      ctx.closePath();
      //Home R corner
      ctx.beginPath();
      ctx.arc(50, canvas.height - 30, 8, 0, 1.5 * Math.PI, true);
      ctx.stroke();
      ctx.closePath();
      //Away R corner
      ctx.beginPath();
      ctx.arc(canvas.width - 50, 30, 8, 0.5 * Math.PI, 1 * Math.PI, false);
      ctx.stroke();
      ctx.closePath();
      //Away L corner
      ctx.beginPath();
      ctx.arc(
        canvas.width - 50,
        canvas.height - 30,
        8,
        1 * Math.PI,
        1.5 * Math.PI,
        false
      );
      ctx.stroke();
      ctx.closePath();

      ctx.font = '14px sans-serif';
      // ctx.fillStyle = 'red';
      ctx.fillText('GOAL', canvas.width - 42, canvas.height / 2 - 65);

      ctx.font = '14px sans-serif';
      ctx.fillText('YOU', 8, canvas.height / 2 + 70);
    },
  };
  return pitch.draw();
}

export default createField;
