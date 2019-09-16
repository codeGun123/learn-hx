import './style.css';
import printMe from './print.js';

function component() {
    var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = 'hello  测试 webpack 112';
    element.classList = 'box';

    var btn = document.createElement('button');
    btn.innerHTML = '打印一下'
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

let element = component();

document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('热替换');
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    });
}