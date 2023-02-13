const div = dom.create("<div>Div1</div>");
console.log(div);

dom.after(test, div);

const div3 = dom.create('<div id="parent"></div>');
dom.wrap(test, div3);


const nodes = dom.empty(window.empty);
console.log(nodes);

dom.attr(test, 'title', 'Pnj');
const title = dom.attr(test, 'title');
console.log(`title: ${title}`);

dom.text(test, '新的内容');
dom.text(test);

dom.html(test);

dom.style(test, {border: '1px solid red', color: ' blue'});
sy = dom.style(test, 'border');
console.log(sy);
dom.style(test, 'border', '1px solid black');

dom.class.add(test, 'red');
dom.class.add(test, 'black');
dom.class.remove(test, 'red');
console.log(dom.class.has(test,'red'));

const cl = ()=>{
    console.log('已点击')
};
dom.onclick(test,'click', cl);
dom.offclick(test, 'click', cl);

const test2 = dom.find('#test2')[0];
result = dom.find('.number', test2);
console.log(result);

console.log(dom.parent(test));

const l2 = dom.find('#l2')[0];
console.log(dom.siblings(l2));
console.log(dom.next(l2));
console.log(dom.previous(l2));

const t = dom.find('#travel')[0];
dom.each(dom.children(t), (n)=> dom.style(n, 'color', 'yellow'));

console.log(dom.index(l2));